export const SELECT_MISSION = 'SELECT_MISSION'

export function selectMission (type, mission) {
  return {
    type: SELECT_MISSION,
    payload: {type, mission}
  }
}
