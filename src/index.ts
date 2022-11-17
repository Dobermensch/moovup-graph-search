import Node from "./classes/node";
import { getAllPossiblePaths, getLeastNumberOfHops } from "./graph-methods";

const A: Node = new Node("A", []);
const B: Node = new Node("B", []);
const C: Node = new Node("C", []);
const D: Node = new Node("D", []);
const E: Node = new Node("E", []);
const F: Node = new Node("F", []);
const G: Node = new Node("G", []);
const H: Node = new Node("H", []);

A.addVertices([B, D, H]);
B.addVertices([A, D, C]);
C.addVertices([B, D, F]);
D.addVertices([A, B, C, E]);
E.addVertices([D, F, H]);
F.addVertices([C, E, G]);
G.addVertices([F, H]);
H.addVertices([A, E, G]);

const ans = getAllPossiblePaths(A, H);
console.log(ans);

const ans2 = getLeastNumberOfHops(A, H);
console.log(ans2);