import { SELECT_CRYSTAL } from './actions'
import {getCrystal} from '../../constants/Crystals'

const initialState = {
  selectedCrystal: getCrystal(0)
}

export default function crystalReducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_CRYSTAL:
      return Object.assign({}, state, {
        selectedCrystal: getCrystal(action.payload)
      })
    default:
      return state
  }
}
