import React, { Component } from 'react'

import { Crystals } from '../../constants'
import { ShadowCrystal } from './'

export default class CrystalList extends Component {
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
      </div>
    )
  }
}
