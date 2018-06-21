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

  state = {
    active: true
  }

  toggleState = () => {
    this.setState((prev) => ({ active: !prev.active }))
  }

  renderList () {
    if (this.props.type === 0) {
      return Missions.taillteann.map((mission, id) => {
        return (<Mission
          key={'id-' + id}
          location={0}
          missionID={id}
          mission={mission} />)
      })
    } else {
      return Missions.tara.map((mission, id) => {
        return (<Mission
          key={'id-' + id}
          location={1}
          missionID={id}
          mission={mission} />)
      })
    }
  }

  render () {
    return (
      <div className='shadow-mission-list'>
        <ToggleHeader onClick={this.toggleState} />
        {this.state.active && this.renderList()}
      </div>
    )
  }
}

class ToggleHeader extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func

  }
  static defaultProps = {
    active: true
  }
  state = {
    active: this.props.active
  }

  toggleState = () => {
    this.setState((prev) => ({ active: !prev.active }), () => {
      this.props.onClick()
    })
  }

  classesName = () => {
    if (this.state.active) {
      return 'toggle-header opened'
    } else {
      return 'toggle-header closed'
    }
  }

  render () {
    return (
      <div className={this.classesName()} onClick={this.toggleState}>
        {this.state.active ? 'opened' : 'closed'}
      </div>
    )
  }
}

export default MissionList
