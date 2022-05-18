import { BOT_TOKEN } from "./src/config";
import { Telegraf } from "telegraf";
import { consoleLogger, groupLogger } from "./src/utils";

const bot = new Telegraf(BOT_TOKEN);

// middleware
bot.use(groupLogger, consoleLogger);

bot.command("test", (ctx) => {});

export default bot;
