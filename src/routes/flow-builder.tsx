import { useCallback } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  OnConnect,
} from '@xyflow/react'

import Header from '@/components/layout/header'
import { useTheme } from '@/components/theme-provider'

import '@xyflow/react/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 80, y: 100 }, data: { label: '1' } },
  { id: '2', position: { x: 80, y: 200 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
const FlowBuilder = () => {
  const { theme: colorMode } = useTheme()

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
  )

  return (
    <div className="h-screen w-screen">
      <Header />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode={colorMode}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default FlowBuilder
