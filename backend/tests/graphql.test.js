import "core-js/stable";
import "regenerator-runtime/runtime";
import request from "supertest";
import app from "../src/app";

describe("GraphQL endpoint", () => {
  it("should get graphql endpoint and return 200", async () => {
    const res = await request(app).post("/graphql").send({
      query: "{ hello }",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toBeDefined();
    expect(res.body.data).toEqual({ hello: "hi" });
  });

  it("should return a presigned URL", async () => {
    const res = await request(app).post("/graphql").send({
      query:
        'mutation {addSubmissionFile(course: "course", assignment: "garbage", submission:"test", filename: "file")}',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.addSubmissionFile).toEqual(
      expect.stringMatching(
        /http:\/\/localhost:9000\/rtest\/course\/garbage\/test\/file.*/
      )
    );
  });
});
