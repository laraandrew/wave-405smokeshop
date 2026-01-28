import clsx from './clsx'

export function Section({ title, subtitle, className, children }) {
  return (
    <section className={clsx('py-8', className)}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title && (
            <h2 className="text-lg font-semibold tracking-tight text-slate-100">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}

