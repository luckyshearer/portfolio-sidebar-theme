/**
 * Copyright 2025 luckyshearer
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-screen.js";


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

  update() {
    this.scrollToHash(location.hash);
    window.addEventListener("hashchange", () => {
      this.scrollToHash(location.hash);
    }
    );
    this.onScroll = () => {
      const screens =
      Array.from(this.renderRoot.querySelectorAll("portfolio-screen"));
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      let activeId = screens[0].id;
      for (const screen of screens) {
        const rect = screen.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          activeId = screen.id;
          break;
        }
      }
      if (location.hash !== `#${activeId}`) {
        history.replaceState(null, "", `#${activeId}`);
      }
    };
    window.addEventListener("scroll", this.onScroll);
  }

  onNavClick(e, id) {
    e.preventDefault();
    const object = this.renderRoot.querySelector(`#${id}`);
    if (object) {
      object.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  }

  scrollToHash(hash) {
    if (hash) {
      const id = hash.replace("#", "");
      const object = this.renderRoot.querySelector(`#${id}`);
      if (object) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }


  // Lit render the HTML
  render() {
    const screens = [
      {
        id: "screen-1",
        label: "Home",
        color: "var(--ddd-theme-default-blueberry, #4fc3f7)",
        content: html`
        <h2>Welcome</h2>
        <p>This is your portfolio homepage. Scroll or use the sidebar to explore.</p>
      `,
      },
      {
        id: "screen-2",
        label: "About",
        color: "var(--ddd-theme-default-mint, #00bfae)",
        content: html`
        <h2>About Me</h2>
        <p>Learn more about me and my work.</p>
      `,
      },
      {
        id: "screen-3",
        label: "Projects",
        color: "var(--ddd-theme-default-coral, #ff7043)",
        content: html`
        <h2>My Projects</h2>
        <p>Explore my projects and contributions.</p>
      `,
      },
      {
        id: "screen-4",
        label: "Contact",
        color: "var(--ddd-theme-default-slate, #2c4067)",
        content: html`
        <h2>Contact Me</h2>
        <p>
          <a href="mailto:ams11649@psu.edu">ams111649@psu.edu</a>
        </p>
        <iframe src="https://docs.google/form/d/e/1FAIpQLSfj2v4g3x5k5f5f5f5f5f5f5f5f5f5f5f5f5f5f5/viewform?embedded=true" width="100%" height="400px" style="border:none;"></iframe>
      `,
      },
      {
        id: "screen-5",
        label: "Blog",
        color: "var(--ddd-theme-default-sunflower, #ffd600)",
        content: html`
        <h2>My Blog</h2>
        <p>Read my latest blog posts and articles.</p>
      `,
      },
    ];

    return html`
      <div class="layout">
        <div class="sidebar">
          <nav>
            ${screens.map(
              (screen) => html`
                <a 
                href="#${screen.id}" 
                @click="${(object) => this.onNavClick(object, screen.id)}"
                >${screen.label}
              </a>
              `
            )}
          </nav>
          </div>
          <main class="main-content" style="overflow-y: auto; scroll-snap-type: y mandatory;">
            <div id="screens">
              ${screens.map(
                (screen) => html`
                  <portfolio-screen
                    screen="${screen.id}"
                    color="${screen.color}"
                    label="${screen.label}"
                  >
                    ${screen.content}
                  </portfolio-screen>
                `
              )}
            </div>
            <scroll-button 
              style="position:fixed; bottom:32px; right:32px; z-index:1000;">
            </scroll-button>
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