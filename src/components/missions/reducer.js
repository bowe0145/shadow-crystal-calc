import { SELECT_MISSION } from './actions'
import { getMission } from '../../constants/Missions'

const initialState = {
  selectedMission: getMission({type: 0, id: 0})
}

export default function missionReducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_MISSION:
      return Object.assign({}, state, {
        selectedMission: getMission({type: action.payload.type, id: action.payload.mission})
      })
    default:
      return state
  }
}
