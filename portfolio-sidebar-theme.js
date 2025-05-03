/**
 * Copyright 2025 luckyshearer
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-page.js";


export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = [
      {id: 'screen-1', title: 'About Me'},
      {id: 'screen-2', title: 'Research'},
      {id: 'screen-3', title: 'Content'},
      {id: 'screen-4', title: 'Questions'},
      {id: 'screen-5', title: 'Contact'}
    ];
  }

  firstUpdated() {
    this.pages = Array.from(this.querySelectorAll("portfolio-page"));
    this.setupScrollBehavior();
    this.observer.observe(this, {
      childList: true,
      subtree: true,
    });

    if (window.location.hash){
      const target = this.querySelector(window.location.hash);
      if(target){
        requestAnimationFrame(() => {
          target.scrollIntoView({behavior:"smooth", block:"start"});
        });
      }
    }
  }

  handleMutations(mutations) { 
    this.pages = Array.from(this.querySelectorAll("portfolio-page"));
    this.setupScrollBehavior();
    this.requestUpdate();
  }

  setupScrollBehavior() {
    const dddColors = [
      "var(--ddd-theme-default)", 
      "var(--ddd-theme-primary)", 
      "var(--ddd-theme-secondary)", 
      "var(--ddd-theme-accent)", 
      "var(--ddd-theme-complement)"
    ];
    this.pages.forEach((page, index) => {
      page.id = `screen-${index + 1}`;
      page.style.height = "100vh";
      page.style.scrollSnapAlign = "start";
      page.style.backgroundColor = dddColors[index % dddColors.length]; 
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
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
      }

      
      .wrapper {
        margin-left: 30px;
        padding: 2rem;
        margin-right: 0px;
      }

      a {
        display: block;
        margin: 0.5rem 0;
        color: var(--ddd-theme-default-pughBlue);
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        font-size: 1.1rem;
        transition: color 0.3s ease;
      }

      a:hover, a:focus {
        outline: 2px solid blue;
        color: var(--ddd-theme-default-skyBlue);
      }
        
      .sidebar {
        width: 100px;
        height: 100vh;
        background-color: var(--ddd-theme-default-alertImmediate);
        padding: 1rem;
        position: fixed;
        left: 0;
        top: 0;
        color: black;
        display: flex;
        flex-direction: column;
        padding-top: 7rem;
        gap: 3rem;
      }
    `];
  }

  scrollToPage(e, index) {
    e.preventDefault();
    const section = document.getElementById(this.pages[index].id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }




  // Lit render the HTML
  render() {
    return html`
      <div class="sidebar">
      ${this.pages.map((page, index) => html`
        <a 
          href = "#${page.id}"
          @click="${(e) => this.scrollToPage(e, index)}"
          @keydown="${(e) => {
            if(e.key === 'Enter') this.scrollToPage(e, index);
          }}"
          tabindex="0"
        >
          ${page.title}
        </a>
      `)}
      </div> 
      
        <div class="wrapper">
          <slot></slot>
        </div>
        `;
    }
  }

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);