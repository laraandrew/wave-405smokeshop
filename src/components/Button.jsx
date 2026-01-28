import clsx from './clsx'

export function Button({
  as: Comp = 'a',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95'

  const variants = {
    primary:
      'bg-accent-500 text-slate-950 font-semibold hover:bg-accent-400 hover:shadow-lg active:bg-accent-500',
    secondary:
      'bg-slate-800 text-slate-100 hover:bg-slate-700 hover:shadow-md active:bg-slate-800 border border-slate-700',
    ghost:
      'bg-transparent text-slate-100 border border-slate-700 hover:bg-slate-900/50 hover:border-slate-600 active:bg-slate-900',
  }

  return (
    <Comp className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  )
}

