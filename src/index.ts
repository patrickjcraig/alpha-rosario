import { CalleClient } from "@call-e/calle";

const phoneNumber = process.argv[2];
const apiKey = process.env.CALLE_API_KEY;

if (!apiKey) {
  throw new Error("CALLE_API_KEY is required. Add it to your environment before running this script.");
}

if (!phoneNumber) {
  throw new Error("Usage: pnpm dev -- <E164_PHONE>");
}

const client = new CalleClient({
  apiKey,
  baseUrl: process.env.CALLE_BASE_URL ?? "https://api.heycall-e.com",
});

const call = await client.calls.createAndWait({
  task: `Call ${phoneNumber} and ask whether they can hear clearly.`,
  resultSchema: {
    type: "object",
    required: ["can_hear_clearly"],
    properties: {
      can_hear_clearly: { type: "string", enum: ["yes", "no", "unknown"] },
    },
  },
});

console.log(JSON.stringify({
  status: call.status,
  taskCompleted: call.taskCompleted,
  completionConfidence: call.completionConfidence,
  evidence: call.evidence,
  structuredResult: call.structuredResult,
}, null, 2));
