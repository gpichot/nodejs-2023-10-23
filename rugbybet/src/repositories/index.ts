import InMemoryBetRepository from "./InMemoryBetRepository";
import InMemoryMatchRepository from "./InMemoryMatchRepository";

export const MatchRepository = new InMemoryMatchRepository();

export const BetRepository = new InMemoryBetRepository();
