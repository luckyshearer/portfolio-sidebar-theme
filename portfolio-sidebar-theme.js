/**
 * Copyright 2025 luckyshearer
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
// import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-sidebar.js";


export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = [];
    this.observer = new MutationObserver(this.handleMutations.bind(this));
    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  firstUpdated() {
    this.pages = Array.from(this.querySelectorAll("portfolio-page"));
    this.setupScrollBehavior();
    this.observer.observe(this, {
      childList: true,
      subtree: true,
    });
  }

  handleMutations(mutations) { 
    this.pages = Array.from(this.querySelectorAll("portfolio-page"));
    this.setupScrollBehavior();
    this.requestUpdate();
  }

  setupScrollBehavior() {
    this.pages.forEach((page, index) => {
      page.id = `screen-${index+1}`;
      page.style.height = "100vh";
      page.style.scrollSnapAlign = "start";
      });
    }


  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        height: 100vh;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        overflow-y:scroll;
        scroll-snap-type: y mandatory;

      }
      portfolio-sidebar {
        width: 240px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1000;
      }
      .wrapper {
        margin-left: 240px;
        min-height: 100vh;
      }
      a {
        color: white;
        font-size: var(--ddd-font-size-m);
      }
    `];
  }

  scrollToPage(e, index) {
    e.preventDefault();
    const target = this.pages[index];
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    window.history.pushState({}, "", `#${target.id}`)
  }




  // Lit render the HTML
  render() {
    return html`
      <portfolio-sidebar>
        <ul class="sidebar-links">
          ${this.pages.map((page, index) => html`
            <li>
              <a href="#${page.id}" @click="${(e) => this.scrollToPage(e, index)}">
                ${page.title}
              </a>
            </li>
          `)}
        </ul>
      </portfolio-sidebar>
      <div class="wrapper">
        <slot></slot>
      </div>
        `;
    }

    // linkChange(e) {
    //   let number = parseInt(e.target.getAttribute("data-index"));
    //   if (number >= 0) {
    //     this.pages[number].element.scrollIntoView();
    //   }
    // }
    // addPage(e) {
    //   const element = e.detail.value
    //   const page = {
    //     number: element.pagenumber,
    //     title: element.title,
    //     element: element,
    //   }
    //   this.pages = [...this.pages, page];
    // }
  }

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);