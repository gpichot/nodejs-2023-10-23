import express from "express";
import { processRequestBody } from "zod-express-middleware";

import { MatchRepository } from "../repositories";
import { MatchCreatePayloadSchema } from "../types";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await MatchRepository.list());
});

router.get("/:id", async (req, res) => {
  const match = await MatchRepository.detail(req.params.id);

  if (!match) {
    res.status(404).json({ message: "Match not found" });
    return;
  }

  res.json(match);
});

router.post(
  "/",
  processRequestBody(MatchCreatePayloadSchema),
  async (req, res) => {
    const match = await MatchRepository.create(req.body);

    res.status(201).json(match);
  }
);

export default router;
