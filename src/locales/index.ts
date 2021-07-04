import { LanguageFormat } from '@/types'
import i18next from 'i18next'
import ja from '@/locales/languages/ja'
import en from '@/locales/languages/en'

export const locales: { [key: string]: LanguageFormat } = {
  ['en']: en,
  ['ja']: ja,
}

const resources = Object.entries(locales)
  .map(([key, value]) => ({
    [key]: { translations: value.translations },
  }))
  .reduce((result, current) => {
    const key = Object.keys(current)[0]
    result[key] = current[key]
    return result
  }, {})

i18next.init({
  fallbackLng: 'en',
  resources,
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

i18next.languages = Object.keys(locales)

export default i18next
