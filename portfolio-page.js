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
                    background-color: var(--ddd-theme-accent);
                    height: 100vh;
                    display: block;
                    padding: 2rem;
                }

                h1
                {
                    text-align: right;
                    font-family: var(--ddd-font-navigation);
                    color: rgb(255, 255, 255, 255);
                    background-image: linear-gradient(to right, rgba(255, 192, 203, 0), rgba(255, 182, 193, 0.4), #ff69b4);
                    padding-right: 50px;
                    border-bottom: 2px solid var(--ddd-theme-primary);
                }

                .wrapper {
                    padding: 40px;
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