import { business, getGoogleMapsQuery } from '../data/business'
import { Section } from '../components/Section'
import { Button } from '../components/Button'

function HoursBlock() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <p className="font-medium text-white">Hours</p>
      <dl className="mt-3 space-y-2 text-sm text-slate-300">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-400">Mon–Sat</dt>
          <dd className="text-slate-100">{business.hours.mon}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-400">Sun</dt>
          <dd className="text-slate-100">{business.hours.sun}</dd>
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
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Address</p>
            <p className="mt-1 font-medium text-white">{business.address}</p>

            <p className="mt-4 text-sm text-slate-400">Phone</p>
            <a className="mt-1 inline-block font-medium text-accent-200 underline decoration-accent-700 underline-offset-4" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={`tel:${business.phoneTel}`} variant="primary">
                Call
              </Button>
              <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
                Directions
              </Button>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-400">Instagram</p>
              <a className="mt-1 inline-block font-medium text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-white" href={business.instagramUrl} target="_blank" rel="noreferrer">
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

