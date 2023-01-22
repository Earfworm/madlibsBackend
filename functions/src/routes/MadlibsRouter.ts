import express from "express";
import { getClient } from "../db";
import Madlibs from "../models/Madlibs";

const madlibsRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

madlibsRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<Madlibs>("madlibs").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

madlibsRouter.post("/stories", async (req, res) => {
  const newStory: Madlibs = req.body;
  try {
    const client = await getClient();
    const cursor = client
      .db()
      .collection<Madlibs>("madlibs")
      .insertOne(newStory);
    const results = await cursor;
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default madlibsRouter;
