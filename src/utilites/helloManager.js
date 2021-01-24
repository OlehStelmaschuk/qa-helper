export const helloManager = (lang, time) => {
  let date = new Date()
  let hour = date.getHours()
  switch (lang) {
    case 'en': {
      return 'Hello\n'
    }
    case 'ru': {
      switch (time) {
        case 'auto': {
          if (hour > 5 && hour < 12) return 'Доброе утро\n'
          if (hour > 11 && hour < 18) return 'Добрый день\n'
          if (hour > 17 && hour <= 23) return 'Добрый вечер\n'
          if (hour >= 0 && hour <= 5) return 'Доброй ночи\n'
          break
        }
        case 'sunrise':
          return 'Доброе утро\n'
        case 'day':
          return 'Добрый день\n'
        case 'sunset':
          return 'Добрый вечер\n'
        case 'night':
          return 'Доброй ночи\n'
        default:
          return true
      }
      break
    }
    case 'ua': {
      switch (time) {
        case 'auto': {
          if (hour > 5 && hour < 12) return 'Доброго ранку\n'
          if (hour > 11 && hour < 18) return 'Добрий день\n'
          if (hour > 17 && hour <= 23) return 'Добрий вечір\n'
          if (hour >= 0 && hour <= 5) return 'Доброї ночі\n'
          break
        }
        case 'sunrise':
          return 'Доброго ранку\n'
        case 'day':
          return 'Добрий день\n'
        case 'sunset':
          return 'Добрий вечір\n'
        case 'night':
          return 'Доброї ночі\n'
        default:
          return true
      }
      break
    }
    default:
      return true
  }
}
