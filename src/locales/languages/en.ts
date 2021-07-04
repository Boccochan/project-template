import { LanguageFormat } from '@/types'

const options: LanguageFormat = {
  meta: {
    lang: 'English',
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
      currency: 'USD',
      currencyDisplay: 'name',
    },
  },
  translations: {
    hello: 'hello',
    page2: 'page 2',
  },
}

export default options
