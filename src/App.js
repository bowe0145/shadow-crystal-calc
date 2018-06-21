import './App.css'

import { CrystalContainer, MissionContainer, Results } from './components/containers'
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

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
