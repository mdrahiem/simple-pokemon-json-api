import express from "express";
import type { Response } from "express";
import payments from "../data/payments.json";

export const paymentsRouter = express.Router();

paymentsRouter.get("/payments", async (_, response: Response) => {
  try {
    return response.status(200).json(payments);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
