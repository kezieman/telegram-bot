import { BOT_TOKEN } from "../config";
import { Telegraf } from "telegraf";
import { consoleLogger, groupLogger } from "../utils";
import Commands from "./commands";

if (BOT_TOKEN === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}

export const investmentBot = new Telegraf(BOT_TOKEN);

// middleware
investmentBot.use(groupLogger, consoleLogger);

Commands(investmentBot);

export default investmentBot;
