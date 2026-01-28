import { NavLink, Link } from 'react-router-dom'
import { Button } from './Button'
import clsx from './clsx'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'rounded-md px-3 py-2 text-sm font-medium',
          isActive ? 'bg-slate-900 text-white' : 'text-slate-200 hover:bg-slate-900 hover:text-white'
        )
      }
      end={to === '/'}
    >
      {children}
    </NavLink>
  )
}

export function Navbar({ displayName, phoneTel }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-semibold tracking-tight text-white">
          {displayName}
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/location">Location</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href={`tel:${phoneTel}`} variant="primary" className="px-3 py-2">
            Call
          </Button>
        </div>
      </div>

      <nav className="border-t border-slate-800 sm:hidden" aria-label="Primary (mobile)">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1 px-2 py-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/location">Location</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </nav>
    </header>
  )
}

