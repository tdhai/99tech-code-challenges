/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const router = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

router.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

/**
 * Server Activation
 */
http.createServer(app);
app.listen(7000, () => {
  console.log(`Listening on port ${PORT}`);
});
