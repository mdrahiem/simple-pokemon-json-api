import express from "express";
import type { Response } from "express";
import orders from "../data/orders.json";

export const orderRouter = express.Router();

orderRouter.get("/orders", async (_, response: Response) => {
  try {
    return response.status(200).json(orders);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
