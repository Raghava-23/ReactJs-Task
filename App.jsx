import React, { useState } from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';
import Node from './Node';
import Edge from './Edge';
import metadata from './metadata.json';

const App = () => {
  const [nodes, setNodes] = useState(metadata.nodes);
  const [edges, setEdges] = useState(metadata.edges);

  const onNodesChange = (changedNodes) => {
    setNodes((nds) => 
      nds.map((n) => {
        if (n.id === changedNodes[0].id) {
          n.position = changedNodes[0].position;
        }
        return n;
      })
    );
  };

  const onEdgesChange = (changedEdges) => {
    setEdges(changedEdges);
  };

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange}
        nodeTypes={{
          input: Node,
          process: Node,
          output: Node
        }}
        edgeType={Edge}
      >
        <Background />
        {/* Add sidebar or modal for editing metadata here */}
      </ReactFlow>
    </div>
  );
};

export default App;