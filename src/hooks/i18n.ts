import { useCallback } from 'react'
import { useTranslation as translation } from 'react-i18next'
import i18n, { locales } from '@/locales'

type DateType = {
  [key: string]: (date: Date) => string
}

type NumberType = {
  [key: string]: (value: number) => string
}

let _dateformatter: DateType = {}
let _numberformatter: NumberType = {}

const getOptions = (formatType: string, locale: string, key: string) => {
  try {
    return locales[locale][formatType][key]
  } catch (error) {
    return null
  }
}

const useDateFormatter = (locale: string) => {
  const d = (key: string, date: Date) => {
    const _locale_key = `_${locale}_${key}`
    if (_dateformatter[_locale_key] == null) {
      _dateformatter[_locale_key] = new Intl.DateTimeFormat(
        locale,
        getOptions('date', locale, key) as Intl.DateTimeFormatOptions
      ).format
    }

    return _dateformatter[_locale_key](date)
  }

  return d
}

const useNumberFormatter = (locale: string) => {
  const n = (key: string, value: number) => {
    const _locale_key = `_${locale}_${key}`
    if (_numberformatter[_locale_key] == null) {
      _numberformatter[_locale_key] = new Intl.NumberFormat(
        locale,
        getOptions('number', locale, key) as Intl.NumberFormatOptions
      ).format
    }

    return _numberformatter[_locale_key](value)
  }

  return n
}

function useTranslation() {
  const { t } = translation()

  const d = useCallback(useDateFormatter(i18n.language), [])
  const n = useCallback(useNumberFormatter(i18n.language), [])

  return { t, d, n, i18n }
}

export { useTranslation }
