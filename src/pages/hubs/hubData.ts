import factory3 from '../../assets/images/factory3.png'

export type Hub = {
  slug: string
  name: string
  region: string
  corridor: string
  image: string
  imageAlt: string
  description: string
  rawInputs: string[]
  finishedGoods: string[]
  farmers: string
  youthJobs: string
  capacity: string
  lead: string
}

export const hubs: Hub[] = [
  {
    slug: 'dodoma-central-oilseed-refinery',
    name: 'Dodoma Central Oilseed Refinery',
    region: 'Dodoma Region',
    corridor: 'Central Corridor',
    image: factory3,
    imageAlt: 'Workers operating food processing equipment at a manufacturing hub',
    description:
      'Located in the sunny heart of Tanzania, this hub houses cold hydraulic expelling systems and automated bottling lines, sourcing raw seeds from over 1,200 smallholder growers in Chanwino and Bahi.',
    rawInputs: ['Sunflowers', 'Sesame seeds', 'Groundnuts'],
    finishedGoods: [
      'Cold-pressed sunflower cooking oil',
      'Refined sesame oil',
      'Organic protein seed cakes',
    ],
    farmers: '1,240',
    youthJobs: '145',
    capacity: '25,000 Litres',
    lead: 'Amani Mwakasege (Process Eng.)',
  },
]

export const hubRegions = [
  { name: 'Dodoma Region', jobs: '145 Jobs' },
  { name: 'Mtwara Region', jobs: '180 Jobs' },
  { name: 'Morogoro Region', jobs: '120 Jobs' },
  { name: 'Iringa Region', jobs: '95 Jobs' },
  { name: 'Zanzibar & Tanga', jobs: '65 Jobs' },
] as const
