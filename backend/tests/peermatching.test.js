import peermatching from "../util/peermatching.js";
import "regenerator-runtime/runtime";

describe("Shuffle", () => {
  it("should return an array with the same length", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = peermatching.shuffle(a);
    expect(a.length).toEqual(b.length);
  });

  it("should sum to the same value as the input", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = peermatching.shuffle(a);
    expect(a.reduce((a, b) => a + b, 0)).toEqual(b.reduce((a, b) => a + b, 0));
  });
});

describe("matchPeer", () => {
    // TODO
});
