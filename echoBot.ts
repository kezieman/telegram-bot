import { BOT_TOKEN } from "./src/config";
import { Telegraf } from "telegraf";
import { groupLogger } from "./src/utils";

const bot = new Telegraf(BOT_TOKEN);

// middleware
bot.use(groupLogger);

const helpMessage = `
Say something to me.
/start - Start the bot
/echo {message} - Echo the message
/help - Show help message
`;

bot.start((ctx) => {
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  const { text } = ctx.message;
  const input = text.split(" ");
  let message = "";

  if (input.length === 1) {
    message = "You said 'echo'";
  } else {
    input.shift();
    message = input.join(" ");
  }

  ctx.reply(message);
});

export default bot;
