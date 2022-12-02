import express from "express";
import cors from "cors";
import { orderRouter } from "./api/orders.router";
import { paymentsRouter } from "./api/payments.router";
import { pricesRouter } from "./api/prices.router";
const port = 8080;

export const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", orderRouter);
app.use("/", paymentsRouter);
app.use("/", pricesRouter);

app.get("/", (_req, res) => {
  res.send(
    "Hello from app-server. This route has no information. Please check the other routes"
  );
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`app-server listening at http://localhost:${port}`);
  });
}
