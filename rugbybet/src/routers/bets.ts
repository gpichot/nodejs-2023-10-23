import express from "express";
import { processRequestBody } from "zod-express-middleware";

import { BetRepository } from "../repositories";
import { BetCreatePayloadSchema } from "../types";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await BetRepository.list());
});

router.get("/:id", async (req, res) => {
  const bet = await BetRepository.detail(req.params.id);

  if (!bet) {
    res.status(404).json({ message: "Bet not found" });
    return;
  }

  res.json(bet);
});

router.post(
  "/",
  processRequestBody(BetCreatePayloadSchema),
  async (req, res) => {
    const bet = await BetRepository.create(req.body);

    res.json(bet);
  }
);

export default router;
