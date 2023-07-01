import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { getTagName } from '../utils/element'

@customElement(getTagName('text'))
export class Text extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `

  render() {
    return html`<span><slot></slot></span>`
  }
}
