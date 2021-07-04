import React from 'react'
import { useLeftNav, useSafeState } from '@/hooks'
import OutsideAlerter from '@/components/OutsideAlterter'
import { bp, bpPx } from '@/styles'
import Modal from '@/components/DropDown/Modal'

type Props = {
  button: () => JSX.Element
  menu: (props: { close: () => void }) => JSX.Element
}

function DropDown(props: Props) {
  const [show, setShow] = useSafeState(false)
  const { closeLeftNav } = useLeftNav()

  const toggle = () => {
    if (window != null && window.innerWidth < bpPx) {
      closeLeftNav()
    }
    setShow(!show)
  }

  const close = () => setShow(false)

  return (
    <OutsideAlerter clicked={() => setShow(false)}>
      <div className="h-full flex items-center ">
        <div className="relative inline-block text-left h-full">
          <div className="h-full cursor-pointer" onClick={toggle}>
            {props.button()}
          </div>
          {show && (
            <div
              className={`hidden ${bp}:block origin-top-right absolute right-0 mt-2 py-2 w-56 rounded-md border border-gray-400 shadow-sm bg-white ring-1 ring-black ring-opacity-5 z-50`}
            >
              <div>{props.menu({ close })}</div>
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className={`block ${bp}:hidden`}>
          <Modal close={() => setShow(false)}>{props.menu({ close })}</Modal>
        </div>
      )}
    </OutsideAlerter>
  )
}

export default DropDown
