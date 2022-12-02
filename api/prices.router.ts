import express from "express";
import type { Response } from "express";
import prices from "../data/prices.json";

export const pricesRouter = express.Router();

pricesRouter.get("/prices", async (_, response: Response) => {
  try {
    return response.status(200).json(prices);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
