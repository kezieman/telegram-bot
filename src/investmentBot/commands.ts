import { Context, Telegraf } from "telegraf";
import * as Keyboard from "./keyboards";
import * as Message from "./messages";

export default (bot: Telegraf<any>) => {
  bot.start(async (ctx: Context) => {
    await ctx.reply(
      `Hi ${ctx.from?.first_name || ctx.from?.username}`,
      Keyboard.extrasKeyboard
    );
    await ctx.reply(Message.welcomeMessage, Keyboard.authKeyboard);
  });

  bot.action("login", async (ctx) => {
    const username = ctx.from?.username;
    // Check if user is already exists
    await ctx.deleteMessage();
    await ctx.answerCbQuery("You have logged in successfully!");
    // send user a message to register if user does not exists
    await ctx.replyWithHTML(Message.aboutMessage, Keyboard.investmentKeyboard);
  });

  bot.action("register", async (ctx) => {
    const username = ctx.from?.username;
    // Check if user already exists
    await ctx.deleteMessage();
    await ctx.answerCbQuery("You have registerd successfully!");
    // save user if user does not exists
    await ctx.replyWithHTML(Message.aboutMessage, Keyboard.investmentKeyboard);
  });

  bot.action("invest", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.answerCbQuery();
    await ctx.reply(
      Message.investmentPlansMessage,
      Keyboard.planCategoryKeyboard
    );
  });

  bot.action("stock-plans", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.answerCbQuery();
    await ctx.reply(
      Message.investmentPlansMessage,
      Keyboard.stockPlansKeyboard
    );
  });

  bot.action("crypto-plans", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.answerCbQuery();
    await ctx.reply(
      Message.investmentPlansMessage,
      Keyboard.cryptoPlansKeyboard
    );
  });

  bot.action(/^startInvestment-/, async (ctx) => {
    await ctx.deleteMessage();
    await ctx.answerCbQuery();
    const arg = ctx.match.input.split("-")[1];
    console.log("Argument: ", arg);
    await ctx.reply(
      Message.startInvestmentMessage,
      Keyboard.startInvestmentKeyboard
    );
  });

  bot.action(/^buyStock-/, async (ctx) => {
    await ctx.deleteMessage();
    await ctx.answerCbQuery();
    const arg = ctx.match.input.split("-")[1];
    console.log("Argument: ", arg);
    await ctx.reply(
      Message.startInvestmentMessage,
      Keyboard.startInvestmentKeyboard
    );
  });
};
