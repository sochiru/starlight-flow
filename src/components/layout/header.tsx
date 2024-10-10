import { Button } from '@/components/ui/button'

import { Link, useLocation } from 'react-router-dom'
import ModeToggle from '../my/mode-toggle'

const links = [
  {
    href: '/starlight-flow/login',
    name: 'Login',
  },
  {
    href: '/starlight-flow/flow-builder',
    name: 'Flow Builder',
  },
]

const Header = () => {
  const { pathname } = useLocation()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950 h-12 px-4">
      <div className="w-full h-full flex justify-self-start items-center gap-4">
        {links!.map(link => (
          <Link key={link.href} to={link.href}>
            <Button variant={link.href === pathname ? 'secondary' : 'ghost'}>
              {link.name}
            </Button>
          </Link>
        ))}
        <div className="flex-1" />
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Header
