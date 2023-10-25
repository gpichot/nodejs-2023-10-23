import { MatchDocument, MatchModel } from "../mongo";
import { MatchCreatePayload } from "../types";
import { IMatchRepository } from "./types";

function transform(match: MatchDocument) {
  return {
    id: match._id,
    teamA: match.teamA,
    teamB: match.teamB,
    stadium: match.stadium,
    date: match.date,
    scoreTeamA: match.scoreTeamA,
    scoreTeamB: match.scoreTeamB,
    referee: match.referee,
  };
}

export default class MongoDBMatchRepository implements IMatchRepository {
  async list() {
    const results = await MatchModel.find().lean();

    return results.map(transform);
  }

  async detail(matchId: string) {
    const match = await MatchModel.findById(matchId);

    if (!match) {
      return null;
    }

    return transform(match);
  }

  async create(payload: MatchCreatePayload) {
    const match = new MatchModel(payload);

    await match.save();

    return transform(match);
  }
}
