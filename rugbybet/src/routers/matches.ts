import express from "express";

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

router.post("/", async (req, res) => {
  const parsed = MatchCreatePayloadSchema.safeParse(req.body);

  if (!parsed.success) {
    const humanizedErrors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      code: issue.code,
    }));
    return res.status(400).json(humanizedErrors);
  }

  const body = req.body;
  const match = await MatchRepository.create(body);

  res.status(201).json(match);
});

export default router;
