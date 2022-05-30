import { Context, Telegraf } from "telegraf";
import * as Keyboard from "./keyboards";
import * as Message from "./messages";

export default (bot: Telegraf<any>) => {
  bot.start(async (ctx: Context) => {
    try {
      await ctx.reply(
        `Hi ${ctx.from?.first_name || ctx.from?.username}`,
        Keyboard.extrasKeyboard
      );
      await ctx.reply(Message.welcomeMessage, Keyboard.authKeyboard);
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action("login", async (ctx) => {
    try {
      const username = ctx.from?.username;
      // Check if user is already exists
      await ctx.deleteMessage();
      await ctx.answerCbQuery("You have logged in successfully!");
      // send user a message to register if user does not exists
      await ctx.replyWithHTML(
        Message.aboutMessage,
        Keyboard.investmentKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action("register", async (ctx) => {
    try {
      const username = ctx.from?.username;
      // Check if user already exists
      await ctx.deleteMessage();
      await ctx.answerCbQuery("You have registerd successfully!");
      // save user if user does not exists
      await ctx.replyWithHTML(
        Message.aboutMessage,
        Keyboard.investmentKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action("invest", async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      await ctx.reply(
        Message.investmentPlansMessage,
        Keyboard.planCategoryKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action("stock-plans", async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      await ctx.reply(
        Message.investmentPlansMessage,
        Keyboard.stockPlansKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action("crypto-plans", async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      await ctx.reply(
        Message.investmentPlansMessage,
        Keyboard.cryptoPlansKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action(/^startInvestment-/, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      const arg = ctx.match.input.split("-")[1];
      console.log("Argument: ", arg);
      await ctx.reply(
        Message.startInvestmentMessage,
        Keyboard.startInvestmentKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });

  bot.action(/^buyStock-/, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      const arg = ctx.match.input.split("-")[1];
      console.log("Argument: ", arg);
      await ctx.reply(
        Message.startInvestmentMessage,
        Keyboard.startInvestmentKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });
};
bot.action("upload-proof", async (ctx) => {
    try {
      await ctx.deleteMessage();
      await ctx.answerCbQuery();
      await ctx.reply(
        Message.walletAddressMessage,
        Keyboard.startInvestmentKeyboard
      );
    } catch (e: any) {
      console.log(e.message);
    }
  });
