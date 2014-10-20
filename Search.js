var BFS = function(G, v) { // procedure BFS(G,v) is
  var Q = []; // create a queue Q
  var V = {}; // create a set V
  V[v] = true; // add v to V
  Q.push(v); // enqueue v onto Q
  var result = [];
  while(Q.length !== 0) { // while Q is not empty loop
    var t = Q.shift(); // t ← Q.dequeue()
    //console.log("col " + t);
    result.push(t);
    if(t === 2) { // if t is what we are looking for then
      return result; // return t
    } // end if
    for(var e = 0; e < G[t].length; e++) { // for all edges e in G.adjacentEdges(t) loop
      var u = G[t][e]; // u ← G.adjacentVertex(t,e)
      //console.log("row " + e + ", val " + u);
      if(G[t][e] === 1 && !(e in V)) { // if u is not in V then
        //console.log("The tip is in");
        V[e] = true; // add u to V
        Q.push(e); // enqueue u onto Q
      } // end if
    } // end loop
  } // end loop
  return 0; // return none
}; // end BFS
//var checker = BFS([[0,1,0,1],[1,0,0,0],[0,0,0,1],[1,0,1,0]],1);
//console.log(checker.toString());
//console.log("check2");
/*var DFS = function(G, v, V) { //procedure DFS(G,v):
  if(V === undefined) {
    V = {};
  }
  V[v] = true; // label v as discovered
  for(var i = 0; i < G[v].length; i++) { //for all edges from v to w in G.adjacentEdges(v) do
    if(G[v][i] === 1 && !(i in V)) { // if vertex w is not labeled as discovered then
        if(i === 2) {
          return [2];
        } else return [i].concat(DFS(G, i, V));// recursively call DFS(G,w)
    }
  }
};*/
var DFS = function(G, v) { //procedure DFS-iterative(G,v):
  var S = []; //2      let S be a stack
  var V = {};
  var result = [];
  S.push(v);
  while(S.length > 0) {// S is not empty
    v = S.pop(); //5            v ← S.pop() 
    if(!(v in V)) { //6            if v is not labeled as discovered:
      V[v] = true; //7                label v as discovered
      result.push(v);
      if(v === 2) {
        return result;
      }
      for(var i = 0; i < G[v].length; i++) { //for all edges from v to w in G.adjacentEdges(v) do
        if(G[v][i] === 1 && !(i in V)) {
          S.push(i);
          result.push(i);
          if(i === 2) {
            return result;
          }
        }
      }
    }
  }
};
//3,4,8,5,6,9,10, 
//checker = DFS([[0,1,0,1],[1,0,0,0],[0,0,0,1],[0,0,1,1]],1);
//console.log(checker.toString());

//load json graph
var adjacency = [
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 2
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 7
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // 9
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 12
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 13
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 16
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0], // 17
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0], // 18
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], // 19
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 20
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 21
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0], // 22
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], // 23
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 24
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 25
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]  // 26
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
    ];
//make output
//add bfs to output
var BFSdata = BFS(adjacency, 0);
//add dfs to output
var DFSdata = DFS(adjacency, 0);
console.log(BFSdata.toString()+"/n");
console.log(DFSdata.toString());
//output
/*for(var i = 0; i < BFSdata.length; i++) {

}
for(var j = 0; j < DFSdata.length; j++) {
  
}
var junk = null;
var fh = null;
var str = null;
var output = [[],[],[],[],[],[],[],[],[]];
for(var i = 0; i < BFSdata.length; i++) {
  if(i != 0) {
    output[0].concat("    ");
    output[1].concat("    ");
    output[2].concat("    ");
    output[3].concat(" -> ");
    output[4].concat("    ");
    output[5].concat("    ");
    output[6].concat("    ");
  };
  junk = "data/AI/s"+BFSdata[i].toString()+".mkdn";
  fh = fopen(junk, 0);
  if(fh != -1) {
    junk = flength(fh);
    str =  fread(fh, junk).split('\n');
    fclose(fh);
  };
  if(BFSdata[i] > 9) {
    junk = BFSdata[i].toString + "   ";
  } else {
    junk = BFSdata[i].toString + "    ";
  }
  output[0].concat("   S"+junk);
  output[1].concat(str[1].trim());
  output[2].concat(str[2].trim());
  output[3].concat(str[3].trim());
  output[4].concat(str[4].trim());
  output[5].concat(str[5].trim());
  output[6].concat(str[6].trim());
};

var output2 = [[],[],[],[],[],[],[],[],[]];
for(var i = 0; i < DFSdata.length; i++) {
  if(i != 0) {
    output2[0].concat("    ");
    output2[1].concat("    ");
    output2[2].concat("    ");
    output2[3].concat(" -> ");
    output2[4].concat("    ");
    output2[5].concat("    ");
    output2[6].concat("    ");
  };
  junk = "data/AI/s"+DFSdata[i].toString()+".mkdn";
  $(#state).load(junk, function() {
    if(fh != -1) {
      junk = flength(fh);
      str =  fread(fh, junk).split('\n');
      fclose(fh);
    }
  });
  if(DFSdata[i] > 9) {
    junk = DFSdata[i].toString + "   ";
  } else {
    junk = DFSdata[i].toString + "    ";
  }
  output2[0].concat("   S"+junk);
  output2[1].concat(str[1].trim());
  output2[2].concat(str[2].trim());
  output2[3].concat(str[3].trim());
  output2[4].concat(str[4].trim());
  output2[5].concat(str[5].trim());
  output2[6].concat(str[6].trim());
};

document.write('<h2>Breadth First Search results:</h2>'
  + output[0] + '<br>'
  + output[1] + '<br>'
  + output[2] + '<br>'
  + output[3] + '<br>'
  + output[4] + '<br>'
  + output[5] + '<br>'
  + output[6] + '<h2>Depth First Search results:</h2>'
  + output2[0] + '<br>'
  + output2[1] + '<br>'
  + output2[2] + '<br>'
  + output2[3] + '<br>'
  + output2[4] + '<br>'
  + output2[5] + '<br>'
  + output2[6]);*/