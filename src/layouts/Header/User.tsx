import React from 'react'
import DropDown from '@/components/DropDown'
import { FaUserCircle } from 'react-icons/fa'

function User() {
  return (
    <DropDown
      button={() => (
        <div className="text-3xl ">
          <FaUserCircle className="text-blue-600" />
        </div>
      )}
      menu={() => (
        <>
          <p>Hello 0</p>
          <p>Hello 1</p>
        </>
      )}
    />
  )
}

export default User
