import { LitElement, html } from "lit";

export class CamButton extends LitElement {
  render() {
    return html`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Take a picture</button>`;
  }
}

customElements.define("cam-button", CamButton);