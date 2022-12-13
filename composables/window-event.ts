import { watchEffect } from 'vue'
import { isServer } from '../utils/is-server'

export function useWindowEvent<T extends keyof WindowEventMap>(
    type: T,
    listener: (this: Window, ev: WindowEventMap[T]) => any,
    options?: boolean | AddEventListenerOptions
  ) {
    if (isServer) return
  
    watchEffect((onInvalidate) => {
      window.addEventListener(type, listener, options)
      onInvalidate(() => window.removeEventListener(type, listener, options))
    })
  }