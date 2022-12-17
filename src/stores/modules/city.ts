import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getCityAll } from '@/service/modules/getCityAll'

const useCitysStore = defineStore(
  'city',
  () => {
    let allCitys = reactive<any>({})

    const getAllCitysAction = async () => {
      const res = await getCityAll()
      allCitys = res.data
    }

    return { allCitys, getAllCitysAction }
  },
  {
    persist: true,
  },
)

export default useCitysStore
