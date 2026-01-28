import clsx from './clsx'

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
    <div className={clsx('grid grid-cols-2 gap-3 sm:grid-cols-3', className)}>
      {list.map((item) => (
        <div key={item.alt} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          <img
            src={svgDataUri(item.label)}
            alt={item.alt}
            loading="lazy"
            className="h-40 w-full object-cover sm:h-44"
          />
        </div>
      ))}
    </div>
  )
}

