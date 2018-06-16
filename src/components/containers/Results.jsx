import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCrystal } from '../../constants'

class Results extends Component {
  static propTypes = {
    selectedCrystal: PropTypes.object,
    selectedMission: PropTypes.number
  }

  static defaultProps = {
    selectedCrystal: getCrystal(0)
  }

  render () {
    return (
      <div>
        <div>{this.props.selectedCrystal.description || 'No crystal'}</div>
        {/* <div>{this.props.selectedMission}</div> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    selectedCrystal: state.crystalReducer.selectedCrystal
  }
}

export default connect(
  mapStateToProps
)(Results)
