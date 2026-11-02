import factory1 from '../../assets/images/factory1.jpg'
import factory2 from '../../assets/images/factory2.png'
import factory3 from '../../assets/images/factory3.png'
import factory4 from '../../assets/images/factory4.png'
import farmers1 from '../../assets/images/farmers1.png'
import farmers2 from '../../assets/images/farmers2.png'
import farmers3 from '../../assets/images/farmers3.png'

export const aboutImages = {
  introduction: {
    src: farmers1,
    alt: 'Tanzanian farmers working together in a cultivated field',
  },
  problem: {
    src: farmers2,
    alt: 'Farmers harvesting rice in a field',
  },
  valueCreation: {
    src: factory1,
    alt: 'Workers operating machinery in a rice-processing facility',
  },
  impact: {
    farmerPartnerships: {
      src: farmers3,
      alt: 'A grower standing among mature maize crops',
    },
    youthEmployment: {
      src: factory2,
      alt: 'Workers operating food-processing machinery',
    },
    ruralIndustrialization: {
      src: factory3,
      alt: 'A processing facility in a rural agricultural area',
    },
    valueAddition: {
      src: factory4,
      alt: 'Bottled cooking oil moving along a production line',
    },
  },
} as const
