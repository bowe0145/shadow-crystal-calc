import React, { Component } from 'react'

import Mission from './Mission'
import { Missions } from '../../constants'
import PropTypes from 'prop-types'

class MissionList extends Component {
  static propTypes = {
    type: PropTypes.number
  }

  static defaultProps = {
    type: 0
  }

  renderList () {
    if (this.props.type === 0) {
      return Missions.taillteann.map((mission, id) => {
        return (<Mission
          key={'id-' + id}
          mission={mission} />)
      })
    } else {
      return Missions.tara.map((mission, id) => {
        return (<Mission
          key={'id-' + id}
          mission={mission} />)
      })
    }
  }

  render () {
    return (
      <div className='shadow-crystal-list'>
        {this.renderList()}
      </div>
    )
  }
}

export default MissionList
