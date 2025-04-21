/**
 * Copyright 2025 luckyshearer
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        width: 100vw;
        box-sizing: border-box;
      }
      .layout {
        display: flex;
        min-height: 100vh;
        width: 100vw;
      }
      .sidebar {
        width: 260px;
        background: #2c4067;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
        min-height: 100vh;
      }
      .sidebar nav {
        display: flex;
        flex-direction: column;
        gap: 48px;
        margin-top: 40px;
        width: 100%;
        align-items: center;
      }
      .sidebar nav a {
        color: #fff;
        text-decoration: none;
        font-size: 1.1em;
        letter-spacing: 2px;
        font-family: 'Roboto', Arial, sans-serif;
        transition: color 0.2s;
      }
      .sidebar nav a:hover {
        color: #4fc3f7;
      }
      .main-content {
        flex: 1;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        position: relative;
      }
      .logo-block {
        text-align: center;
        margin: 60px 0 20px 0;
      }
      .logo-block svg {
        margin-bottom: 10px;
      }
      .subtitle {
        font-size: 1.1em;
        margin-bottom: 10 px;
        color: #2c4067;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 500;
      }
      .portfolio-title {
        font-family: "Montserrat", Arial, sans-serif;
        font-size: 3em;
        color: #2c4067;
        letter-spacing: 0.1em;
        font-weight: 700;
        margin: 0;
        text-shadow: 2px 2px 0 #fff, 4px 4px 0 #2c4067;
      }
      .wave-block {
        width: 100%;
        position: relative;
        margin-bottom: 0;
      }
      .wave-block svg {
        display: block;
        width: 100%;
        height: 90px;
      }
      .wave-label {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        color: #2c4067;
        font-size: 2em;
        font-family: 'Roboto', Arial, sans-serif;
        opacity: 0.5;
        letter-spacing: 0.1em;
        pointer-events: none;
        user-select: none;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="layout">
        <aside class="sidebar">
          <nav>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">CONTACT</a>
            <a href="#">RESEARCH</a>
          </nav>
        </aside>
        <main class="main-content">
          <div class="logo-block">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <polygon points="50, 10, 90, 30, 50, 50, 10, 30" fill="2c4067"/>
              <polygon points="50, 10, 90, 30, 50, 50, 10, 30" fill="4fc3f7"/>
            </svg>

            <div class="subtitle">Professional</div>
            <h1 class="portfolio-title">Portfolio</h1>
          </div>
          <div class="wave-block">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
              <path fill="#2196f3" d="M0, 32 C360, 80 1080, 0 1440, 48 L1440, 90 L0, 90 Z"></path>
            </svg>
            <span class="wave-label">About</span>
          </div>
          </main>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);