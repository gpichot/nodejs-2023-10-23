import { v4 as uuidv4 } from "uuid";

import { Match, MatchCreatePayload } from "../types";
import { IMatchRepository } from "./types";

const DefaultMatch = {
  id: uuidv4(),
  teamA: "France",
  teamB: "Nouvelle-Zélande",
  stadium: "Stade de France",
  date: new Date(),
  scoreTeamA: 0,
  scoreTeamB: 0,
  referee: "M. Dupont",
};

const MatchDatabase: {
  matches: Match[];
} = {
  matches: [DefaultMatch],
};

export default class InMemoryMatchRepository implements IMatchRepository {
  async list() {
    return MatchDatabase.matches;
  }

  async detail(matchId: string) {
    return MatchDatabase.matches.find((match) => match.id === matchId) || null;
  }

  async create(payload: MatchCreatePayload) {
    const match: Match = {
      id: uuidv4(),
      ...payload,
    };

    MatchDatabase.matches.push(match);

    return match;
  }
}
