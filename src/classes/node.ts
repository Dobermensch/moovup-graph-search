class Node {
  readonly val: string;
  connectedWith: Node[] = [];

  constructor(val: string, connectedWithNodes: Node[]) {
    this.val = val
    this.connectedWith = connectedWithNodes
  }

  addVertex(node: Node) {
    this.connectedWith.push(node);
  }

  addVertices(nodes: Node[]) {
    this.connectedWith = [...this.connectedWith, ...nodes];
  }
}

export default Node;