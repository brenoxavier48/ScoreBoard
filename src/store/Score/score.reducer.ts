import { ActionStore } from '../protocols'
import { ScoreModel } from '../../domain/models/scoreModel'

const inicialScoreModel: Array<ScoreModel> = [{
  id: 0,
  tittle: 'teste',
  freePoints: false,
  numberOfTeams: 2,
  teamNames: ['team1']
}, 
{
  id: 1,
  tittle: 'teste',
  freePoints: false,
  numberOfTeams: 2,
  teamNames: ['team1']
},
{
  id: 2,
  tittle: 'teste',
  freePoints: false,
  numberOfTeams: 2,
  teamNames: ['team1']
}] 

export default (state = inicialScoreModel, action: ActionStore): Array<ScoreModel>  => {
  switch (action.type) {
    case 'ADD_SCORE':
      return [...state, action.payload]

    case 'REMOVE_SCORE':
      return state.filter(score => score.id !== action.payload)
      
    default:
      return state
  }
}