var BFS = function(G, v) { // procedure BFS(G,v) is
  var Q = []; // create a queue Q
  var V = {}; // create a set V
  V[v] = true; // add v to V
  Q.push(v); // enqueue v onto Q
  while(Q.length() != 0) { // while Q is not empty loop
    var t = Q.shift(); // t ← Q.dequeue()
    if(t == 2) { // if t is what we are looking for then
      return t; // return t
    } // end if
    for(var e = 0; e < G[t].length(); e++) { // for all edges e in G.adjacentEdges(t) loop
      var u = G[t][e]; // u ← G.adjacentVertex(t,e)
      if(!(u in V)) { // if u is not in V then
        V[u] = true; // add u to V
        Q.push(u); // enqueue u onto Q
      } // end if
    } // end loop
  } // end loop
  return 0; // return none
} // end BFS

var DFS = function(G, v) { // procedure DFS-iterative(G,v):
  var S = []; // let S be a stack
  var V = {};
  S.push(v); // S.push(v)
  V[v] = true;
  while(S.length() != 0) { // while S is not empty
    v = S.pop(); // v ← S.pop() 
    if(!(v in V)) { // if v is not labeled as discovered:
      V[v] = true; // label v as discovered
//              for all edges from v to w in G.adjacentEdges(v) do
        S.push(w);//                  S.push(w)
    }
  }
}