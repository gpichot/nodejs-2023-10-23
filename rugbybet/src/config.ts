import "dotenv/config";

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGODB_URI");
}

export const config = {
  port: parseInt(process.env.PORT || "3000"),
  mongodbUri: process.env.MONGODB_URI,
};
