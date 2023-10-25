import mongoose, { Schema, Types } from "mongoose";

import { Bet, Match } from "./types";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: Date,
});

export const User = mongoose.model("User", UserSchema);

export type MatchDocument = Omit<Match, "id"> & {
  _id: string;
};

const MatchSchema = new mongoose.Schema<MatchDocument>({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  stadium: { type: String, required: true },
  date: { type: Date, required: true },
  scoreTeamA: { type: Number, required: true },
  scoreTeamB: { type: Number, required: true },
  referee: { type: String, required: true },
});

export const MatchModel = mongoose.model<MatchDocument>("Match", MatchSchema);

export type BetDocument = Omit<Bet, "id" | "matchId"> & {
  _id: string;
  matchId: Types.ObjectId;
};

const BetSchema = new Schema<BetDocument>({
  matchId: { type: Schema.Types.ObjectId, ref: "Match" },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  winner: { type: String, required: true },
});

export const BetModel = mongoose.model<BetDocument>("Bet", BetSchema);
