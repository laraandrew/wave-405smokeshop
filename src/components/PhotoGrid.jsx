import clsx from './clsx'

// PhotoGrid now prefers images placed in the public/photos/ folder.
// Place files named 1.jpg, 2.jpg, ... up to the desired count in public/photos/
// If those files are not present the component will fall back to the SVG placeholders.
function svgDataUri(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0f172a"/>
          <stop offset="1" stop-color="#064e3b"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <rect x="60" y="60" width="1080" height="680" rx="24" fill="rgba(2,6,23,0.45)" stroke="rgba(148,163,184,0.25)"/>
      <text x="120" y="200" font-family="ui-sans-serif, system-ui" font-size="64" fill="#e2e8f0" font-weight="700">405 Smoke &amp; More</text>
      <text x="120" y="290" font-family="ui-sans-serif, system-ui" font-size="36" fill="#a7f3d0" font-weight="600">${label}</text>
      <text x="120" y="380" font-family="ui-sans-serif, system-ui" font-size="28" fill="#cbd5e1">Photos updated regularly</text>
    </svg>
  `
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const items = [
  { alt: 'Storefront', label: 'Storefront' },
  { alt: 'Glass & accessories', label: 'Glass & Accessories' },
  { alt: 'Vapes', label: 'Vapes' },
  { alt: 'CBD', label: 'CBD' },
  { alt: 'Inside shop', label: 'Inside Shop' },
  { alt: 'Selection', label: 'Selection' },
]

export function PhotoGrid({ className, count = 6 }) {
  const list = items.slice(0, count)
  return (
    <div className={clsx('grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3', className)}>
      {list.map((item, i) => (
        <div key={item.alt} className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 shadow-sm hover:shadow-md hover:border-slate-600 transition-all duration-300">
          <img
            src={`/photos/${i + 1}.webp`}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            // Try numeric, label-normalized (dash/underscore/and/clean) variants and extensions
            onError={(e) => {
              const normalize = (s) => {
                const lower = s.toLowerCase()
                const anded = lower.replace(/&/g, 'and')
                const stripped = anded.replace(/[^a-z0-9\s_-]/g, '')
                const dash = stripped.trim().replace(/\s+/g, '-')
                const underscore = stripped.trim().replace(/\s+/g, '_')
                const joined = stripped.trim().replace(/\s+/g, '')
                return [dash, underscore, joined]
              }

              const bases = [`${i + 1}`, ...normalize(item.label)]
              const exts = ['webp', 'jpg', 'png']
              const candidates = []
              for (const b of bases) for (const x of exts) candidates.push(`/photos/${b}.${x}`)

              const cur = e.currentTarget.getAttribute('data-curr')
              const idx = cur ? Number(cur) : 0
              let next = idx + 1

              while (next < candidates.length && candidates[next] === e.currentTarget.src) next++

              if (next < candidates.length) {
                e.currentTarget.setAttribute('data-curr', String(next))
                e.currentTarget.src = candidates[next]
                return
              }

              // Exhausted candidates → fallback to SVG
              e.currentTarget.src = svgDataUri(item.label)
            }}
            data-curr="0"
            className="h-40 w-full object-cover sm:h-48 transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

