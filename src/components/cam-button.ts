import { LitElement, html } from "lit";

export class CamButton extends LitElement {
  render() {
    return html`<button>Take a picture</button>`;
  }
}

customElements.define("cam-button", CamButton);