import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const useScoll = () => {
  let timer: any = null
  let isBottom = ref<boolean>(false)
  let showTopSearch = ref<boolean>(false)
  let scollHeight = ref(0)
  let scollTop = ref(0)
  let clientHeight = ref(0)
  const windowFn = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      scollHeight.value = document.documentElement.scrollHeight
      scollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight

      if (scollHeight.value < scollTop.value + clientHeight.value + 10) {
        console.log('触底')
        isBottom.value = true
      }

      if (scollTop.value >= 500) {
        showTopSearch.value = true
      } else {
        showTopSearch.value = false
      }
    }, 150)
  }
  onMounted(() => {
    window.addEventListener('scroll', windowFn)
  })
  onActivated(() => {
    window.addEventListener('scroll', windowFn)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', windowFn)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll', windowFn)
  })

  return { isBottom, showTopSearch, scollHeight, scollTop, clientHeight }
}

// 节流，时间段内只触发一次
let testFlag: any = null
const testBtn = () => {
  if (testFlag) {
    return
  } else {
    testFlag = setTimeout(() => {
      console.log(11)
      testFlag = null
    }, 1000)
  }
}

export default useScoll
