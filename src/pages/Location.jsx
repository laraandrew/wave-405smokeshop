import { business, getGoogleMapsQuery } from '../data/business'
import { Section } from '../components/Section'
import { Button } from '../components/Button'
import { MapEmbed } from '../components/MapEmbed'

export function LocationPage() {
  const mapsQ = getGoogleMapsQuery(business.address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`

  return (
    <div>
      <Section title="Location" subtitle={business.address}>
        <MapEmbed height={520} />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
            Get Directions
          </Button>
          <Button as="a" href={`tel:${business.phoneTel}`} variant="primary">
            Call
          </Button>
        </div>
      </Section>
    </div>
  )
}

