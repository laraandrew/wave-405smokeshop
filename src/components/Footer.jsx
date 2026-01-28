import { business } from '../data/business'

function HoursList() {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-300 sm:grid-cols-4">
      <div className="flex items-center justify-between gap-2">
        <dt className="text-slate-400">Mon–Sat</dt>
        <dd className="text-slate-200">{business.hours.mon}</dd>
      </div>
      <div className="flex items-center justify-between gap-2">
        <dt className="text-slate-400">Sun</dt>
        <dd className="text-slate-200">{business.hours.sun}</dd>
      </div>
    </dl>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-white">{business.displayName}</p>
            <p className="mt-2 text-sm text-slate-300">{business.address}</p>
            <p className="mt-2 text-sm">
              <a className="text-slate-200 underline decoration-slate-600 underline-offset-4 hover:text-white" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Hours</p>
            <div className="mt-2">
              <HoursList />
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Instagram</p>
            <p className="mt-2 text-sm text-slate-300">{business.instagramHandle}</p>
            <a
              className="mt-2 inline-block text-sm text-slate-200 underline decoration-slate-600 underline-offset-4 hover:text-white"
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Instagram
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {business.businessName}
        </p>
      </div>
    </footer>
  )
}

