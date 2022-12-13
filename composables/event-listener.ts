import { watchEffect } from 'vue'
import { isServer } from '../utils/is-server'

export function useEventListener<T extends keyof WindowEventMap>(
  element: HTMLElement | Document | Window | EventTarget | null | undefined,
  type: T,
  listener: (event: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions
) {
  if (isServer) return

  watchEffect((onInvalidate) => {
    element = element ?? window

    element.addEventListener(type, listener as any, options)
    onInvalidate(() => element!.removeEventListener(type, listener as any, options))
  })
}