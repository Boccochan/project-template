export type State = {
  leftNav: {
    openLeftNav: boolean
  }
}

export type Action = {
  type: 'openLeftNav' | 'closeLeftNav'
}

export function initialState(): State {
  return { leftNav: { openLeftNav: false } }
}

export function handler(action: Action): State {
  switch (action.type) {
    case 'openLeftNav':
      return {
        leftNav: {
          openLeftNav: true,
        },
      }
    case 'closeLeftNav':
      return {
        leftNav: {
          openLeftNav: false,
        },
      }
    default:
      break
  }
}

// export class Reducer implements Abstract.Reducer {
//   public actionType(type: string) {
//     return type === 'openLeftNav' || type === 'closeLeftNav'
//   }

//   public handler(action: Action): State {
//     switch (action.type) {
//       case 'openLeftNav':
//         return {
//           leftNav: {
//             openLeftNav: true,
//           },
//         }
//       case 'closeLeftNav':
//         return {
//           leftNav: {
//             openLeftNav: false,
//           },
//         }
//     }
//   }
// }
