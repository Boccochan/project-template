import React, { useCallback, useEffect, useRef } from 'react'
import Header from './Header'
import { useSafeState } from '@/hooks'
import LeftNav from './LeftNav'
import Main from './Main'

type Props = {
  children: React.ReactNode
}

function Layout(props: Props) {
  const [headerHeight, setHeaderHeight] = useSafeState(0)
  const [leftNavWidth, setLeftNavWidth] = useSafeState(0)
  const refHeader = useRef(null)

  const reisze = useCallback(() => {
    const rectHeader = refHeader.current.getBoundingClientRect()
    setHeaderHeight(rectHeader.height)
  }, [])

  useEffect(() => {
    reisze()

    window.addEventListener('resize', reisze)

    return () => {
      window.removeEventListener('resize', reisze)
    }
  }, [])

  return (
    <>
      <div>
        <Header title={'This is sample'} ref={refHeader} />
        {headerHeight > 0 && (
          <div className="flex" style={{ paddingTop: `${headerHeight}px` }}>
            <LeftNav setLeftNavWidth={setLeftNavWidth} />
            <Main paddingLeft={leftNavWidth}>{props.children}</Main>
          </div>
        )}
      </div>
    </>
  )
}

export default Layout
