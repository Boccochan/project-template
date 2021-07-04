export type State = {
  processing: {
    isProcessing: boolean
  }
}

export type Action = {
  type: 'startProcessing' | 'stopProcessing'
}

export function initialState(): State {
  return { processing: { isProcessing: false } }
}

export function handler(action: Action): State {
  switch (action.type) {
    case 'startProcessing':
      return {
        processing: {
          isProcessing: true,
        },
      }
    case 'stopProcessing':
      return {
        processing: {
          isProcessing: false,
        },
      }
    default:
      break
  }
}
