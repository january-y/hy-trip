import { getDetailInfos } from '@/service/modules/detail'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHouseListStore = defineStore(
  'house-list',
  () => {
    let homeHouseList = ref<any>()
    const getHomeHouseListDataAction = async (houseId: number) => {
      const res: any = await getDetailInfos(houseId)
      homeHouseList.value = res.data
    }

    return { homeHouseList, getHomeHouseListDataAction }
  },
  {
    persist: true,
  },
)

export default useHouseListStore
