import React, { forwardRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { bp } from '@/styles'
import { useLeftNav } from '@/hooks'
import Language from '@/layouts/Header/Language'
import User from '@/layouts/Header/User'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string
}

const Header = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { show: showLeftNav, openLeftNav, closeLeftNav } = useLeftNav()

  const toggleLeftNav = () => {
    if (showLeftNav) {
      closeLeftNav()
    } else {
      openLeftNav()
    }
  }

  return (
    <div className="fixed w-full" ref={ref}>
      <div
        className={`flex items-center bg-white text-gray-900 border-b border-gray-300 shadow-sm w-full px-1 py-2 ${bp}:px-8`}
      >
        <GiHamburgerMenu
          className={`text-2xl cursor-pointer`}
          onClick={toggleLeftNav}
        />
        <h1
          className={`hidden ${bp}:block ml-8 text-gray-700 text-2xl font-medium`}
        >
          {props.title}
        </h1>
        <div className="ml-auto">
          <div className="flex items-center">
            <div className="mr-4">
              <Language />
            </div>
            <User />
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header
