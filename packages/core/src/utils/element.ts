import { COMPONENT_PREFIX } from '../const/element'

export const getTagName = (tagName: string): string => {
  return `${COMPONENT_PREFIX}${tagName}`
}
