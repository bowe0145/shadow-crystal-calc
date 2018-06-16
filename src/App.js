import './App.css'

import React, { Component } from 'react'

import { CrystalList } from './components/crystals'
import MissionList from './components/missions/MissionList'
import { Provider } from 'react-redux'
import { Results } from './components/containers'
import { store } from './store'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Provider store={store}>
          <div>
            <CrystalList />
            <MissionList />
            <MissionList type={1} />
            <Results />
          </div>
        </Provider>
      </div>
    )
  }
}
export default App
