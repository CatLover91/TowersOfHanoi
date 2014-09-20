var BFS = function(G, v) { // procedure BFS(G,v) is
  var Q = []; // create a queue Q
  var V = {}; // create a set V
  V[v] = true; // add v to V
  Q.push(v); // enqueue v onto Q
  var result = []
  while(Q.length !== 0) { // while Q is not empty loop
    var t = Q.shift(); // t ← Q.dequeue()
    result.push(t);
    if(t === 2) { // if t is what we are looking for then
      return result; // return t
    } // end if
    for(var e = 0; e < G[t].length; e++) { // for all edges e in G.adjacentEdges(t) loop
      var u = G[t][e]; // u ← G.adjacentVertex(t,e)
      if(G[t][u] === 1 && !(u in V)) { // if u is not in V then
        V[u] = true; // add u to V
        Q.push(u); // enqueue u onto Q
      } // end if
    } // end loop
  } // end loop
  return []; // return none
}; // end BFS
var checker = BFS([[0,1,0,1],[1,0,0,0],[0,0,0,1],[0,0,1,1]],1);
console.log(checker.toString());

var DFSR = function(G, v, V) { //procedure DFS(G,v):
  if(V === undefined) {
    V = {};
  }
  V[v] = true; // label v as discovered
  for(var i = 0; i < G[v].length; i++) { //for all edges from v to w in G.adjacentEdges(v) do
    if(G[v][i] === 1 && !(i in V)) { // if vertex w is not labeled as discovered then
        if(i === 2) {
          return [2];
        } else return [i].concat(DFSR(G, i, V));// recursively call DFS(G,w)
    }
  }
}
checker = DFSR([[0,1,1,0],[1,0,0,0],[1,0,0,1],[0,0,1,0]],1);
console.log(checker.toString());