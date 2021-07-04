import React, { useRef, useCallback, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLeftNav, useTranslation } from '@/hooks'
import { bp, bpPx } from '@/styles'

type Props = {
  setLeftNavWidth: (width: number) => void
}

const LeftNav = ({ setLeftNavWidth }: Props) => {
  const { show } = useLeftNav()
  const { t } = useTranslation()
  const refLeftNav = useRef(null)
  const { show: showLeftNav } = useLeftNav()

  const setOffsetChildren = useCallback(() => {
    if (refLeftNav != null && refLeftNav.current != null) {
      if (window != null && window.innerWidth >= bpPx) {
        const rectLeftNav = refLeftNav.current.getBoundingClientRect()
        setLeftNavWidth(rectLeftNav.width)
      }
    } else {
      setLeftNavWidth(0)
    }
  }, [showLeftNav])

  useEffect(() => {
    window.addEventListener('resize', setOffsetChildren)

    return () => {
      window.removeEventListener('resize', setOffsetChildren)
    }
  }, [])

  useEffect(() => {
    setOffsetChildren()
  }, [setOffsetChildren])

  return (
    <>
      {show && (
        <div
          className={`fixed border-r border-gray-100 shadow-md bg-white h-full px-4 w-full ${bp}:w-44 slidein z-50`}
          ref={refLeftNav}
        >
          <Link to="page-2">{t('page 2')}</Link>
        </div>
      )}
    </>
  )
}

export default LeftNav
