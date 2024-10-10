import { createBrowserRouter } from 'react-router-dom'
import Root from '@/routes/root'
import SignIn from '@/routes/signin'
import FlowBuilder from '@/routes/flow-builder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/flow-builder',
    element: <FlowBuilder />,
  },
])

export default router
