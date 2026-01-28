import { business, getGoogleMapsQuery } from '../data/business'
import clsx from './clsx'

export function MapEmbed({ className, height = 360 }) {
  const q = getGoogleMapsQuery(business.address)
  const src = `https://www.google.com/maps?q=${q}&output=embed`

  return (
    <div className={clsx('overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 shadow-sm', className)}>
      <iframe
        title={`${business.displayName} Map`}
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  )
}

