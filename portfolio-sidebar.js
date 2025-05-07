import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioSidebar extends I18NMixin(DDDSuper(LitElement)) {
    static get tag() {
        return "portfolio-sidebar";
    }

    constructor(){
        super();
    }

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                    box-sizing: border-box;
                    color: white;
                    width: 240px;
                    height: 100vh;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 10;
                    background: #f8bbd0;
                    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.07);
                }

                nav {
      position: sticky;
      top: 0;
      padding: 1rem;
      height: 100%;
      min-height: 100%;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 1rem;
    }

    a {
      color: white;
      text-decoration: none;
    }

                .wrapper {
                    width: 100%;
                    height: 100%;
                    /* background: pink; */
                    /* border-right: 10px solid white; */
                }

                ul.sidebar-links {
                    list-style: none;
                    padding: 0px;
                    margin: 0px;
                    margin-top: 40px;
                }

                ul.sidebar-links li {
                    margin: 0;
                }

                ul.sidebar-links li a {
                    display: block;
                    padding: 18px 32px;
                    color: #fff;
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-weight: 500;
                    border-left: 4px solid transparent;
                    transition: background 0.2s, border-color 0.2s;
                }

                ul.sidebar-links li a:hover, ul.sidebar-links li a.focus {
                    background: #f06292;
                    border-left: 4px solid #fff;
                }

                @media (min-width: 1024px) {
      :host {
        width: 250px;
        height: auto;
      }

      nav {
        height: 100vh;
      }
    }

    @media (max-width: 1023px) {
      :host {
        width: 100%;
        height: auto;
        
      }

      nav {
        position: relative;
        height: auto;
      }

      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      li {
        margin: 0.5rem;
      }
    }
        `];
    }

    

    render() {
        return html`
            <div class="wrapper">

                <slot></slot>
            </div>
        `;
    }
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);