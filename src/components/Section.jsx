import clsx from './clsx'

export function Section({ title, subtitle, className, children }) {
  return (
    <section className={clsx('py-12 sm:py-16', className)}>
      {(title || subtitle) && (
        <header className="mb-6 sm:mb-8">
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-400 font-light">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}

