function Node(d, parentNode) {
    this.data = d;
    this.Parent = parentNode;
    this.FirstChild = null;
    this.LastChild = null;
    this.PreviousSibling = null;
    this.NextSibling = null;
}

Node.prototype.AddChild = function(child) {
    child.Parent = this;
    child.PreviousSibling = this.LastChild;
    if (this.LastChild !== null)
        this.LastChild.NextSibling = child;
    this.LastChild = child;
    if (this.FirstChild === null)
        this.FirstChild = child;
}

function GetChildren(node) {
    var result = new Array();
    var child = node.FirstChild;
    while(child)
    {
        result.push(child);
        child = child.NextSibling;
    }
    return result;
}

var BFS = function(G, v) { // procedure BFS(G,v) is
  var Result = Node();
  var Q = []; // create a queue Q
  var V = {}; // create a set V
  V[v] = true; // add v to V
  Q.push(v); // enqueue v onto Q
  Result.push(v);
  while(Q.length() !== 0) { // while Q is not empty loop
    var t = Q.shift(); // t ← Q.dequeue()
    if(t === 2) { // if t is what we are looking for then
      return Result; // return t
    } // end if
    for(var e = 0; e < G[t].length(); e++) { // for all edges e in G.adjacentEdges(t) loop
      var u = G[t][e]; // u ← G.adjacentVertex(t,e)
      if(u === 1 && !(u in V)) { // if u is not in V then
        V[u] = true; // add u to V
        Q.push(u); // enqueue u onto Q
        Result.push(u);
      } // end if
    } // end loop
    if((Result.length() - 1) % 3 !== 0) {
      Result.push(-1);
    }
  } // end loop
  return 0; // return none
}; // end BFS

var DFS = function(G, v) { // procedure DFS(G,v):
  var V = {}; // label v as discovered
  V[v] = true;
  for(var i = 0; i < G[v].length(); i++) { // for all edges from v to w in G.adjacentEdges(v) do
    if(G[v][i] === 1 && !(i in V)) { // if vertex w is not labeled as discovered then
      DFS(G, i); // recursively call DFS(G,w)
    }
  }
}