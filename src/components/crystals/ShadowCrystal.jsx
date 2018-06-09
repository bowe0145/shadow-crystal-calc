import * as Style from './ShadowCrystal.css' // eslint-disable-line no-unused-vars

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { getCrystal } from '../../constants'

export default class ShadowCrystal extends Component {
  static defaultProps = {
    type: PropTypes.symbol
  }

  constructor (props) {
    super(props)

    this.state = {
      crystal: getCrystal(this.props.type)
    }
  }

  render () {
    return (
      <div className='shadow-crystal'>
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
Image.defaultProps = {
  crystal: PropTypes.symbol
}

const Description = ({crystal}) => {
  return (
    <div className='shadow-crystal-description'>
      {crystal.description}
    </div>
  )
}
Description.defaultProps = {
  crystal: PropTypes.object
}

const Title = ({crystal}) => {
  return (
    <div className='shadow-crystal-title'>
      {crystal.title}
    </div>
  )
}
