import { formatMonDayTodayV2, formatMonDayTomorrowV2 } from './../../utils/format-date'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useMainStore = defineStore(
  'main',
  () => {
    let originCurrentDate = ref<any>(null)
    let originTomorrowDate = ref<any>(null)
    let currentDate = ref<any>(formatMonDayTodayV2(new Date()))
    let tomorrowDate = ref<any>(formatMonDayTomorrowV2(new Date()))
    let isLoading = ref<boolean>(false)

    return { originCurrentDate, originTomorrowDate, currentDate, tomorrowDate, isLoading }
  },
  {
    persist: true,
  },
)

export default useMainStore
