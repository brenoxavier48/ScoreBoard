import { ActionStore } from '../protocols'
import { rootReducer } from '../index'
import { ScoreModel } from '../../domain/models/scoreModel'

export const selectAllScores = (state: any) => state.score

export const selectOneScore = (id: number) => {
  return (state: any) => state.score.filter((score: ScoreModel) => score.id === id)[0]
}
