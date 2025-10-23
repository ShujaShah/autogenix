import { Inngest } from "inngest";

// Create a client to send and receive events

// use this url to run ingest dev server : npx inngest-cli@latest dev -u http://localhost:4010/api/inngest
export const inngest = new Inngest({ id: "autogenix" });