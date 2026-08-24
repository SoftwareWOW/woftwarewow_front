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
    addressLines: ['90 Burnhamthorpe Rd W, Suite 1400', 'Mississauga, ON L5B 3C3, Canada'],
    meta: 'Ontario · Eastern Time (ET) · Open 24 Hours',
    phone: '+1 833-763-8969',
    phoneHref: 'tel:+18337638969',
    mapQuery: '90 Burnhamthorpe Rd W, Suite 1400, Mississauga, ON L5B 3C3, Canada',
    ctaLabel: 'VIEW MISSISSAUGA LOCATION',
  },
]
