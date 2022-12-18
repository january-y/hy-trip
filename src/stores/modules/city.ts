import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { getCityAll, getHotSuggests } from '@/service/modules/getCityAll'

const useCitysStore = defineStore(
  'city',
  () => {
    let allCitys = reactive<any>({})
    let currentCity = ref<any>({ cityName: '广州' })
    let hotSuggestsData = ref<any>({})

    const getAllCitysAction = () => {
      getCityAll().then((res) => {
        allCitys = res.data.resData.data
      })
    }

    const getHotSuggestsAction = () => {
      getHotSuggests().then((res) => {
        hotSuggestsData.value = res.data.resData.data
      })
    }

    return { allCitys, currentCity, getAllCitysAction, hotSuggestsData, getHotSuggestsAction }
  },
  {
    persist: true,
  },
)

export default useCitysStore
