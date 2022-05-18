import investmentBot from "./src/investmentBot";

investmentBot.launch();

// Enable graceful stop
process.once("SIGINT", () => investmentBot.stop("SIGINT"));
process.once("SIGTERM", () => investmentBot.stop("SIGTERM"));
