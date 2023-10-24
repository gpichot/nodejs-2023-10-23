import { v4 as uuidv4 } from "uuid";

import { BetCreatePayload } from "../types";
import { IBetRepository } from "./types";

const DefaultBet = {
  id: uuidv4(),
  matchId: "1",
  userId: "1",
  amount: 100,
  winner: "France",
};

const BetDatabase = {
  bets: [DefaultBet],
};

export default class BetRepository implements IBetRepository {
  async list() {
    return BetDatabase.bets;
  }

  async detail(betId: string) {
    return BetDatabase.bets.find((bet) => bet.id === betId) ?? null;
  }

  async create(payload: BetCreatePayload) {
    const bet = {
      ...payload,
      id: uuidv4(),
    };

    BetDatabase.bets.push(bet);

    return bet;
  }
}
