export const useFormatDateTime = (date: Date, locale = 'pt-BR') => {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date)
}
