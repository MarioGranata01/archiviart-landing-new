import 'server-only'

const dictionaries = {
  it: () => import('./it.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'it' | 'en') => {
  if (!dictionaries[locale]) {
    return dictionaries.en()
  }
  return dictionaries[locale]()
}