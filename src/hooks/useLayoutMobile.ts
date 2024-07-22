import { inject, onUnmounted, provide, Ref, ref } from "vue"
const IS_MOBILE = Symbol('IS_MOBILE')
export const useLayoutMobile = (xs: number = 1250): { isMobile: Ref<boolean> } => {
  if (inject(IS_MOBILE, false)) {
    return { isMobile: inject(IS_MOBILE) as Ref<boolean> }
  }

  const computedMobile = () => {
    return window.innerWidth <= xs
  }

  const isMobile = ref(computedMobile())

  const update = () => {
    isMobile.value = computedMobile()
  }

  window.addEventListener('resize', update)


  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  provide(IS_MOBILE, isMobile)

  return { isMobile }
}