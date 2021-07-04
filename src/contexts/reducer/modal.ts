export type State = {
  modal: {
    openModal: boolean
    render?: JSX.Element
  }
}

export type Action =
  | {
      type: 'openModal'
      render: JSX.Element
    }
  | {
      type: 'closeModal'
    }

export function initialState(): State {
  return { modal: { openModal: false } }
}

export function handler(action: Action): State {
  switch (action.type) {
    case 'openModal':
      return {
        modal: {
          openModal: true,
          render: action.render,
        },
      }
    case 'closeModal':
      return {
        modal: {
          openModal: false,
        },
      }
    default:
      break
  }
}
