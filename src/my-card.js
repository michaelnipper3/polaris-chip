import { LitElement, html, css } from 'lit';

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
    this.title = "Rick Deckard";
    this.image = "https://www.therpf.com/forums/attachments/12417640_945743055507970_4938982837811334232_n-jpgoh16c74547ea87a653458bf8972775256aoe57d3cc87-jpg.759686/";
    this.link = "https://bladerunner.fandom.com/wiki/Rick_Deckard";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
    `;
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
          <img src=${this.image} alt=${this.title} />
        <p>Deckard was a Blade Runner in the Fourth Sector until the slaughter at the steel shop. Now, he just wants to put the past behind him, maybe even start over in the off-world colonies. But in this town, the past has a habit of catching up with you.</p>
        <a href=${this.link} target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
