
import Node from "../classes/node";
import { getAllPossiblePaths, getLeastNumberOfHops } from "../graph-methods";

const A: Node = new Node("A", []);
const B: Node = new Node("B", []);
const C: Node = new Node("C", []);

// A - B - C
A.addVertex(B);
B.addVertices([A, C]);
C.addVertex(B);

describe("get all possible paths", () => {
  test("path from A to other nodes is 1", () => {
    expect(getAllPossiblePaths(A, B).length).toBe(1);
    expect(getAllPossiblePaths(A, C).length).toBe(1);
  });

  test("that paths from A to node that isn't in graph is 0", () => {
    expect(getAllPossiblePaths(A, new Node("D", [])).length).toBe(0);
  });
});

describe("getLeastNumberOfHops", () => {
  it("should give least number of hops as 1", () => {
    expect(getLeastNumberOfHops(A, B)).toBe(1);
  });

  it("should give least number of hops as 2", () => {
    expect(getLeastNumberOfHops(A, C)).toBe(2);
  });

  it("should give least number of hops as 0 to unnconnected node", () => {
    expect(getLeastNumberOfHops(A, new Node("D", []))).toBe(0);
  });
})