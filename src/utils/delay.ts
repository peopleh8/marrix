import { isBrowser } from '@/utils/isBrowser'

export const delay = (ms: number) => {
  if (!isBrowser()) {
    return
  }

  return new Promise(res => setTimeout(res, ms))
}