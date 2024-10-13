const Sidebar = () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside
      className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t
     border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg 
     dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-1/3 
     -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] 
     flex-col rounded-lg border"
    >
      <div className="description">WorkFlow Node</div>
      <div
        className="dndnode"
        onDragStart={event => onDragStart(event, 'Filter Data')}
        draggable
      >
        Filter Data
      </div>

      <div
        className="dndnode output"
        onDragStart={event => onDragStart(event, 'Wait')}
        draggable
      >
        Wait
      </div>

      <div
        className="dndnode output"
        onDragStart={event => onDragStart(event, 'Convert Formate')}
        draggable
      >
        Format
      </div>

      <div
        className="dndnode output"
        onDragStart={event => onDragStart(event, 'Send Post Request')}
        draggable
      >
        Send Post Request
      </div>
    </aside>
  )
}

export default Sidebar
