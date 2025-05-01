import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioPageWrapper extends I18NMixin(DDDSuper(LitElement)) {

    static get tag() {
        return "portfolio-page-wrapper";
    }

    constructor() {
        super();
        this.title="";
        this.breakpoint="";


        this.registerLocalization({
            context: this,
            localesPath:
                new URL("./locales/portfolio-page-wrapper.ar.json", import.meta.url).href +
                "/../",
            locales: ["ar", "es", "hi", "zh"],
        });
    }

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    background-color: var(--ddd-theme-accent);
                    font-family: var(--ddd-font-navigation);
                    display: inline-block;
                }
            `,
        ];
    }

    render() {
        return html`
            <div class="wrapper">
                <slot>
                </slot>
            </div>
        `;
    }

    static get haxProperties() {
        return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
}
}

globalThis.customElements.define(PortfolioPageWrapper.tag, PortfolioPageWrapper);