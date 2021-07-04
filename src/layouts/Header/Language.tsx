import React, { useEffect, useState } from 'react'
import DropDown from '@/components/DropDown'
import { IoLanguage } from 'react-icons/io5'
import { locales } from '@/locales'
import { navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

function Language() {
  const { i18n } = useTranslation()

  const selected = (lang: string) => i18n.language === lang

  const select = (lang: string) => {
    const pathname = `/${[
      lang,
      ...window.location.pathname
        .split('/')
        .filter((label) => label != '')
        .slice(1),
    ].join('/')}`

    navigate(pathname)
  }

  return (
    <DropDown
      button={() => (
        <div>
          <IoLanguage className="text-xl" />
        </div>
      )}
      menu={({ close }) => (
        <>
          {Object.entries(locales).map(([key, language], index) => (
            <p
              className={`${
                selected(key) ? 'bg-blue-100' : ''
              } px-4 py-2 cursor-pointer hover:bg-blue-100`}
              key={index}
              onClick={() => {
                select(key)
                close()
              }}
            >
              {language.meta.lang}
            </p>
          ))}
        </>
      )}
    />
  )
}

export default Language
