import React, { createContext, useState } from 'react';
import { applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';

export const DiagramContext = createContext();

const DiagramProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  const addNode = (node) => setNodes((nds) => [...nds, node]);
  const addEdge = (edge) => setEdges((eds) => [...eds, edge]);

  return (
    <DiagramContext.Provider
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        addNode,
        addEdge,
      }}
    >
      {children}
    </DiagramContext.Provider>
  );
};

export default DiagramProvider;
