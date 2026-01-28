import { business, getTodaysHours, getGoogleMapsQuery } from '../data/business'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { PhotoGrid } from '../components/PhotoGrid'
import { MapEmbed } from '../components/MapEmbed'

function HoursRow() {
  const today = getTodaysHours()
  return (
    <p className="mt-2 text-sm text-slate-300">
      <span className="text-slate-400">Today:</span>{' '}
      <span className="text-slate-100">
        {today.label} {today.value}
      </span>
    </p>
  )
}

export function HomePage() {
  const mapsQ = getGoogleMapsQuery(business.address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`

  return (
    <div>
      {/* Hero */}
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-10 sm:px-10">
        <p className="text-sm font-medium text-accent-200">{business.locationArea}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          West LA Smoke Shop
        </h1>
        <p className="mt-3 text-base text-slate-200">Glass • CBD • Vapes • Accessories</p>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
          <p className="text-sm text-slate-200">{business.address}</p>
          <HoursRow />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href={`tel:${business.phoneTel}`} variant="primary">
            Call Now
          </Button>
          <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
            Get Directions
          </Button>
          <Button as="a" href={business.instagramUrl} target="_blank" rel="noreferrer" variant="ghost">
            Instagram
          </Button>
        </div>
      </section>

      {/* Photos */}
      <Section title="Photos" subtitle="Photos updated regularly">
        <PhotoGrid count={6} />
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-medium text-white">Friendly staff</p>
            <p className="mt-2 text-sm text-slate-300">
              Helpful service from people who know the products.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-medium text-white">Wide selection</p>
            <p className="mt-2 text-sm text-slate-300">
              Glass, vapes, CBD, and accessories for everyday needs.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-medium text-white">Convenient National Blvd location</p>
            <p className="mt-2 text-sm text-slate-300">
              Easy to reach in West LA with quick directions.
            </p>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section title="Find Us" subtitle={business.address}>
        <MapEmbed />
        <div className="mt-4">
          <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
            Directions
          </Button>
        </div>
      </Section>
    </div>
  )
}

