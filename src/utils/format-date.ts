import dayjs from 'dayjs'

export const formatMonDayToday = (date: any) => {
  return dayjs(date).format('MM月DD日')
}

export const formatMonDayTomorrow = (date: any) => {
  return dayjs(date).add(1, 'day').format('MM月DD日')
}

export const formatMonDayTodayV2 = (date: any) => {
  return dayjs(date).format('MM.DD')
}

export const formatMonDayTomorrowV2 = (date: any) => {
  return dayjs(date).add(1, 'day').format('MM.DD')
}

// end to start
export const getTotalDays = (startDate: any, endDate: any) => {
  return dayjs(endDate).diff(startDate, 'day')
}
