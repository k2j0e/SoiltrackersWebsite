import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

// HubSpot Native Form Configuration
// Portal: 343572703 | Region: na3
// Form GUID: d5bb2ef1-c262-4448-90db-1b854ea2a5ac
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || "343572703";
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID || "d5bb2ef1-c262-4448-90db-1b854ea2a5ac";
const HUBSPOT_REGION = process.env.HUBSPOT_REGION || "na3";
const HUBSPOT_SUBMIT_URL = `https://api-${HUBSPOT_REGION}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

// Make.com Webhook for instant automated email confirmations & notifications
const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL || "https://hook.us2.make.com/9duzp56uyolo85t3tgj8ri0yqa7695l5";

// Optional Private App Token for CRM note enrichment
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || "";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!email) {
    return NextResponse.json({ ok: false, error: "Email is required" }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();
  const clientIp = req.headers.get("x-forwarded-for") || "";

  // Parse Name into First and Last
  let firstname = "";
  let lastname = "";
  if (typeof data.name === "string" && data.name.trim()) {
    const parts = data.name.trim().split(/\s+/);
    firstname = parts[0] || "";
    lastname = parts.slice(1).join(" ") || "";
  }

  // Human-readable industry role
  const roleMap: Record<string, string> = {
    contractor: "Excavation / Earthworks Contractor",
    qp: "Environmental QP / Consultant",
    facility: "Receiving Pit / Facility Operator",
    hauler: "Fleet Hauler / Trucking Operator",
  };
  const roleStr = typeof data.role === "string" ? data.role : "";
  const jobtitle = roleMap[roleStr] || roleStr || "General Inquirer";

  // Human-readable interest / engagement
  const interestMap: Record<string, string> = {
    "founder-call": "Book 15-Min Founder Call",
    "ontario-waitlist": "Ontario Compliance Waitlist",
  };
  const rawInterest =
    typeof data.interest === "string"
      ? data.interest
      : data.source === "ontario-waitlist"
      ? "ontario-waitlist"
      : "General Inquiry";
  const interestLabel = interestMap[rawInterest] || rawInterest;

  const company = typeof data.company === "string" ? data.company.trim() : "";
  const pageSource = typeof data.source === "string" ? data.source : "get-started";

  // Format message payload containing all custom attributes
  const messageContent = [
    `Industry Role: ${jobtitle}`,
    `Inquiry Type: ${interestLabel}`,
    `Source: ${pageSource}`,
    `Submitted: ${receivedAt}`,
  ].join(" | ");

  // Build HubSpot Form Fields
  const fields = [
    { name: "email", value: email },
    { name: "firstname", value: firstname },
    { name: "lastname", value: lastname },
    { name: "company", value: company },
    { name: "message", value: messageContent },
  ].filter((f) => f.value);

  let formSuccess = false;

  try {
    // 1. Submit to Native HubSpot Forms API
    // This triggers HubSpot's native submission notifications and creates/updates the contact
    const formRes = await fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: `https://www.soiltrackers.com/${pageSource}`,
          pageName: `Soiltrackers | ${interestLabel}`,
          ipAddress: clientIp || undefined,
        },
      }),
    });

    formSuccess = formRes.ok;
    if (!formRes.ok) {
      console.error("HubSpot form submission error:", formRes.status, await formRes.text());
    }
  } catch (err) {
    console.error("HubSpot form dispatch failed:", err);
  }

  // 2. Optional CRM Note enrichment if HUBSPOT_ACCESS_TOKEN is present
  if (HUBSPOT_ACCESS_TOKEN) {
    try {
      // Find contact ID by email to attach note
      const searchRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [{ propertyName: "email", operator: "EQ", value: email }],
            },
          ],
        }),
      });

      if (searchRes.ok) {
        const searchJson = await searchRes.json();
        const contactId = searchJson.results?.[0]?.id;
        if (contactId) {
          const noteHtml = `<strong>New Soiltrackers Website Lead:</strong><br/>
• <strong>Name:</strong> ${data.name || "N/A"}<br/>
• <strong>Email:</strong> ${email}<br/>
• <strong>Company:</strong> ${company || "N/A"}<br/>
• <strong>Industry Role:</strong> ${jobtitle}<br/>
• <strong>Interest:</strong> ${interestLabel}<br/>
• <strong>Source:</strong> ${pageSource}<br/>
• <strong>Timestamp:</strong> ${receivedAt}`;

          await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              properties: {
                hs_note_body: noteHtml,
                hs_timestamp: receivedAt,
              },
              associations: [
                {
                  to: { id: contactId },
                  types: [
                    {
                      associationCategory: "HUBSPOT_DEFINED",
                      associationTypeId: 202,
                    },
                  ],
                },
              ],
            }),
          });
        }
      }
    } catch (err) {
      console.warn("HubSpot note attachment non-blocking error:", err);
    }
  }

  // 3. Dispatch to Make.com webhook for automated email confirmations
  let makeSuccess = false;
  if (MAKE_WEBHOOK_URL) {
    try {
      const makeRes = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: data.name || `${firstname} ${lastname}`.trim() || email,
          firstname,
          lastname,
          email,
          company,
          role: roleStr,
          jobtitle,
          interest: rawInterest,
          interestLabel,
          source: pageSource,
          receivedAt,
          message: messageContent,
        }),
      });
      makeSuccess = makeRes.ok;
    } catch (err) {
      console.error("Make.com webhook dispatch failed:", err);
    }
  }

  // 4. Local fallback log
  try {
    const dir = path.join(process.cwd(), "leads");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      JSON.stringify({ ...data, email, formSuccess, makeSuccess, receivedAt }) + "\n",
      "utf8"
    );
  } catch (err) {
    console.error("Lead file write failed:", err);
  }

  return NextResponse.json({ ok: true });
}
