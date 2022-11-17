import Node from "../../classes/node";

describe("Node class", () => {
  let A: Node;
  beforeEach(() => {
    A = new Node("A", []);
  });

  it("should be initialized correctly for single node", () => {
    expect(A.val).toBe("A");
    expect(typeof A.connectedWith).toBe("object");
    expect(A.connectedWith.length).toBe(0);
  })

  it("should be initalized properly when initialized with existing node", () => {
    const B = new Node("B", [A]);
    expect(B.connectedWith.length).toBe(1);
    expect(B.connectedWith[0]).toBe(A);
  });

  test("addVertex", () => {
    const B: Node = new Node("B", []);

    A.addVertex(B);

    expect(A.connectedWith.length).toBe(1);
    expect(A.connectedWith[0]).toBe(B);
  });

  test("addVertices", () => {
    const B: Node = new Node("B", []);
    const C: Node = new Node("C", []);

    A.addVertices([B, C]);

    expect(A.connectedWith.length).toBe(2);
    expect(A.connectedWith).toContain(B);
    expect(A.connectedWith).toContain(C);
  })
})