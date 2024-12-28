import React, { useContext } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { DiagramContext } from '../context/DiagramContext';

const DiagramFlow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange } = useContext(DiagramContext);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default DiagramFlow;
