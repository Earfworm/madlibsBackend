import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import madlibsRouter from "./routes/MadlibsRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/madlibs", madlibsRouter);
export const api = functions.https.onRequest(app);
