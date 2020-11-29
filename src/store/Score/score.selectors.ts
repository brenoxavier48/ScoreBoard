import { ActionStore } from '../protocols'
import { CombinedState, PreloadedState } from 'redux'
import state from '../index'

type currentState = typeof state

export const selectAllScores = (state: currentState) => state.score