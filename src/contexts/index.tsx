import React, { useEffect, useReducer } from 'react'
import { useTranslation } from '@/hooks'
import { handler, initialState, State, Action } from './reducer'

const AppContext = React.createContext(
  {} as { state: State; dispatch: React.Dispatch<Action> }
)

const usePageContext = () => React.useContext(AppContext)

type Props = {
  value: any
  children: React.ReactNode
}

const AppContextProvider = ({ value, children }: Props) => {
  const [state, dispatch] = useReducer(handler, initialState)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== value.pageContext.lang) {
      i18n.changeLanguage(value.pageContext.lang)
    }
  }, [value.pageContext.lang])

  return (
    <AppContext.Provider value={{ ...value, state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, usePageContext }
