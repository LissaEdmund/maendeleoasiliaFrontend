import pdt002 from '../../../assets/images/pdt-002.webp'
import pdt003 from '../../../assets/images/pdt-003.webp'
import pdt004 from '../../../assets/images/pdt-004.jpg'
import type { Product } from '../types/product'

export const products: Product[] = [
  {
    slug: 'dodoma-pure-virgin-sunflower-oil',
    name: 'Dodoma Pure Virgin Sunflower Oil (5L)',
    category: 'Oils',
    badge: '100% Cold-Pressed',
    hub: 'Dodoma Central Oilseed Refinery',
    origin: 'Dodoma, Tanzania',
    description:
      '100% single-origin cold-pressed sunflower cooking oil. Free from chemical hexane and excessive bleaching. Retains its natural golden hue, Vitamin E, and light nutty aroma.',
    pack: '5 Litre Jerrycan',
    stock: 240,
    price: 32000,
    previousPrice: 36000,
    rating: 4.9,
    reviewCount: 118,
    image: pdt003,
    imageAlt: 'Packaged sunflower oil',
    partnerGroup: 'Chanwino Sunflower Growers Cooperative (840 Farmers)',
    processingMethod: 'Mechanical Single-Press Hydraulic Expeller (No Chemical Solvents)',
    highlights: [
      'Rich in Natural Vitamin E',
      'Zero Trans Fats',
      'High Smoke Point (232°C)',
      'Heart-Friendly Omega 6 & 9',
    ],
  },
  {
    slug: 'morogoro-super-sembe-fortified-maize-flour',
    name: 'Morogoro Super Sembe Fortified Maize Flour (5kg)',
    category: 'Flours',
    badge: 'Vitamin Fortified',
    hub: 'Morogoro Cereal & Grain Milling Complex',
    origin: 'Kilosa, Tanzania',
    description:
      'Silky smooth, ultra-white Super Sembe milled from Kilosa select white corn. Triple destoned for a clean, consistent finish.',
    pack: '5 Kg Hermetic Pack',
    stock: 350,
    price: 12500,
    previousPrice: 14000,
    rating: 4.9,
    reviewCount: 84,
    image: pdt004,
    imageAlt: 'Whole grains used in the featured maize flour product',
    partnerGroup: 'Kilosa local maize growers',
    processingMethod: 'Milled and fortified at the Morogoro Cereal & Grain Milling Complex',
    highlights: ['Vitamin Fortified', 'Triple Destoned', 'Fine, Smooth Texture', 'Locally Milled'],
  },
  {
    slug: 'kyela-aromatic-grade-1-super-rice',
    name: 'Kyela Aromatic Grade-1 Super Rice (5kg)',
    category: 'Rice & Grains',
    badge: '100% Kyela Origin',
    hub: 'Morogoro Cereal & Grain Milling Complex',
    origin: 'Kyela, Tanzania',
    description:
      'Renowned fragrant long-grain rice cultivated in the volcanic silt of Kyela. Carefully aged for an aromatic, fluffy finish.',
    pack: '5 Kg Premium Cloth Bag',
    stock: 175,
    price: 24000,
    previousPrice: 28000,
    rating: 5,
    reviewCount: 52,
    image: pdt002,
    imageAlt: 'Long-grain rice in a woven sack',
    partnerGroup: 'Kyela rice-growing communities',
    processingMethod: 'Sorted and packed for consistent long-grain quality',
    highlights: ['100% Kyela Origin', 'Naturally Fragrant', 'Long-Grain Rice', 'Carefully Aged'],
  },
]

export const productCategories = [...new Set(products.map((product) => product.category))]
export const productHubs = [...new Set(products.map((product) => product.hub))]
