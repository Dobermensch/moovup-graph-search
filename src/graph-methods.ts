import Node from "./classes/node";

// a. Write a function that returns all the possible paths between A­-H.

export const getAllPossiblePaths = (startNode: Node, endNode: Node): string[][] => {
  const paths: string[][] = [];

  const getPaths = (node: Node, endNode: Node, path: string[] = []): void => {
    if (!node) return;
    // avoid cycles
    if (path.includes(node.val)) return;

    path.push(node.val);

    // end found. Add to paths
    if (path.includes(endNode.val)) {
      paths.push(path);
      return;
    }

    // execute function on all connected nodes
    node.connectedWith.forEach(n => getPaths(n, endNode, [...path]));
  }

  getPaths(startNode, endNode);

  return paths;
}

// b. Write a function that returns the least number of hops (shortest path) between A­-H.

export const getLeastNumberOfHops = (startNode: Node, endNode: Node): number => {
  const paths = getAllPossiblePaths(startNode, endNode)
  if (!paths.length) return 0;
  const hops = Math.min(...paths.map(path => path.length)) - 1;
  return hops < 0 ? 0 : hops;
}
