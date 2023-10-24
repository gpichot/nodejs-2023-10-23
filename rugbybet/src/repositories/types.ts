import { Bet, BetCreatePayload, Match, MatchCreatePayload } from "../types";

export interface IMatchRepository {
  list(): Promise<Match[]>;
  detail(matchId: string): Promise<Match | null>;
  create(payload: MatchCreatePayload): Promise<Match>;
}

export interface IBetRepository {
  list(): Promise<Bet[]>;
  detail(betId: string): Promise<Bet | null>;
  create(payload: BetCreatePayload): Promise<Bet>;
}
