import request from "supertest";
import app from "../app";
import "core-js/stable";
import "regenerator-runtime/runtime";

describe("GraphQL endpoint", () => {
  it("should get graphql endpoint and return 200", async () => {
    const res = await request(app).get("/graphql").send({
      query: "{ students{ username } }",
    });
    expect(res.statusCode).toEqual(200);
  });
});
