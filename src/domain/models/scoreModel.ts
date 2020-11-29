export interface ScoreModel {
  id: number
  tittle: string
  pointsToWin?: number
  freePoints: boolean
  pointsPerBid?: Array<number>
  numberOfTeams: number
  teamNames: Array<string>
}