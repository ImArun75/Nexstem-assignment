import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './components/CustomNode';
import ControlsPanel from './components/ControlsPanel';
import JSONPreview from './components/JSONPreview';
import { validateDAG } from './utils/validation';
import { layoutNodes } from './utils/layout';

const nodeTypes = { custom: CustomNode }; 

let id = 0;
const getId = () => `node_${id++}`;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isValidDag, setIsValidDag] = useState(true);

  const onConnect = useCallback((params) => {
    if (params.source === params.target) return;
    setEdges((eds) =>
      addEdge({
        ...params,
        markerEnd: { type: MarkerType.ArrowClosed },
      }, eds)
    );
  }, [setEdges]);

  const addNode = () => {
    const label = prompt('Enter node label');
    if (!label) return;
    const newNode = {
      id: getId(),
      type: 'custom',
      data: { label },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelected = () => {
    setNodes((nds) => nds.filter((n) => !n.selected));
    setEdges((eds) => eds.filter((e) => !e.selected));
  };

  useEffect(() => {
    const handleKey = (e) => e.key === 'Delete' && deleteSelected();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nodes, edges]);

  useEffect(() => {
    const { valid } = validateDAG(nodes, edges);
    setIsValidDag(valid);
  }, [nodes, edges]);

  const autoLayout = () => {
    const laidOut = layoutNodes(nodes, edges);
    setNodes(laidOut);
  };

  return (
  <ReactFlowProvider>
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <ControlsPanel
        onAddNode={addNode}
        onAutoLayout={autoLayout}
        isValid={isValidDag}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <JSONPreview nodes={nodes} edges={edges} />
    </div>
  </ReactFlowProvider>
  );

}

export default App;