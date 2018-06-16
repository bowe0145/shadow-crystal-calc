export const SELECT_CRYSTAL = 'SELECT_CRYSTAL'

export function selectCrystal (crystal) {
  return {
    type: SELECT_CRYSTAL,
    payload: crystal
  }
}
