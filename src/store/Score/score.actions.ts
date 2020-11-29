import { ScoreModel } from '../../domain/models/scoreModel'
import { ActionStore } from '../protocols'

export const addScore = (score: ScoreModel): ActionStore => ({
  type: 'ADD_SCORE',
  payload: score
})