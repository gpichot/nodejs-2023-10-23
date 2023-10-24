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
