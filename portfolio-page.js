import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class PortfolioPage extends DDDSuper(LitElement) {
    static get tag() {
        return "portfolio-page";
    } 

    constructor() {
        super();
        this.title = "";
        this.pagenumber=null;
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            pagenumber: { type: Number },
        };
    }

    static get styles(){
        return [
            super.styles,
            css`
                :host {
                    background-color: var(--page-bg, white);
                    height: 100vh;
                    width: 100vw;
                    display: block;
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    scroll-snap-align: start;
                    overflow: auto;
                }

                h1
                {
                    text-align: center;
                    font-family: var(--ddd-font-navigation);
                    color: rgb(255, 255, 255);
                    background-image: linear-gradient(to right, rgba(255, 192, 203, 0), rgba(255, 182, 193, 0.4), #ff69b4);
                    border-bottom: 2px solid var(--ddd-theme-primary);
                    margin: 0 auto;
                    padding: 1rem 0;
                }

                .wrapper {
                    top: 0;
                    left: 100px;
                    padding: 2rem;
                    width: calc(100% - 100px);
                    height: 100vh;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                }
            `];
        }
    
    render() {
        return html`
        <div>
            <h1>${this.title}</h1>
            <div class="wrapper">
                <slot></slot>
            </div>
        </div>
        `;
    }

    firstUpdated(changedProperties) {
        if (super.firstUpdated) {
            super.firstUpdated(changedProperties);
            
        }
        page.style.backgroundColor = dddColors[index % dddColors.length]; 

        this.dispatchEvent(new CustomEvent('page-added', {
            bubbles: true,
            composed: true,
            detail: {
                value: this
            }
        }))
    }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);