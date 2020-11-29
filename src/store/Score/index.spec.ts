import scoreReducer from './score.reducer'
import { addScore } from './score.actions'
import { ScoreModel } from '../../domain/models/scoreModel'

describe('Score Reducer tests', () => {
  const makeState = (): Array<ScoreModel> => ([{
    id: 0,
    tittle: 'Teste 01',
    freePoints: false,
    numberOfTeams: 2,
    teamNames: ['testTeam01', 'testTeam02']
  },{
    id: 1,
    tittle: 'Teste 02',
    freePoints: false,
    numberOfTeams: 2,
    teamNames: ['testTeam01', 'testTeam02']
  }])

  test('Score Reducer should add a score correctly', () => {
    const additonalScore: ScoreModel = {
      id: 3,
      tittle: 'Teste 01',
      freePoints: false,
      numberOfTeams: 2,
      teamNames: ['testTeam01', 'testTeam02']
    }
    const initialState = makeState()
    const expectedState = [...initialState, additonalScore]
    const returnedSate = scoreReducer(initialState, addScore(additonalScore))

    expect(returnedSate).toEqual(expectedState)
  })
})