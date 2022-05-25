import investmentBot from "./src/investmentBot";
import express, { response } from "express";
import axios from "axios";
import { APP_NAME, BOT_TOKEN, WEBHOOK_URL } from "./src/config";

const port = process.env.PORT || 3000;
const app = express();

investmentBot.launch();

// Enable graceful stop
process.once("SIGINT", () => investmentBot.stop("SIGINT"));
process.once("SIGTERM", () => investmentBot.stop("SIGTERM"));

app.get("/", async (req, res) => {
  res.send("Active");
});

app.get("/webhook", async (req, res) => {
  const response = await axios.get(
    `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}`
  );
  res.send(JSON.stringify(response.data));
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});

// https://api.telegram.org/bot<token>/setWebhook?url=https://<your_domain.com>/<path>
