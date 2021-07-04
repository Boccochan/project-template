import { bp } from '@/styles'
import React, { ReactNode, useRef } from 'react'
import Overlay from '../Overlay'

type Props = {
  children: ReactNode
  close: () => void
}

function Modal(props: Props) {
  const divRef = useRef(null)

  const click = (event: any) => {
    if (divRef && !divRef.current.contains(event.target)) {
      props.close()
    }
  }

  return (
    <Overlay onClick={click}>
      <div
        ref={divRef}
        className={`h-auto w-11/12 py-4 text-center ${bp}:text-left bg-white rounded shadow-xl`}
        style={{ zIndex: 9999 }}
      >
        {props.children}
      </div>
    </Overlay>
  )
}

export default Modal
