CS480 Introduction to Artificial Intelligence (Fall, 2014)
==========================================================
Assignment 1
============

Due: Thursday, Sept. 18, 2014
Total Points: 100

Artificial intelligence researchers often model problems in a “blocks world” with simplified state representation and cleared defined actions. Consider a world in which there are three blocks “1”, “2”, and “3”, and three locations A, B, and C, where the blocks can be placed. The rule is, a block having higher value cannot be placed on top of a block with lower value. 

For example, 

+-------+                      +-------+
|       |                      |       |
| 1     |                      | 3     |
| 3   2 |                      | 1   2 |
|-------|                      |-------|
| A B C | is a legal state and | A B C | is not.
+-------+                      +-------+

Task 1: (List states) (10 pts)
List all possible states and number these states from S1, S2, ..., to SN.

Task 2: (Graph representation) (10 pts)
Assuming the rule of action in this world is that a block can be moved and placed on another place or on top of a block whose value is bigger than it. One way is to represent the entire problem by an undirected graph G = (V, E), where the vertices in V are the states {S1, S2, ..., SN}. An edge (Si, Sj) is in E if it is legal to move a block from state Si to state Sj. 
Use a graph to represent this blocks world. 

Task 3: (Adjacent matrix) (10 pts)
Use an adjacent matrix to represent the graph in Task 2. For example,
A graph
S1 ---- S2
|        |
|        |
S3 ---- S4
can be represented as a matrix
0 1 1 0
1 0 0 1
1 0 0 1
0 1 1 0

Task 4: Breadth first search (30 pts)
Assuming the initial state is 
+-------+                   
| 1     |                   
| 2     |                   
| 3     |                   
|-------|                      
| A B C | 
+-------+ 
And the goal state is

+-------+                   
|     1 |                   
|     2 |                   
|     3 |                   
|-------|                      
| A B C | 
+-------+
Use the Breadth first search algorithm on the adjacent matrix representing the graph. Your program should read in the adjacent matrix and then print out the solution obtained in breadth first search.

Task 5: Depth first search (30 pts)
Use the Depth first search algorithm on the adjacent matrix representing the graph. Your program should read in the adjacent matrix and then print out the solution obtained in depth first search.

Task 6: Analysis (10 pts)
Compared the results/performance you get using Depth first search and Breadth first search.

Task Bonus: (10 pts)
Actually, building the state diagram is not necessary. Can you extend the program to handle 4 or more blocks?

What to Hand in
Well documented code implementing breadth first search and depth first search. A README file should provide instructions on how to compile and execute the code.
Solutions to Tasks 1, 2, 3, 4, 5, 6.
Well documented code implementing Task Bonus.


Please turn in your written part in class and send the programs to swankhad@cs.odu.edu before the assignment due date.
 
