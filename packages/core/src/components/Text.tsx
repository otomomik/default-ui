import type { Component } from 'solid-js'
import { customElement } from 'solid-element'
import { getTagName } from '../utils/element'

type Props = {}

const Text: Component<Props> = () => {
  return (
    <span>
      <slot />
    </span>
  )
}

customElement(getTagName('text'), Text)
