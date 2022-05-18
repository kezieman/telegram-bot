import { BOT_TOKEN } from "./src/config";
import { Telegraf } from "telegraf";

const bot = new Telegraf(BOT_TOKEN);

bot.use(async (ctx, next) => {
  ctx.reply("You sent a message");
  await next();
});

bot.start((ctx) => {
  ctx.reply("You just started the bot");
});

bot.settings((ctx) => {
  ctx.reply("You just sent the settings command");
});

bot.help((ctx) => {
  ctx.reply("You just sent the help command");
});

bot.command("test", (ctx) => {
  // Single command.
  ctx.reply("You just sent the test command");
});

bot.command(["Test", "TEST"], (ctx) => {
  // Multiple commands can be added
  ctx.reply("You just sent the test command");
});

bot.hears("cat", (ctx) => {
  ctx.reply("Meow");
});

bot.on("text", (ctx) => {
  ctx.reply("You just sent a text message");
});

export default bot;
