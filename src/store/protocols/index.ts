import { Action } from 'redux'

export interface ActionStore extends Action {
  payload?: any
}