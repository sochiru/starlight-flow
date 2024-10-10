import { createBrowserRouter } from 'react-router-dom'
import Root from '@/routes/root'
import Login from '@/routes/login'
import FlowBuilder from '@/routes/flow-builder'

const router = createBrowserRouter([
  {
    path: '/starlight-flow/',
    element: <Root />,
  },
  {
    path: '/starlight-flow/login',
    element: <Login />,
  },
  {
    path: '/starlight-flow/flow-builder',
    element: <FlowBuilder />,
  },
])

export default router
