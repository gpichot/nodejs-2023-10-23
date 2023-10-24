import express from "express";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { processRequestBody } from "zod-express-middleware";

const BetCreatePayloadSchema = z.object({
  matchId: z.string(),
  userId: z.string(),
  amount: z.number(),
  winner: z.string(),
});

type Bet = {
  id: string;
  matchId: string;
  userId: string;
  amount: number;
  winner: string;
};

const DefaultBet = {
  id: uuidv4(),
  matchId: "1",
  userId: "1",
  amount: 100,
  winner: "France",
};

const BetDatabase = {
  bets: [DefaultBet],
};

const router = express.Router();

router.get("/", (req, res) => {
  res.json(BetDatabase.bets);
});

router.get("/:id", (req, res) => {
  const bet = BetDatabase.bets.find((bet) => bet.id === req.params.id);

  if (!bet) {
    res.status(404).json({ message: "Bet not found" });
    return;
  }

  res.json(bet);
});

router.post("/", processRequestBody(BetCreatePayloadSchema), (req, res) => {
  const bet = req.body as Bet;
  BetDatabase.bets.push(bet);
  res.json(bet);
});

export default router;
