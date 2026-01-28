import clsx from './clsx'

export function Container({ className, children }) {
  return <div className={clsx('mx-auto w-full max-w-6xl px-4', className)}>{children}</div>
}

