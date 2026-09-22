import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

// HubSpot CRM integration
// Directly creates or updates Contacts in HubSpot CRM (Portal 343572703)
// and attaches an activity note to the contact record timeline.
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
  const lead: Record<string, unknown> = {
    ...data,
    email,
    receivedAt,
  };

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
  const jobtitle = roleMap[roleStr] || roleStr;

  // Human-readable interest / engagement
  const interestMap: Record<string, string> = {
    "founder-call": "Book 15-Min Founder Call",
    "ontario-waitlist": "Ontario Compliance Waitlist",
  };
  const rawInterest = typeof data.interest === "string" ? data.interest : (data.source === "ontario-waitlist" ? "ontario-waitlist" : "General Inquiry");
  const interestLabel = interestMap[rawInterest] || rawInterest;

  // Build Contact Properties
  const contactProperties: Record<string, string> = {
    email,
    lifecyclestage: "lead",
    hs_lead_status: "NEW",
  };
  if (firstname) contactProperties.firstname = firstname;
  if (lastname) contactProperties.lastname = lastname;
  if (typeof data.company === "string" && data.company.trim()) {
    contactProperties.company = data.company.trim();
  }
  if (jobtitle) contactProperties.jobtitle = jobtitle;
  contactProperties.message = `Inquiry: ${interestLabel} | Role: ${jobtitle || "N/A"} | Source: ${data.source || "Website"}`;

  let hubspotSuccess = false;
  let hubspotContactId: string | null = null;

  if (!HUBSPOT_ACCESS_TOKEN) {
    console.warn("HUBSPOT_ACCESS_TOKEN is not set. Skipping HubSpot CRM push.");
  } else {
    try {
      // 1. Upsert Contact in HubSpot CRM
      const upsertRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        inputs: [
          {
            id: email,
            idProperty: "email",
            properties: contactProperties,
          },
        ],
      }),
    });

    if (upsertRes.ok) {
      const resJson = await upsertRes.json();
      hubspotContactId = resJson.results?.[0]?.id || null;
      hubspotSuccess = true;
    } else {
      console.error("HubSpot contact upsert failed:", upsertRes.status, await upsertRes.text());
    }

    // 2. Attach an Activity Note to the Contact's HubSpot timeline
    if (hubspotContactId) {
      const noteHtml = `<strong>New SoilTracker Website Lead:</strong><br/>
• <strong>Name:</strong> ${data.name || "N/A"}<br/>
• <strong>Email:</strong> ${email}<br/>
• <strong>Company:</strong> ${data.company || "N/A"}<br/>
• <strong>Industry Role:</strong> ${jobtitle || "N/A"}<br/>
• <strong>Interest:</strong> ${interestLabel}<br/>
• <strong>Source Page:</strong> ${data.source || "Website"}<br/>
• <strong>Timestamp:</strong> ${receivedAt}`;

      await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: noteHtml,
            hs_timestamp: receivedAt,
          },
          associations: [
            {
              to: { id: hubspotContactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 202, // Note to Contact
                },
              ],
            },
          ],
        }),
      });
    }
    } catch (err) {
      console.error("HubSpot lead submission error:", err);
    }
  }

  // Local fallback log — preserves record in dev / self-hosted environments
  try {
    const dir = path.join(process.cwd(), "leads");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      JSON.stringify({ ...lead, hubspotSuccess, hubspotContactId }) + "\n",
      "utf8"
    );
  } catch (err) {
    console.error("Lead file write failed:", err);
  }

  return NextResponse.json({ ok: true });
}
