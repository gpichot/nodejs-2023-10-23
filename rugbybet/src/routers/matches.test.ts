import mongoose from "mongoose";
import supertest from "supertest";

import app from "../app";
import { MatchModel } from "../mongo";
//import * as repositories from "../repositories";
//import InMemoryMatchRepository from "../repositories/InMemoryMatchRepository";

beforeAll(async () => {
  const mongoUri = process.env.MONGODB_URI as string;
  console.log(mongoUri);
  await mongoose.connect(mongoUri, { connectTimeoutMS: 2000 });
});

afterAll(async () => {
  await mongoose.connection.close();
});

// jest.mock("../repositories");
//
// beforeAll(() => {
//   // @ts-expect-error hello
//   repositories.MatchRepository = new InMemoryMatchRepository();
// });

describe("Matches", () => {
  afterEach(async () => {
    await MatchModel.deleteMany();
  });
  describe("GET /matches", () => {
    it("returns the list of matches in DB", async () => {
      await MatchModel.create({
        teamA: "France",
        teamB: "Angleterre",
        stadium: "Stade de France",
        referee: "Gabriel THE Arbitre",
        scoreTeamA: 0,
        scoreTeamB: 0,
        date: new Date(),
      });
      const request = supertest(app);

      const response = await request.get("/matches");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toMatchObject({
        id: expect.any(String),
        teamA: "France",
        teamB: "Angleterre",
        date: expect.any(String),
      });
    });

    it("returns an empty list if there is no matches", async () => {
      const request = supertest(app);

      const response = await request.get("/matches");
      // request.post('/matches').send();

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });
});
