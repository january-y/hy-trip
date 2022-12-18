import dayjs from 'dayjs'

export const formatMonDayToday = (date: any) => {
  return dayjs(date).format('MM月DD日')
}

export const formatMonDayTomorrow = (date: any) => {
  return dayjs(date).add(1, 'day').format('MM月DD日')
}

// end to start
export const getTotalDays = (startDate: any, endDate: any) => {
  return dayjs(endDate).diff(startDate, 'day')
}
