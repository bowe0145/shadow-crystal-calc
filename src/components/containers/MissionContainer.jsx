import React, { Component } from 'react'

import { MissionList } from '../missions'

class MissionContainer extends Component {
  render () {
    return (
      <div>
        <MissionList />
        <MissionList type={1} />
      </div>
    )
  }
}

export default MissionContainer
