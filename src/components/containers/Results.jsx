import React, { Component } from 'react'
import { getCrystal, getMission } from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Results extends Component {
  static propTypes = {
    selectedCrystal: PropTypes.object,
    selectedMission: PropTypes.object
  }

  static defaultProps = {
    selectedCrystal: getCrystal(0),
    selectedMission: getMission({type: 0, id: 0})
  }

  render () {
    return (
      <div>
        <div>{this.props.selectedCrystal.description || 'No crystal'}</div>
        <div>{this.props.selectedMission.name}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedCrystal: state.crystalReducer.selectedCrystal,
    selectedMission: state.missionReducer.selectedMission
  }
}

export default connect(
  mapStateToProps
)(Results)
