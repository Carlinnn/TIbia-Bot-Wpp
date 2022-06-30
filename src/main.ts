import { Client } from "./client/Client";
import {
  fetchLatestBaileysVersion,
  useSingleFileAuthState,
} from "@adiwajshing/baileys";
import pino from "pino";

async function bootstrap() {
  const { state } = useSingleFileAuthState("./src/sessions/sessions.json");
  const { version } = await fetchLatestBaileysVersion();

  const client = new Client({
    version,
    printQRInTerminal: true,
    auth: state,
    logger: pino({ level: "silent" }),
  });

  client.start();
}

bootstrap();
