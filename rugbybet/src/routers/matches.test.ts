import mongoose from "mongoose";
import supertest from "supertest";

import app from "../app";
//import * as repositories from "../repositories";
//import InMemoryMatchRepository from "../repositories/InMemoryMatchRepository";

beforeAll(async () => {
  const mongoUri = process.env.MONGODB_URI as string;
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
  describe("GET /matches", () => {
    it("returns the list of matches", async () => {
      const request = supertest(app);

      const response = await request.get("/matches");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toMatchObject({
        teamA: "France",
        teamB: "Nouvelle-Zélande",
      });
    });
  });
});
