import { LanguageFormat } from '@/types'

const options: LanguageFormat = {
  meta: {
    lang: '日本語',
  },
  date: {
    ymd: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    ymdhms: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    },
  },
  number: {
    currency: {
      style: 'currency',
      currency: 'JPY',
      currencyDisplay: 'name',
    },
  },
  translations: {
    hello: 'こんにちわ！',
    page2: 'ページ2',
  },
}

export default options
