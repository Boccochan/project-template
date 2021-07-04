import { useCallback } from 'react'
import { usePageContext } from '@/contexts'

export function useProcessing() {
  const { state, dispatch } = usePageContext()

  const start = useCallback(() => dispatch({ type: 'startProcessing' }), [])
  const stop = useCallback(() => dispatch({ type: 'stopProcessing' }), [])

  if (state == null || state.processing == null) {
    return { isProcessing: false, start, stop }
  }

  return {
    isProcessing: state.processing.isProcessing,
    start,
    stop,
  }
}
