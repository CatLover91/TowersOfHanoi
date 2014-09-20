import json
from queue import Queue
from sets import Set

def BFS(self, G, v):#procedure BFS(G,v) is
    Q = Queue() #create a queue Q
    V = Set([v]) # create a set V
    # add v to V
    Q.put(v)#      enqueue v onto Q
    while Q.empty() is not True:# while Q is not empty loop
        t = Q.get()#         t ← Q.dequeue()
        if t is 2:#         if t is what we are looking for then
            return t#            return t
        # end if
        for i in G[t]:# for all edges e in G.adjacentEdges(t) loop
            if G[t][i] == 1:
                u = i # u ← G.adjacentVertex(t,e)
                if u not in V:# if u is not in V then
                    V.add(u)# add u to V
                    Q.put(u)# enqueue u onto Q
                # end if
        # end loop
    # end loop
    return 0# return none
# end BFS

def DFS(G, v): # procedure DFS(G,v):
    V = Set([v]) # label v as discovered
    for w in G[v]: # for all edges from v to w in G.adjacentEdges(v) do
        if G[v][w] is 1:
            if w not in V: # if vertex w is not labeled as discovered then
                if w is not 2:
                    return w + DFS(G, w) # recursively call DFS(G,w)
                else:
                    return [2]

def GrabSearch(self):
    #grab matrix from JSON
    #initialize output variable
    #Run BFS, add to Out
    #Run DFS, add to Out
    return 0
    #return Out
