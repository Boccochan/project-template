import React, { ReactNode, useCallback, useEffect } from 'react'
import { bpPx } from '@/styles'
import { useLeftNav } from '@/hooks'

type Props = {
  paddingLeft: number
  children: ReactNode
}

function Main(props: Props) {
  const { show: showLeftNav } = useLeftNav()

  const stopScroll = useCallback(
    (e: any) => {
      if (window != null && window.innerWidth < bpPx) {
        if (showLeftNav) {
          e.preventDefault()
        }
      }
    },
    [showLeftNav]
  )

  useEffect(() => {
    window.addEventListener('mousewheel', stopScroll, { passive: false })

    return () => {
      window.removeEventListener('mousewheel', stopScroll)
    }
  }, [stopScroll])

  return (
    <main style={{ paddingLeft: `${props.paddingLeft}px` }}>
      {props.children}
    </main>
  )
}

export default Main
