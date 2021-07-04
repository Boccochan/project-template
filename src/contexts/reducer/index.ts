import * as Processing from './processing'
import * as LeftNav from './leftNav'
import * as Modal from './modal'

export type State = Processing.State & LeftNav.State & Modal.State

export type Action = Processing.Action | LeftNav.Action | Modal.Action

export const initialState = {
  ...Processing.initialState(),
  ...LeftNav.initialState(),
  ...Modal.initialState(),
}

export function handler(state: State, action: Action) {
  switch (action.type) {
    case 'startProcessing':
    case 'stopProcessing': {
      const { processing, ...rest } = state
      return { ...rest, ...Processing.handler(action) }
    }
    case 'openLeftNav':
    case 'closeLeftNav': {
      const { leftNav, ...rest } = state
      return { ...rest, ...LeftNav.handler(action) }
    }
    case 'openModal':
    case 'closeModal':
      const { modal, ...rest } = state
      return { ...rest, ...Modal.handler(action) }
  }
}
