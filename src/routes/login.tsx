import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ModeToggle from '@/components/my/mode-toggle'

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

const Login = () => {
  const navigate = useNavigate()

  const signIn = () => {
    navigate('/starlight-flow/flow-builder')
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <nav className="fixed inset-x-0 top-0 z-50  h-12 px-4">
        <div className="w-full h-full flex justify-self-start items-center gap-4">
          <div className="flex-1" />
          <ModeToggle />
        </div>
      </nav>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@starlight.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => signIn()}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
