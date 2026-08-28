# CALL-E Build

A small, server-side TypeScript starter for the [CALL-E Calls API quickstart](https://docs.heycall-e.com/quickstart).

## Prerequisites

- Node.js 20 or later
- A CALL-E project API key
- A phone number you own or are authorized to call, in E.164 format (for example, `+15551234567`)

## Set up

```bash
pnpm install
Copy-Item .env.example .env
```

Set `CALLE_API_KEY` in the local `.env` file. Do not commit it. CALL-E keys are for trusted server-side code only.

PowerShell does not load `.env` automatically, so use one of the following before running the example:

```powershell
$env:CALLE_API_KEY = "iams_live_your_key"
pnpm dev -- +15551234567
```

Or load your environment with your preferred secret-management or dotenv workflow. `CALLE_BASE_URL` is optional and defaults to `https://api.heycall-e.com`.

## What the example does

`src/index.ts` explicitly takes a recipient number from the command line, creates a one-shot call task, waits for a terminal result, and prints the structured answer plus completion evidence. It will never place a call without an explicit number argument.

## Check the project

```bash
pnpm check
```

See the [CALL-E quickstart](https://docs.heycall-e.com/quickstart) and [authentication guidance](https://docs.heycall-e.com/authentication) for API-key handling and environment details.
