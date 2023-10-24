import { z } from "zod";

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  stadium: string;
  date: Date;
  scoreTeamA: number;
  scoreTeamB: number;
  referee: string;
};

export const MatchCreatePayloadSchema = z.object({
  teamA: z.string(),
  teamB: z.string(),
  stadium: z.string(),
  date: z.coerce.date(),
  scoreTeamA: z.number(),
  scoreTeamB: z.number(),
  referee: z.string(),
});

export type MatchCreatePayload = z.output<typeof MatchCreatePayloadSchema>;

export const BetCreatePayloadSchema = z.object({
  matchId: z.string(),
  userId: z.string(),
  amount: z.number(),
  winner: z.string(),
});

export type Bet = {
  id: string;
  matchId: string;
  userId: string;
  amount: number;
  winner: string;
};

export type BetCreatePayload = z.output<typeof BetCreatePayloadSchema>;
