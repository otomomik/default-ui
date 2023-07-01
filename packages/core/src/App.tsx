import type { Component } from 'solid-js'
import './components/Text'

type Props = {}

export const App: Component<Props> = () => {
  return (
    <>
      <h2>Text</h2>
      <dui-text>Text</dui-text>
      <h1>Hello World!!</h1>
    </>
  )
}
