import cors from "cors";
import express from "express";
import morgan from "morgan";
import connection from "./db/connection.js";
import { load_env } from "./utils/load.env.js";

load_env();
const port = process.env.PORT || 4750;
const envMorganLogging = process.env.MORGAN_LOGGING;
const server = express();

server.use(cors());
server.use(express.json());
if (envMorganLogging) {
  server.use(morgan(envMorganLogging));
  console.log(`Morgan_Logging mode: ${envMorganLogging}`);
}

connection();
server.listen(port, () =>
  console.log(`Server Started, listening to port ${port}`)
);
