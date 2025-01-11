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
import { MongoClient, ServerApiVersion } from "mongodb";
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
  res.status(200).send("Okk");
});

app.use(getPrefixPath("v1"), informationRouter);

mongoose
  .connect(process.env.DB_LINK || "")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// // const uri =
// //   "mongodb+srv://haitruong1405:hGHL4kc3F0jYyc1x@cluster-99tech-code-cha.wi0q1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-99tech-code-challenges";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.DB_LINK || "", {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

/**
 * Server Activation
 */
http.createServer(app);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
