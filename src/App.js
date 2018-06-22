import './App.css'

import { CrystalContainer, MissionContainer, Results } from './components/containers'
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

// TODO: Add selectors for calculating the gain
// TODO: Add option for inputting price of crystals
// TODO: Add Styling

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Provider store={store}>
          <div>
            <CrystalContainer />
            <MissionContainer />
            <Results />
          </div>
        </Provider>
      </div>
    )
  }
}
export default App
