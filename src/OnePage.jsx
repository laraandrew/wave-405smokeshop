import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { business, getTodaysHours, getGoogleMapsQuery } from './data/business'
import { Button } from './components/Button'
import { Section } from './components/Section'
import { PhotoGrid } from './components/PhotoGrid'
import { MapEmbed } from './components/MapEmbed'

function HoursRow() {
  const today = getTodaysHours()
  return (
    <p className="mt-3 text-sm sm:text-base text-slate-300">
      <span className="text-slate-400 font-light">Today:</span>{' '}
      <span className="text-slate-100 font-medium">
        {today.label} {today.value}
      </span>
    </p>
  )
}

export default function OnePage() {
  const location = useLocation()

  useEffect(() => {
    // Map pathname to section id
    const map = {
      '/': 'home',
      '': 'home',
      '/location': 'location',
      '/contact': 'contact',
    }

    const id = map[location.pathname] || 'home'
    const el = document.getElementById(id)
    if (!el) return

    const header = document.querySelector('header')
    const headerOffset = header ? header.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 12

    window.scrollTo({ top, behavior: 'smooth' })
  }, [location.pathname])

  const mapsQ = getGoogleMapsQuery(business.address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`

  return (
    <div>
      <section id="home">
        <section className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-950 px-6 py-12 sm:px-10 sm:py-16 shadow-lg">
          <p className="text-xs sm:text-sm font-semibold text-accent-300 uppercase tracking-wide">{business.locationArea}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">
            405 Smoke & More
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">Glass • CBD • Vapes • Accessories</p>

          <div className="mt-8 rounded-lg border border-slate-700/60 bg-slate-900/40 p-5 sm:p-6 backdrop-blur-sm">
            <p className="text-sm sm:text-base text-slate-200 font-medium">{business.address}</p>
            <HoursRow />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row">
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

        <Section title="Photos" subtitle="Photos updated regularly">
          <PhotoGrid count={6} />
        </Section>

        <Section title="Why Choose Us">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 sm:p-7 hover:bg-slate-900/70 transition-colors duration-300">
              <p className="font-semibold text-white text-lg">Friendly staff</p>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Helpful service from people who know the products.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 sm:p-7 hover:bg-slate-900/70 transition-colors duration-300">
              <p className="font-semibold text-white text-lg">Wide selection</p>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Glass, vapes, CBD, and accessories for everyday needs.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 sm:p-7 hover:bg-slate-900/70 transition-colors duration-300">
              <p className="font-semibold text-white text-lg">Convenient National Blvd location</p>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Easy to reach in West LA with quick directions.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <section id="location">
        <Section title="Location" subtitle={business.address}>
          <MapEmbed height={520} />
          <div className="mt-6 flex flex-col gap-3 sm:gap-4 sm:flex-row">
            <Button as="a" href={directionsUrl} target="_blank" rel="noreferrer" variant="secondary">
              Get Directions
            </Button>
            <Button as="a" href={`tel:${business.phoneTel}`} variant="primary">
              Call
            </Button>
          </div>
        </Section>
      </section>

      <section id="contact">
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
          </div>
        </Section>
      </section>
    </div>
  )
}
