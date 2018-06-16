import './ShadowCrystal.css' // eslint-disable-line no-unused-vars

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCrystal } from '../../constants'
import { selectCrystal } from './actions'

class ShadowCrystal extends Component {
  static defaultProps = {
    type: 0
  }

  static propTypes = {
    type: PropTypes.number
  }

  state = {
    crystal: getCrystal(this.props.type)
  }

  render () {
    return (
      <div className='shadow-crystal' onClick={() => {
        this.props.onClick()
      }}>
        <Title {...this.state} />
        <Image {...this.state} />
        <Description {...this.state} />
      </div>
    )
  }
}

const Image = ({crystal}) => {
  return (
    <React.Fragment>
      <img
        alt={crystal.description}
        className='shadow-crystal-image'
        src={'./images/' + crystal.image}
        title={crystal.title + ' Shadow Crystal'} />
    </React.Fragment>
  )
}
Image.propTypes = {
  crystal: PropTypes.object
}

const Description = ({crystal}) => {
  return (
    <div className='shadow-crystal-description'>
      {crystal.description}
    </div>
  )
}
Description.propTypes = {
  crystal: PropTypes.object
}

const Title = ({crystal}) => {
  return (
    <div className='shadow-crystal-title'>
      {crystal.title}
    </div>
  )
}
Title.propTypes = {
  crystal: PropTypes.object
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(selectCrystal(ownProps.type))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShadowCrystal)
