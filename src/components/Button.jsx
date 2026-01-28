import clsx from './clsx'

export function Button({
  as: Comp = 'a',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

  const variants = {
    primary:
      'bg-accent-500 text-slate-950 hover:bg-accent-400 active:bg-accent-500',
    secondary:
      'bg-slate-800 text-slate-100 hover:bg-slate-700 active:bg-slate-800',
    ghost:
      'bg-transparent text-slate-100 hover:bg-slate-900 active:bg-slate-900 ring-1 ring-inset ring-slate-800',
  }

  return (
    <Comp className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  )
}

