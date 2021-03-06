import { combineReducers, createStore } from 'redux'
import {  } from 'react-redux'
import scoreReducer from './Score/score.reducer'

export const rootReducer = combineReducers({
  score: scoreReducer
})

const store = createStore(rootReducer)

export default store