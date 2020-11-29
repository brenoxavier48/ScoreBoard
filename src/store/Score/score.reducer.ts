import { Action } from 'redux'
import { ScoreModel } from '../../domain/models/scoreModel'

export default (state: ScoreModel, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}