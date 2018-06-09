import { Crystals, getCrystal } from '../../constants'
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { ShadowCrystal } from './'

export default class CrystalList extends Component {
  static defaultProps = {
    type: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      crystal: getCrystal(this.props.type)
    }
  }

  renderList () {
    return Crystals.map((crystal, id) => {
      return (<ShadowCrystal
        key={'id-' + id}
        type={id}
      />)
    })
  }

  render () {
    return (
      <div className='shadow-crystal-list'>
        {this.renderList()}
        {() => { 'hi' }}
      </div>
    )
  }
}
