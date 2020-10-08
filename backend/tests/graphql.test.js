import request from "supertest";
import app from "../src/app";
import "core-js/stable";
import "regenerator-runtime/runtime";

describe("GraphQL endpoint", () => {
  it("should get graphql endpoint and return 200", async () => {
    const res = await request(app).post("/graphql").send({
      query: "{ hello }",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ data: { hello: 'hi' } });
  });
});
