import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

// Lead intake endpoint.
// 1) Forwards every lead to Formspree (email notifications + dashboard archive).
// 2) ALWAYS appends the lead to /leads/leads.jsonl as a local fallback so nothing is
//    lost even if Formspree is down or the monthly submission cap is hit.
//    NOTE: the file fallback works in dev/self-hosted; on serverless hosts (e.g. Vercel)
//    the filesystem is read-only, so Formspree is the system of record in production.
const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xwledonj";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const lead: Record<string, unknown> = {
    ...data,
    receivedAt: new Date().toISOString(),
  };
  let forwarded = false;

  try {
    const r = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...lead,
        _subject: `New website lead: ${lead.name ?? lead.email ?? "unknown"} (${lead.source ?? "site"})`,
      }),
    });
    forwarded = r.ok;
    if (!r.ok) console.error("Formspree responded", r.status, await r.text());
  } catch (err) {
    console.error("Formspree send failed:", err);
  }

  // Local fallback — never lose a lead in dev / self-hosted environments.
  try {
    const dir = path.join(process.cwd(), "leads");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      JSON.stringify({ ...lead, forwarded }) + "\n",
      "utf8"
    );
  } catch (err) {
    console.error("Lead file write failed:", err);
  }

  if (!forwarded) {
    console.log("NEW LEAD (Formspree unreachable — saved to /leads/leads.jsonl):", lead);
  }

  return NextResponse.json({ ok: true });
}
