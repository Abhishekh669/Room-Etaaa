"use client"
import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  Connection,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
import TextUpdaterNode from './text-node';
 
const rfStyle = {
  backgroundColor: '#B8CEFF',
};
 
type CustomNode = Node<{ value: number }>;
type CustomEdge = Edge;

const initialNodes: CustomNode[] = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
    style: { width: 200, height: 100 },
  },
];
const nodeTypes = { textUpdater: TextUpdaterNode };
 
function Flow() {
  const [nodes, setNodes] = useState<CustomNode[]>(initialNodes);
  const [edges, setEdges] = useState<CustomEdge[]>([]);
 
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds) as CustomNode[]);
    },
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );
 
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      draggable={true}
      fitView
      style={rfStyle}
      nodesDraggable={true}
      nodesConnectable={true}
      elementsSelectable={true}
    />
  );
}
 
export default Flow;  