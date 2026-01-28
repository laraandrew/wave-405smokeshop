import { NavLink, Link } from 'react-router-dom'
import { Button } from './Button'
import clsx from './clsx'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive ? 'bg-accent-500/15 text-accent-300' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
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
    <header className="sticky top-0 z-40 border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="font-semibold tracking-tight text-white text-base sm:text-lg">
          {displayName}
        </Link>

        <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/location">Location</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href={`tel:${phoneTel}`} variant="primary" className="text-xs sm:text-sm px-3 py-2">
            Call
          </Button>
        </div>
      </div>

      <nav className="border-t border-slate-800/50 sm:hidden" aria-label="Primary (mobile)">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1 px-2 py-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/location">Location</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </nav>
    </header>
  )
}

