export const Missions = {
  taillteann: [
    {
      name: 'Defeat Crag Cow',
      gold: [
        2400,
        3360,
        4800,
        7200,
        9600
      ]
    },
    {
      name: 'The Stones of Sliab Cuilin',
      gold: [
        2900,
        4060,
        5800,
        8700,
        11600
      ]
    },
    {
      name: 'Conflict! An Unexpected Battle',
      gold: [
        1200,
        1680,
        2400,
        3600,
        4800
      ]
    },
    {
      name: 'Defeat the Shadow Warrior',
      gold: [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      name: 'Battle for Taillteann II',
      gold: [
        5700,
        7980,
        11400,
        17100,
        22800
      ]
    },
    {
      name: 'Rescue the Scout',
      gold: [
        3200,
        4480,
        6400,
        9600,
        12800
      ]
    },
    {
      name: 'Battle for Taillteann I',
      gold: [
        6500,
        9100,
        13000,
        19500,
        26000
      ]
    },
    {
      name: 'Defeat Fomor Commander I',
      gold: [
        3500,
        4900,
        7000,
        10500,
        14000
      ]
    },
    {
      name: 'Offering',
      gold: [
        1000,
        1400,
        2000,
        3000,
        4000
      ]
    },
    {
      name: 'Provocation',
      gold: [
        800,
        1120,
        1600,
        2400,
        3200
      ]
    },
    {
      name: 'Defeat Fomor Commander II',
      gold: [
        8600,
        12040,
        17200,
        25800,
        34400
      ]
    },
    {
      name: 'Taillteann Defensive Battle',
      gold: [
        10500,
        14700,
        21000,
        31500,
        42000
      ]
    },
    {
      name: 'Defeat the Shadow Wizard',
      gold: [
        8800,
        12320,
        17600,
        26400,
        35200
      ]
    },
    {
      name: 'Dorrens Request',
      gold: [
        3100,
        4340,
        6200,
        9300,
        12400
      ]
    }
  ],
  tara: [
    {
      name: 'Shadow Cast City',
      gold: [
        1000,
        1400,
        2000,
        3000,
        4000
      ]
    },
    {
      name: 'Enemy Behind',
      gold: [
        2300,
        3220,
        4600,
        6900,
        9200
      ]
    },
    {
      name: 'Their Method',
      gold: [
        1500,
        2100,
        3000,
        4500,
        6000
      ]
    },
    {
      name: 'Lingering Darkness',
      gold: [
        3500,
        4900,
        7000,
        10500,
        14000
      ]
    },
    {
      name: 'Mobilizing the Expeditionary Force',
      gold: [
        800,
        1120,
        1600,
        2400,
        3200
      ]
    },
    {
      name: 'The Other Alchemists',
      gold: [
        5500,
        7700,
        11000,
        16500,
        22000
      ]
    },
    {
      name: 'Fomor Attack',
      gold: [
        4000,
        5600,
        8000,
        12000,
        16000
      ]
    },
    {
      name: 'Ghost of Patholon',
      gold: [
        5000,
        7000,
        10000,
        15000,
        20000
      ]
    },
    {
      name: 'The Sulfur Spider inside Shadow Realm',
      gold: [
        8500,
        11900,
        17000,
        25500,
        34000
      ]
    }
  ]
}

const getTaraMissions = id => {
  if (typeof id === 'number' && id < Missions.tara.length && id > -1) {
    return Missions.tara[id]
  } else {
    return Missions.tara[0]
  }
}

const getTaillteannMissions = id => {
  if (typeof id === 'number' && id < Missions.taillteann.length && id > -1) {
    return Missions.taillteann[id]
  } else {
    return Missions.taillteann[0]
  }
}

export const getMission = ({type, id}) => {
  if (typeof type === 'string') {
    if (type === 'taillteann') {
      return getTaillteannMissions(id)
    } else if (type === 'tara') {
      return getTaraMissions(id)
    } else {
      throw new Error(`Missions/getMission: Error finding the mission with {type: ${type}, id: ${id}}`)
    }
  } else if (typeof type === 'number') {
    if (type === 0) {
      return getTaillteannMissions(id)
    } else if (type === 1) {
      return getTaraMissions(id)
    } else {
      throw new Error(`Missions/getMission: Error finding the mission with {type: ${type}, id: ${id}}`)
    }
  } else {
    throw new Error(`Missions/getMission: Error finding the mission with {type: ${type}, id: ${id}}`)
  }
}
