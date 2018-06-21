import { combineReducers } from 'redux'
import { crystalReducer } from '../components/crystals'
import { missionReducer } from '../components/missions'

const rootReducer = combineReducers({
  crystalReducer,
  missionReducer
})

export default rootReducer
