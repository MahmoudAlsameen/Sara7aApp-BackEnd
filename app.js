import cors from "cors";
import express from "express";
import morgan from "morgan";

import { load_env } from "./utils/load.env.js";

load_env();
const envMorganLogging = process.env.MORGAN_LOGGING;
const app = express();

app.use(cors());
app.use(express.json());
if (envMorganLogging) {
  app.use(morgan(envMorganLogging));
  console.log(`Morgan_Logging mode: ${envMorganLogging}`);
}

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on the server`,
  });
});

export default app;
