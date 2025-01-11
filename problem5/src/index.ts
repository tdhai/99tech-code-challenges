/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { getPrefixPath } from "./config";
import informationRouter from "./router/information";
import mongoose from "mongoose";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("up");
});

app.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

app.use(getPrefixPath("v1"), informationRouter);

mongoose
  .connect(process.env.DB_LINK || "")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

/**
 * Server Activation
 */
http.createServer(app);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
