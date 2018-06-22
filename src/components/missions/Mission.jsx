import './Mission.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectMission } from './actions'

export class Mission extends Component {
  static propTypes = {
    mission: PropTypes.object,
    onClick: PropTypes.func
  }

  render () {
    return (
      <div className='shadow-mission' onClick={this.props.onClick}>
        <Title {...this.props} />
      </div>
    )
  }
}

const Title = ({mission}) => {
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

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(selectMission(ownProps.location, ownProps.missionID))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mission)
