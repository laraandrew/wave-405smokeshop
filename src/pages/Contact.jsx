import { business, getGoogleMapsQuery } from '../data/business'
import { Section } from '../components/Section'
import { Button } from '../components/Button'

function HoursBlock() {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 sm:p-7">
      <p className="font-semibold text-white text-lg">Hours</p>
      <dl className="mt-4 space-y-3 text-sm sm:text-base text-slate-300">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-400 font-light">Mon–Sat</dt>
          <dd className="text-slate-100 font-medium">{business.hours.mon}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-400 font-light">Sun</dt>
          <dd className="text-slate-100 font-medium">{business.hours.sun}</dd>
        </div>
      </dl>
    </div>
  )
}

export function ContactPage() {
  const mapsQ = getGoogleMapsQuery(business.address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`

  return (
    <div>
      <Section title="Contact" subtitle="Simple ways to reach us">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 sm:p-7">
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide font-semibold">Address</p>
            <p className="mt-2 font-semibold text-white text-base sm:text-lg">{business.address}</p>

            <p className="mt-6 text-xs sm:text-sm text-slate-400 uppercase tracking-wide font-semibold">Phone</p>
            <a className="mt-2 inline-block font-semibold text-accent-300 hover:text-accent-200 transition-colors underline decoration-accent-700/50 underline-offset-4" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>

            <div className="mt-8 flex flex-col gap-3">
              <Button as="a" href={`tel:${business.phoneTel}`} variant="primary">
                Call
              </Button>
              <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
                Directions
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide font-semibold">Instagram</p>
              <a className="mt-2 inline-block font-medium text-slate-200 hover:text-white transition-colors underline decoration-slate-600/50 underline-offset-4" href={business.instagramUrl} target="_blank" rel="noreferrer">
                {business.instagramHandle}
              </a>
            </div>
          </div>

          <HoursBlock />
        </div>
      </Section>
    </div>
  )
}

