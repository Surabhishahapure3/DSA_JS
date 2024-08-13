/**
 * Graph is Divided into Two Broad Categories
Directed Graph (Di- graph) – Where edges have direction.
Undirected Graph – Where edges do not represent any directed
There are various ways to represent a Graph:-

Adjacency Matrix
Adjacency List
 */

/* undirected graph*/



const undirected = (edges) =>{
    const graph = {};
    edges.forEach((edge) => {
        const [NodeOne,NodeTwo] = edge;

        if(!graph[NodeOne]) graph[NodeOne]=[]
        if(!graph[NodeTwo]) graph[NodeTwo]=[]
        graph[NodeOne].push(NodeTwo)
        graph[NodeTwo].push(NodeOne)
        
    });
    return graph
}

const search = (graph,startNode,targetNode)=>
{
    const stack = [startNode]
    const visited = new Set()

    while(stack.length>0)
    {
        const currentNode = stack.pop()

        if(currentNode === targetNode)
        {
            return true
        }

        if(!visited.has(currentNode))
        {
            visited.add(currentNode)
            const neibours = graph[currentNode]
            neibours.forEach((neibour)=>
            {
                if(!visited.has(neibour))
                {
                    stack.push(neibour)
                }
            })
        }
    }
    return false
}

const deleteNode = (graph, node) => {
    if (!graph[node]) {
        console.log(`Node ${node} does not exist in the graph.`);
        return;
    }


    graph[node].forEach(neighbor => {
        graph[neighbor] = graph[neighbor].filter(n => n !== node);
    });

    // delete graph[node];
    console.log(graph[node])

    console.log(`Node ${node} and its edges have been deleted.`);
}

const edges = [
    [0,1],
    [0,2],
    [1,3],
    [1,4],
    [3,5],
    [4,5],
];
const graph = undirected(edges);
const nodeToDelete = 1;
deleteNode(graph, nodeToDelete);
console.log("Graph after deletion:", graph);
// const search1 = search(graph,0,5)
console.log(graph)
// console.log(search1)