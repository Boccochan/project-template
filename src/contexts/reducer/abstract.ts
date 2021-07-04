export type State = {
  [key: string]: any
}

export type Action = {
  type: string
  [key: string]: any
}

export abstract class Reducer {
  abstract actionType(_: string): boolean

  // abstract initialState(): State

  abstract handler(action: any, state?: State): State
}
