import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "#";
    this.image = "#";
    this.link = "#"; 
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        display: inline-block;
      }

      :host([fancy]) .card{
        background-color: blue;
        color: white
      }

      .card.toggled {
        background-color: red;
        color: blue;
      }
      .card {
        background-color: #4f2a06;
        width: 400px;
        text-align: center;
      }
      .cardheader {
        color: yellow;
        margin: 10px 0px 10px 0px;
        font-size: 40px;
        font-family: "Times New Roman", Times, serif;
      }
      p {
        color: yellow;
        margin: 10px 25px 10px 25px;
        font-family: "Times New Roman", Times, serif;
      }
      img {
        width: 200px;
        border: 4px solid yellow;
      }
      .btn {
        color: #4f2a06;
        background-color: white;
        font-size: 15px;
        margin: 0px 0px 5px 0px;
      }
      .btn:focus,
      .btn:hover {
        background-color: blue;
        color: white;
      }
      details summary {
      text-align: center;
      font-size: 20px;
      padding: 8px 0;
      font-family: "Times New Roman", Times, serif;
      color: yellow;

      }

    details[open] summary {
      font-weight: bold;
     }
  
    details div {
      border: 2px solid black;
      text-align: center;
      padding: 8px;
      height: 70px;
      overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
          <img src=${this.image} alt=${this.title} />
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
              <a href=${this.link} target="_blank">
                <button class="btn"><em>Link for more info</em></button>
              </a>
            </div>
          </details>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
