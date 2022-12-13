import { Ref } from 'vue'
import { isServer } from './is-server'

export function getOwnerDocument<T extends Element | Ref<Element | null>>(
  element: T | null | undefined
) {
  if (isServer) return null
  if (element instanceof Node) return element.ownerDocument
  if (element?.hasOwnProperty('value')) {
    let domElement = dom(element)
    if (domElement) return domElement.ownerDocument
  }

  return document
}