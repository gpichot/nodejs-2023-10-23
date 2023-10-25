import InMemoryBetRepository from "./InMemoryBetRepository";
import MongoDBMatchRepository from "./MongoDBMatchRepository";
// import InMemoryMatchRepository from "./InMemoryMatchRepository";
import { IBetRepository, IMatchRepository } from "./types";

export const MatchRepository: IMatchRepository = new MongoDBMatchRepository();

export const BetRepository: IBetRepository = new InMemoryBetRepository();
