export const Crystals = [
  { id: 0,
    image: 'Shadow_Crystal.png',
    title: 'Regular',
    description: '+80% Mission Reward Bonus',
    multiplier: 1.8
  },
  { id: 1,
    image: 'Fine_Shadow_Crystal.png',
    title: 'Fine',
    description: '+100% Mission Reward Bonus',
    multiplier: 2.0
  },
  { id: 2,
    image: 'Finest_Shadow_Crystal.png',
    title: 'Finest',
    description: '+120% Mission Reward Bonus',
    multiplier: 2.2
  },
  { id: 3,
    image: 'Potent_Shadow_Crystal.png',
    title: 'Potent',
    description: '+240% Mission Reward Bonus',
    multiplier: 3.4
  },
  { id: 4,
    image: 'Potent_Fine_Shadow_Crystal.png',
    title: 'Potent Fine',
    description: '+300% Mission Reward Bonus',
    multiplier: 4.0
  },
  { id: 5,
    image: 'Potent_Finest_Shadow_Crystal.png',
    title: 'Potent Finest',
    description: '+360% Mission Reward Bonus',
    multiplier: 4.6
  },
  { id: 6,
    image: 'Nightmare_Shadow_Crystal.png',
    title: 'Nightmare',
    description: '+400% Mission Reward Bonus',
    multiplier: 5.0
  }
]

export const getCrystal = type => {
  if (typeof type === 'number' && type < Crystals.length && type > -1) {
    return Crystals[type]
  } else {
    throw new Error(`Crystals: Error finding crystal with the ID: ${type}`)
  }
}
