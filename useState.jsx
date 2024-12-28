const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);

const handleNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
const handleEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));
