import { getCategories } from '@/service/modules/getCategories'
import { getHotSelectData } from '@/service/modules/getHotSelect'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCategoriesStore = defineStore(
  'categories',
  () => {
    let categoriesData = ref<any>([])
    let hotSelectData = ref<any>([])

    const geteCategoriesDataAction = () => {
      getCategories().then((res: any) => {
        categoriesData.value = res.data.resData.data
      })
    }

    const getHotSelectDataAction = (page: number) => {
      getHotSelectData(page).then((res: any) => {
        hotSelectData.value = res.data.resData.data
      })
    }

    const loadHotSelectDataAction = (page: number) => {
      getHotSelectData(page).then((res: any) => {
        hotSelectData.value.push(...res?.data?.resData?.data)
      })
    }

    return {
      categoriesData,
      geteCategoriesDataAction,
      hotSelectData,
      getHotSelectDataAction,
      loadHotSelectDataAction,
    }
  },
  {
    persist: true,
  },
)

export default useCategoriesStore
