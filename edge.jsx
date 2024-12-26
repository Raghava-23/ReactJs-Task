import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const Node = ({ data }) => {
  return (
    <div className={node ${data.type}}>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div>{data.label}</div>
    </div>
  );
};

export default Node;

import React from 'react';

const Edge = () => {
  return (
    <div style={{ width: '100%' }}>
      {/* Custom edge styling can be added here */}
    </div>
  );
};

export default Edge;