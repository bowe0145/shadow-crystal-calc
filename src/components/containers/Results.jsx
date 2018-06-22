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
        <div>
          <p>{this.props.selectedMission.name}</p>
          <p>{this.props.selectedMission.gold[4]}</p>
        </div>
        <div>
          Total Gold from Elite: {this.props.selectedCrystal.multiplier * this.props.selectedMission.gold[4]}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedCrystal: state.crystals.selectedCrystal,
    selectedMission: state.missions.selectedMission
  }
}

export default connect(
  mapStateToProps
)(Results)
