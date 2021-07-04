import { useCallback } from 'react'
import { usePageContext } from '@/contexts'

export function useLeftNav() {
  const { state, dispatch } = usePageContext()

  const openLeftNav = useCallback(() => dispatch({ type: 'openLeftNav' }), [])
  const closeLeftNav = useCallback(() => dispatch({ type: 'closeLeftNav' }), [])

  if (state == null || state.leftNav == null) {
    return { show: false, openLeftNav, closeLeftNav }
  }

  return {
    show: state.leftNav.openLeftNav,
    openLeftNav,
    closeLeftNav,
  }
}
