import { createStore } from 'redux'
import rootReducer from './root-reducer'

function configureStore (initialState) {
  // create store
  return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

// pass an optional param to rehydrate state on app start
const store = configureStore()

// export store singleton instance
export default store
