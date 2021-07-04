import { ResourceLanguage } from 'i18next'

export type LanguageFormat = {
  [key: string]:
    | {
        [key: string]: {
          [key: string]: string | number | boolean | object
        }
      }
    | {
        [key: string]: string | number | boolean | object
      }
    | ResourceLanguage
}
