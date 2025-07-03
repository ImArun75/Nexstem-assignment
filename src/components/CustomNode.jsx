import React from 'react';
import { Handle, Position } from 'reactflow';

export default function CustomNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: '2px solid #555',
      borderRadius: 6,
      background: '#fff',
      minWidth: 100,
      textAlign: 'center',
      fontWeight: 'bold',
    }}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        isConnectable={true}
      />
      {data.label}
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={true}
      />
    </div>
  );
}
