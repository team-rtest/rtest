import { matchpeer, shuffle, matchpeer2 } from "../util/peermatching.js";
import "regenerator-runtime/runtime";

describe("Shuffle", () => {
  it("should return an array with the same length", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = shuffle(a);
    expect(a.length).toEqual(b.length);
  });

  it("should sum to the same value as the input", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = shuffle(a);
    expect(a.reduce((a, b) => a + b, 0)).toEqual(b.reduce((a, b) => a + b, 0));
  });
});

describe("matchPeer", () => {
  // TODO
  it("should return arrays with same length", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const c = matchpeer(a, b);
    for (let i = a.length - 2; i > 0; i--) {
      expect(c[i].length).toEqual(c[i + 2].length);
    }
  });
});

// I left the "only" property on this test to disable the others
// Once you rework/remove useless tests, remove "only"
describe("matchPeer2", () => {
  it.only("should return peer review sets of the required size", async () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = 3;
    const c = matchpeer2(a, b);

    for (let v in c) {
      expect(c[v].size).toEqual(b);
    }
  });
});
