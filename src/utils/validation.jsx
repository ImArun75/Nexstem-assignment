export function validateDAG(nodes, edges) {
  const adj = {};
  nodes.forEach(n => (adj[n.id] = []));
  edges.forEach(e => adj[e.source].push(e.target));

  let visited = {}, recStack = {};
  const hasCycle = (node) => {
    if (!visited[node]) {
      visited[node] = recStack[node] = true;
      for (const neighbor of adj[node]) {
        if (!visited[neighbor] && hasCycle(neighbor)) return true;
        if (recStack[neighbor]) return true;
      }
    }
    recStack[node] = false;
    return false;
  };

  const cycle = nodes.some(n => hasCycle(n.id));
  const allConnected = nodes.every(n =>
    edges.some(e => e.source === n.id || e.target === n.id)
  );

  return {
    valid: nodes.length >= 2 && !cycle && allConnected,
  };
}
