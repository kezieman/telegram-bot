import { Context } from "telegraf";
import { GROUP_CHAT_ID } from "../config";

export const consoleLogger = async (ctx: any, next: () => Promise<void>) => {
  console.log(`@${ctx.from?.username} said ${ctx.message?.text}`);
  await next();
};

export const groupLogger = async (ctx: any, next: () => Promise<void>) => {
  const message = `
  Username: @${ctx.from?.username}
Message:   ${ctx.message?.text}
Time:     ${new Date().toLocaleString()}
  `;
  ctx.telegram.sendMessage(GROUP_CHAT_ID, message);
  await next();
};
