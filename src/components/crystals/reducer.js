import { SELECT_CRYSTAL } from './actions'

const initialState = {
  selectedCrystal: {}
}
/* eslint-disable no-unused-vars */
function crystalReducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_CRYSTAL:
      return Object.assign({}, state, {
        selectedCrystal: action.payload
      })
    default:
      return state
  }
}
/* eslint-enable no-unused-vars */
