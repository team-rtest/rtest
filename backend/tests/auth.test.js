import dotenv from "dotenv";
dotenv.config();
import "regenerator-runtime/runtime";

describe("Dotenv has secret key", () => {
  it("dotenv should have secret key", async () => {
    const res = expect.anything(process.env.SECRET_KEY);
  });
});