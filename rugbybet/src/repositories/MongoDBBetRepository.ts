import { BetDocument, BetModel } from "../mongo";
import { BetCreatePayload } from "../types";
import { IBetRepository } from "./types";

function transform(bet: BetDocument) {
  return {
    id: bet._id,
    matchId: bet.matchId.toHexString(),
    userId: bet.userId,
    amount: bet.amount,
    winner: bet.winner,
  };
}

export default class MongoDBBetRepository implements IBetRepository {
  async list() {
    const results = await BetModel.find().lean();

    return results.map(transform);
  }

  async detail(betId: string) {
    const bet = await BetModel.findById(betId);

    if (!bet) {
      return null;
    }

    return transform(bet);
  }

  async create(payload: BetCreatePayload) {
    const bet = new BetModel(payload);

    await bet.save();

    return transform(bet);
  }
}
