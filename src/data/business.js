export const business = {
  businessName: '405 Smoke N More plus',
  displayName: '405 Smoke & More',
  category: 'Smoke Shop / Vape Shop',
  locationArea: 'West Los Angeles',
  address: '11221 National Blvd, Los Angeles, CA 90064',
  phoneDisplay: '(424) 535-3043',
  phoneTel: '+14245353043',
  instagramHandle: '@georgegirges420',
  instagramUrl: 'https://www.instagram.com/georgegirges420/',
  description:
    'Local West LA smoke shop offering glass, vapes, CBD, and accessories with friendly service.',
  hours: {
    mon: '9:00 AM – 10:00 PM',
    tue: '9:00 AM – 10:00 PM',
    wed: '9:00 AM – 10:00 PM',
    thu: '9:00 AM – 10:00 PM',
    fri: '9:00 AM – 10:00 PM',
    sat: '9:00 AM – 10:00 PM',
    sun: '10:00 AM – 8:00 PM',
  },
}

export function getTodaysHours(date = new Date()) {
  const day = date.getDay()
  // 0 Sun ... 6 Sat
  const key =
    day === 0 ? 'sun' : day === 1 ? 'mon' : day === 2 ? 'tue' : day === 3 ? 'wed' : day === 4 ? 'thu' : day === 5 ? 'fri' : 'sat'
  return {
    key,
    label:
      key === 'sun'
        ? 'Sun'
        : key === 'mon'
          ? 'Mon'
          : key === 'tue'
            ? 'Tue'
            : key === 'wed'
              ? 'Wed'
              : key === 'thu'
                ? 'Thu'
                : key === 'fri'
                  ? 'Fri'
                  : 'Sat',
    value: business.hours[key],
  }
}

export function getGoogleMapsQuery(address = business.address) {
  return encodeURIComponent(address)
}

