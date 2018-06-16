import './Mission.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class Mission extends Component {
  static propTypes = {
    mission: PropTypes.object
  }

  render () {
    return (
      <div className='shadow-mission'>
        <Title {...this.props} />
      </div>
    )
  }
}

const Title = ({mission}) => {
  console.log(mission)
  return (
    <div className='shadow-mission-title'>
      {mission.name}
    </div>
  )
}
Title.propTypes = {
  mission: PropTypes.object
}

const Description = ({mission}) => {
  return (
    <div className='shadow-mission-description'>
      {Mission.Description}
    </div>
  )
}
Description.propTypes = {
  mission: PropTypes.object
}
