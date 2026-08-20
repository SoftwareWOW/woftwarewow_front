export type OfficeLocation = {
  id: string
  city: string
  region: string
  description: string
  addressLines: string[]
  meta: string
  phone: string
  phoneHref: string
  mapQuery: string
  ctaLabel: string
}

export const officeLocations: OfficeLocation[] = [
{
  id: 'mississauga',
  city: 'Mississauga',
  region: 'Canada',
  description:
    'Our Canadian location serving businesses with website, branding, digital marketing and software solutions.',
  addressLines: [
    '90 Burnhamthorpe Rd W, Suite 1400',
    'Mississauga, ON L5B 3C3, Canada',
  ],
  meta: 'Ontario · Eastern Time (ET) · Open 24 Hours',
  phone: '+1 833-763-8969',
  phoneHref: 'tel:+18337638969',
  mapQuery:
    '90 Burnhamthorpe Rd W, Suite 1400, Mississauga, ON L5B 3C3, Canada',
  ctaLabel: 'VIEW MISSISSAUGA LOCATION',
},
  {
    id: 'new-york',
    city: 'New York',
    region: 'USA',
    description:
      'Our US East Coast hub supporting brand, product, and growth engagements across North American markets.',
    addressLines: ['One World Trade Center', 'New York, NY 10007, USA'],
    meta: 'New York · Eastern Time (ET) · Open 24 Hours',
    phone: '+1 833-763-8969',
    phoneHref: 'tel:+18337638969',
    mapQuery: 'One World Trade Center, New York, NY 10007, USA',
    ctaLabel: 'VIEW NEW YORK LOCATION',
  },
  {
    id: 'london',
    city: 'London',
    region: 'UK',
    description:
      'Our European presence connecting strategy, design, and technology for clients across the UK and EU.',
    addressLines: ['1 Canada Square', 'Canary Wharf, London E14 5AB, United Kingdom'],
    meta: 'England · Greenwich Mean Time (GMT) · Open 24 Hours',
    phone: '+1 833-763-8969',
    phoneHref: 'tel:+18337638969',
    mapQuery: '1 Canada Square, Canary Wharf, London E14 5AB, United Kingdom',
    ctaLabel: 'VIEW LONDON LOCATION',
  },
  {
  id: 'kabul',
  city: 'Kabul',
  region: 'Afghanistan',
  description:
    'Our Afghanistan location supporting clients with website, branding, digital marketing and software solutions.',
  addressLines: [
    'SHAHRAM CENTER (شهرام سنتر)',
    'G46V+878, Opposite Ghazi High School',
    'Karti-Char, Kabul 1001, Afghanistan',
  ],
  meta: 'Kabul · Afghanistan Time (AFT) · Open 24 Hours',
  phone: '+93 777777777',
  phoneHref: 'tel:+93777777777',
  mapQuery: 'G46V+878, Kabul, Afghanistan',
  ctaLabel: 'VIEW KABUL LOCATION',
},
]
