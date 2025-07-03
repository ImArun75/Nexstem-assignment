import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';



import { IoAdd } from "react-icons/io5";
import { IoReload } from "react-icons/io5";

export default function ControlsPanel({ onAddNode, onAutoLayout, isValid }) {
  return (
    <div style={{ padding: 10, background: '#fff', position: 'absolute', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
      <button style={{display: 'flex', justifyContent: 'center', margin: 20, cursor: 'pointer'}}  onClick={onAddNode}>
        <IoAdd size={20} style={{marginRight: 10}}/> Add Node
      </button>
      <button style={{display: 'flex', justifyContent: 'center', margin: 20, cursor: 'pointer'}} onClick={onAutoLayout}>
        <IoReload size={20} style={{marginRight: 10}}/> Auto Layout
      </button>
      <span style={{ marginLeft: 10, color: isValid ? 'green' : 'red' }}>
        {isValid ? '✔ Valid DAG' : '⚠ Invalid DAG'}
      </span>
    </div>
  );
}
