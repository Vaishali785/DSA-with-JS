class Graph {
    constructor() {
        this.numberOfNodes = 0,
            this.adjacentNodes = {}
    }
    addVertex(node) {
        if (!isNaN(node)) { //otherwise 0 won't be added.
            this.adjacentNodes[node] = [];
            this.numberOfNodes++;
        }
        // console.log(this)
    }
    addEdge(node1, node2) {
        if (node1 && node2) {
            this.adjacentNodes[node1].push(node2);
            this.adjacentNodes[node2].push(node1);
        }
    }
}



const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
console.log(myGraph);
