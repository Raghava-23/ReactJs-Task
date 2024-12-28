import React, { useState, useContext } from 'react';
import { DiagramContext } from '../context/DiagramContext';

const Sidebar = () => {
  const [label, setLabel] = useState('');
  const { addNode } = useContext(DiagramContext);

  const handleAddNode = () => {
    if (!label) return;
    addNode({
      id: `${Date.now()}`,
      data: { label },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    });
    setLabel('');
  };

  return (
    <div className="sidebar">
      <h3>Node Editor</h3>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Enter node label"
      />
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;
