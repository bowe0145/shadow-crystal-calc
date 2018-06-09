export const Crystals = [
  { image: 'Shadow_Crystal.png',
    title: 'Regular',
    description: '+80% Mission Reward Bonus',
    multiplier: 1.8
  },
  { image: 'Fine_Shadow_Crystal.png',
    title: 'Fine',
    description: '+100% Mission Reward Bonus',
    multiplier: 2.0
  },
  { image: 'Finest_Shadow_Crystal.png',
    title: 'Finest',
    description: '+120% Mission Reward Bonus',
    multiplier: 2.2
  },
  { image: 'Potent_Shadow_Crystal.png',
    title: 'Potent',
    description: '+240% Mission Reward Bonus',
    multiplier: 3.4
  },
  { image: 'Potent_Fine_Shadow_Crystal.png',
    title: 'Potent Fine',
    description: '+300% Mission Reward Bonus',
    multiplier: 4.0
  },
  { image: 'Potent_Finest_Shadow_Crystal.png',
    title: 'Potent Finest',
    description: '+360% Mission Reward Bonus',
    multiplier: 4.6
  },
  { image: 'Nightmare_Shadow_Crystal.png',
    title: 'Nightmare',
    description: '+400% Mission Reward Bonus',
    multiplier: 5.0
  }
]

export const getCrystal = type => {
  if (typeof type === 'number' && type < Crystals.length && type > -1) {
    return Crystals[type]
  } else {
    return Crystals[0]
  }
}
