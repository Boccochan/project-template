import React, { ReactNode, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

function Overlay(props: Props) {
  const { className, style, children, ...rest } = props

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full"
      style={{ backgroundColor: 'rgba(0,0,0,.5)' }}
      x-show="open"
      {...rest}
    >
      {children}
    </div>
  )
}

export default Overlay
