import { Match, MatchCreatePayload } from "../types";

export interface IMatchRepository {
  list(): Promise<Match[]>;
  detail(matchId: string): Promise<Match | null>;
  create(payload: MatchCreatePayload): Promise<Match>;
}
