//undirected graph, bidirectional communication
class Graph{
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []

        return this.adjacencyList;
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1)
        return this.adjacencyList;
    }

    removeVertex(vertex){
        const vertices = this.adjacencyList[vertex];
        for (const v of vertices) {
            this.adjacencyList[v] = this.adjacencyList[v].filter(el => el !== vertex)
        }
        delete this.adjacencyList[vertex]
        return this.adjacencyList;
    }

    DFSRecursive(start){
        const result = [];
        const hashVisited = {}
        const adjacencyList = this.adjacencyList;
        DFS(start)
        function DFS(vertex){
            if(!vertex) return;
            hashVisited[vertex] = true;
            result.push(vertex);
            console.log(adjacencyList[vertex])
            adjacencyList[vertex].forEach(neighbor => {
                if(!hashVisited[neighbor])
                    return DFS(neighbor)
            })

        }
        return result;
    }

    DFSIterative(start){
        let hashVisited = {}
        let stack = [start]
        let result = []
        hashVisited[stack] = true
        let vertex;

        while (stack.length){
            console.log(stack)
            vertex = stack.pop();
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if(!hashVisited[neighbor]){
                    hashVisited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }

        return result;
    }

    BFS(start){
        let queue = [start];
        let result = [];
        let hashVisited = {};
        hashVisited[start] = true;
        let vertex;

        while (queue.length){
            vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if(!hashVisited[neighbor]){
                    hashVisited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
}


// const graph = new Graph();
// graph.addVertex('San Francisco')
// graph.addVertex('Tokyo')
// graph.addVertex('Aspen')
// graph.addEdge('Aspen', 'Tokyo')
// graph.addEdge('Aspen', 'San Francisco')
// graph.addEdge('Tokyo', 'San Francisco')
// // graph.removeEdge('Aspen', 'San Francisco')
// // graph.removeVertex('Aspen');
// console.log(graph.adjacencyList)

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.adjacencyList)
console.log('=============================')
// console.log(g.DFSRecursive('A'))
// console.log(g.DFSIterative('A'))
console.log(g.BFS('A'))