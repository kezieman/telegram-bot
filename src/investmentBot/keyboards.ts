import { Markup } from "telegraf";

export const investmentKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("📈 Invest", "invest"),
]);

export const authKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("🔑 Login", "login"),
  Markup.button.callback("🔐 Register", "register"),
]);

export const extrasKeyboard = Markup.keyboard(
  ["ℹ️ Support", "❓ FAQs", "🌏 Website"],
  { columns: 2 }
)
  .resize()
  .oneTime();

export const planCategoryKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("📈 Stock", "stock-plans"),
  Markup.button.callback("📊 Crypto", "crypto-plans"),
]);

export const stockPlansKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("NFP", "buyStock-NFPs"),
    Markup.button.callback("Blockchain ETFs", "buyStock-BETFs"),
    Markup.button.callback("Mutual Funds", "buyStock-MFs"),
    Markup.button.callback("Comodity Trade", "buyStock-CT"),
    Markup.button.callback("↩️ Go Back", "invest"),
  ],
  { columns: 2 }
);

export const cryptoPlansKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("BTC", "startInvestment-BTC"),
    Markup.button.callback("ETH", "startInvestment-ETH"),
    Markup.button.callback("SOL", "startInvestment-SOL"),
    Markup.button.callback("LTC", "startInvestment-LTC"),
    Markup.button.callback("BNB", "startInvestment-BNB"),
    Markup.button.callback("ADA", "startInvestment-ADA"),
    Markup.button.callback("↩️ Go Back", "invest"),
  ],
  { columns: 2 }
);

export const startInvestmentKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("Verify Payment ✅", "upload-proof"),
    Markup.button.callback("↩️ Back Plans", "invest"),
  ],
  { columns: 1 }
);

export const copyMessageKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("📋 Copy Address", "copy-message"),
]);
