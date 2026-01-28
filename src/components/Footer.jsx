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
    <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-3">
          <div>
            <p className="font-bold text-white text-lg">{business.displayName}</p>
            <p className="mt-3 text-sm text-slate-400">{business.address}</p>
            <p className="mt-3 text-sm">
              <a className="text-slate-300 hover:text-white transition-colors underline decoration-slate-600/50 underline-offset-4" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <p className="font-bold text-white text-lg">Hours</p>
            <div className="mt-3">
              <HoursList />
            </div>
          </div>

          <div>
            <p className="font-bold text-white text-lg">Instagram</p>
            <p className="mt-3 text-sm text-slate-400">{business.instagramHandle}</p>
            <a
              className="mt-3 inline-block text-sm text-slate-300 hover:text-white transition-colors underline decoration-slate-600/50 underline-offset-4"
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Instagram
            </a>

            {/* Add review links for Google and Yelp */}
            <div className="mt-4">
              <p className="text-xs text-slate-400">Reviews</p>
              <div className="mt-2 flex gap-3">
                <a
                  className="text-sm text-slate-300 hover:text-white transition-colors underline decoration-slate-600/50 underline-offset-4"
                  href={business.googleUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
                <a
                  className="text-sm text-slate-300 hover:text-white transition-colors underline decoration-slate-600/50 underline-offset-4"
                  href={business.yelpUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Yelp
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-600 font-light">
          © {new Date().getFullYear()} {business.businessName}
        </p>
      </div>
    </footer>
  )
}

