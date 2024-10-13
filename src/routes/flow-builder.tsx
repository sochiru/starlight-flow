import { useCallback, useRef, useState } from 'react'
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
  ReactFlowProvider,
  type Edge,
  type ReactFlowInstance,
  Node,
} from '@xyflow/react'

import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import { useTheme } from '@/components/theme-provider'

import '@xyflow/react/dist/style.css'
import './styles.css'

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Start' },
    position: { x: 250, y: 5 },
    className: 'rounded-full',
  },
  {
    id: '2',
    data: { label: 'End' },
    position: { x: 250, y: 180 },
    className: 'rounded-full',
  },
]
const initialEdges: Edge[] = []

let id = 0
const getId = () => `dndnode_${id++}`

const FlowBuilder = () => {
  const { theme: colorMode } = useTheme()

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const reactFlowWrapper = useRef(null)
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null)

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
  )

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      console.log(reactFlowInstance)

      event.preventDefault()

      const type = event.dataTransfer.getData('application/reactflow')

      if (typeof type === 'undefined' || !type || !reactFlowInstance) {
        return
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      }

      setNodes(nds => nds.concat(newNode))
    },

    [reactFlowInstance, setNodes],
  )

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="dndflow">
        <ReactFlowProvider>
          <Sidebar />
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onInit={setReactFlowInstance}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onConnect={onConnect}
              colorMode={colorMode}
              fitView
            >
              <Controls />
              <MiniMap />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default FlowBuilder
