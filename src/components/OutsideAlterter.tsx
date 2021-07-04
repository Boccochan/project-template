import React, { useRef, useEffect, ReactNode } from 'react'

type Props = {
  children: ReactNode
  clicked: (e?: any) => void
  className?: string
}

const OutsideAlerter = ({ children, clicked, className }: Props) => {
  const divRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {
    if (divRef && !divRef.current.contains(event.target)) {
      clicked(event)
    }
  }

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  )
}

export default OutsideAlerter
