import { LitElement, httml, css } from "lit";

export class PortfolioScreen extends LitElement {
    static get tag() {
        return {
            screen: { type: String },
            color: { type: String },
            label: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                min-height: 100vh;
                width: 100vw;
                scroll-snap-align: start;
                position: relative;
                transition: background 0.3s;
            }
            .content {
                width: 100vw;
                height: 100vh;
                box-sizing: border-box;
                padding: 64px 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            h2 {
                margin-top: 0;
                margin-bottom: 16px;
                font-size: 2.5em;
            }

        `;
    }

    render() {
        return html`
            <div
                id="${this.screen}"
                style="background: ${this.color};"
                aria-label="${this.label}"
            >
                <div class="content">
                <slot></slot>
                </div>
            </div> 
        `;
        }
    }
    customElements.define("portfolio-screen", PortfolioScreen); 