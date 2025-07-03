import React from 'react';

export default function JSONPreview({ nodes, edges }) {
  return (
    <pre style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      maxHeight: '200px',
      overflow: 'auto',
      backgroundColor: '#f5f5f5',
      fontSize: '12px',
      padding: '10px',
    }}>
      {JSON.stringify({ nodes, edges }, null, 2)}
    </pre>
  );
}