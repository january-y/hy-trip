import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { getCityAll } from '@/service/modules/getCityAll'

const useCitysStore = defineStore(
  'city',
  () => {
    let allCitys = reactive<any>({})
    let currentCity = ref<any>({ cityName: '广州' })

    const getAllCitysAction = () => {
      getCityAll().then((res) => {
        allCitys = res.data
      })
    }

    return { allCitys, currentCity, getAllCitysAction }
  },
  {
    persist: true,
  },
)

export default useCitysStore
