import express, { NextFunction, Request, Response } from "express";

import betsRouter from "./routers/bets";
import matchesRouter from "./routers/matches";
import { config } from "./config";

console.log(config.port);
const app = express();

app.use(express.json());

app.use("/matches", matchesRouter);
app.use("/bets", betsRouter);

app.get("/", (_, res) => res.status(200).send("OK"));

function fibonacci(n: number): number {
  if (n < 0)
    throw new Error(`n must be greater than or equal to 0, received ${n}`);
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get("/fibonacci/:n", (req, res) => {
  return res.status(200).send(fibonacci(parseInt(req.params.n)).toString());
});

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  console.log(err);
  if (err) {
    res.status(500).send("Internal error");
  }
});

export default app;
