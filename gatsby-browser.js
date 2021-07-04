import React from 'react'
import i18n from '@/locales'
import { AppContextProvider } from '@/contexts'
import { I18nextProvider } from 'react-i18next'
import Layout from '@/layouts'
import './src/styles/main.css'

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <AppContextProvider value={props}>
      <Layout>{element}</Layout>
    </AppContextProvider>
  )
}
