import { useState, useEffect, useRef, useCallback } from 'react'

export function useSafeState<T>(initialState: T): [T, (data: T) => void] {
  const [state, setState] = useState(initialState)

  let mounted = useRef(true)

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  const setSafeState = useCallback((data: T) => {
    mounted.current && setState(data)
  }, [])

  return [state, setSafeState]
}
