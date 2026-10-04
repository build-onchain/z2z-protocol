import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowUp, ArrowUpRight, Menu, Monitor, Moon, Plus, Sun, X } from 'lucide-react'
import { useEffect, useRef, type MouseEvent } from 'react'
import ProtocolConcept from '../components/ProtocolConcept'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const menuRef = useRef<HTMLDetailsElement>(null)

  function followMenuLink(event: MouseEvent<HTMLAnchorElement>) {
    if (menuRef.current) menuRef.current.open = false
    const target = event.currentTarget.hash.slice(1)
    if (target) document.getElementById(target)?.focus({ preventScroll: true })
  }

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 52rem)')

    function closeMenu(returnFocus: boolean) {
      const menu = menuRef.current
      if (!menu?.open) return
      const hadFocus = menu.contains(document.activeElement)
      menu.open = false
      if (returnFocus && hadFocus) {
        const target = mobile.matches ? menu.querySelector('summary') : document.querySelector<HTMLAnchorElement>('.desktop-nav a')
        target?.focus()
      }
    }

    function onNavigationChange() {
      if (!mobile.matches) closeMenu(true)
    }

    function onPointerDown(event: PointerEvent) {
      const menu = menuRef.current
      if (mobile.matches && menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        closeMenu(true)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && mobile.matches && menuRef.current?.open) {
        event.preventDefault()
        closeMenu(true)
      }
    }

    onNavigationChange()
    mobile.addEventListener('change', onNavigationChange)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      mobile.removeEventListener('change', onNavigationChange)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div className="landing-page" id="top" tabIndex={-1} lang="en">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="page-container header-inner">
          <a className="brand" href="#top" aria-label="Z2Z home">
            <img className="logo-light" src="/brand/landing/z2z-light-128.png" srcSet="/brand/landing/z2z-light-256.png 2x" width={44} height={44} alt="" />
            <img className="logo-dark" src="/brand/landing/z2z-dark-128.png" srcSet="/brand/landing/z2z-dark-256.png 2x" width={44} height={44} alt="" />
            <span>Z2Z</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#exchange">Exchange</a>
            <a href="#questions">Questions</a>
            <a className="header-source" href="https://github.com/build-onchain/z2z-protocol">
              View source <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle icon-button"
              type="button"
              title="Change color scheme: system, light, dark"
              onClick={() => {
                const root = document.documentElement
                const next = root.dataset.theme === 'system' ? 'light' : root.dataset.theme === 'light' ? 'dark' : 'system'
                const dark = next === 'dark' || (next === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
                root.classList.toggle('dark', dark)
                root.classList.toggle('light', !dark)
                root.dataset.theme = next
                try {
                  localStorage.setItem('z2z-theme', next)
                } catch {
                  // A blocked preference store must not prevent changing this visit's theme.
                }
              }}
            >
              <Monitor className="theme-state-system" size={19} aria-hidden="true" />
              <Sun className="theme-state-light" size={19} aria-hidden="true" />
              <Moon className="theme-state-dark" size={19} aria-hidden="true" />
              <span className="visually-hidden theme-state-system">System theme. Switch to light theme</span>
              <span className="visually-hidden theme-state-light">Light theme. Switch to dark theme</span>
              <span className="visually-hidden theme-state-dark">Dark theme. Use system theme</span>
            </button>
            <details className="mobile-menu" ref={menuRef}>
              <summary className="icon-button" aria-controls="mobile-navigation">
                <Menu className="menu-open-icon" size={22} aria-hidden="true" />
                <X className="menu-close-icon" size={22} aria-hidden="true" />
                <span className="visually-hidden">Menu</span>
              </summary>
              <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
                <a href="#exchange" onClick={followMenuLink}>Exchange <ArrowDown size={18} aria-hidden="true" /></a>
                <a href="#questions" onClick={followMenuLink}>Questions <ArrowDown size={18} aria-hidden="true" /></a>
                <a href="https://github.com/build-onchain/z2z-protocol" onClick={followMenuLink}>View source <ArrowUpRight size={18} aria-hidden="true" /></a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-art"
            src="/art/landing/hero-1660.webp"
            srcSet="/art/landing/hero-800.webp 800w, /art/landing/hero-1660.webp 1660w"
            sizes="100vw"
            width={1660}
            height={947}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-content page-container">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span>A peer-to-peer</span>{' '}
                <span>exchange, built</span>{' '}
                <span>around Zcash.</span>
              </h1>
              <p className="hero-description">
                A DEX in development for trading directly with other people.
                Agree on the asset, amount and price before authorizing a trade.
              </p>
              <div className="hero-actions">
                <a className="source-button" href="https://github.com/build-onchain/z2z-protocol">
                  View source <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                <a className="hero-secondary" href="#exchange">
                  The idea <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-status">In development. Trading is not available.</p>
            </div>
          </div>
        </section>

        <section className="exchange-section page-container" id="exchange" tabIndex={-1} aria-labelledby="exchange-title">
          <div className="exchange-intro">
            <h2 id="exchange-title">Agree on the trade.<br />Know what you authorize.</h2>
            <p>
              A trader and a solver agree on exact terms. The solver commits
              funds at the destination first. The trader checks that commitment
              before authorizing a shielded Zcash payment.
            </p>
          </div>

          <ProtocolConcept />

          <div className="exchange-panorama">
            <img
              src="/art/landing/privacy-1600.webp"
              srcSet="/art/landing/privacy-640.webp 640w, /art/landing/privacy-1600.webp 1600w"
              sizes="(min-width: 90rem) 1344px, calc(100vw - 48px)"
              width={1600}
              height={591}
              alt="An adaptation of The Ideal City: people meet in an open piazza, surrounded by Renaissance architecture."
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="questions-section page-container" id="questions" tabIndex={-1} aria-labelledby="questions-title">
          <h2 id="questions-title">Essential{' '}<br />questions.</h2>
          <div className="questions-list">
            <details>
              <summary>Can I trade today?<Plus size={21} strokeWidth={1.5} aria-hidden="true" /></summary>
              <div className="question-answer">
                <p>Not yet. Z2Z is in development. You cannot connect a wallet or move funds here.</p>
              </div>
            </details>
            <details>
              <summary>What is private?<Plus size={21} strokeWidth={1.5} aria-hidden="true" /></summary>
              <div className="question-answer">
                <p>The design uses shielded Zcash at the source. Destination addresses, amounts and timing can still be public. Private matching is not yet solved.</p>
              </div>
            </details>
            <details>
              <summary>Where can I follow development?<Plus size={21} strokeWidth={1.5} aria-hidden="true" /></summary>
              <div className="question-answer">
                <p>GitHub has this website’s source and design notes—not a complete trading protocol.</p>
                <a className="inline-source" href="https://github.com/build-onchain/z2z-protocol">View the website source <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <div className="footer-topline">
            <img src="/brand/landing/z2z-dark-128.png" srcSet="/brand/landing/z2z-dark-256.png 2x" width={48} height={48} alt="Z2Z coin symbol" loading="lazy" />
            <a className="footer-top-link" href="#top">Back to top <ArrowUp size={19} aria-hidden="true" /></a>
          </div>
          <p className="footer-wordmark"><span className="visually-hidden">Z2Z</span><span aria-hidden="true">Z</span><span aria-hidden="true">2</span><span aria-hidden="true">Z</span></p>
          <div className="footer-links">
            <nav aria-label="Footer navigation">
              <a href="#exchange">Exchange</a>
              <a href="#questions">Questions</a>
              <a href="https://github.com/build-onchain/z2z-protocol">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            </nav>
            <p>© 2026 Z2Z</p>
          </div>
          <details className="artwork-credits" id="artwork" tabIndex={-1}>
            <summary>Artwork &amp; credits <Plus size={19} strokeWidth={1.5} aria-hidden="true" /></summary>
            <div className="credits-content">
              <p>AI-adapted from open-access historical paintings. Embedded emblems are editorial motifs, not integrations, supported assets or endorsements.</p>
              <ul>
                <li><a href="https://www.clevelandart.org/art/1962.169"><cite>Piazza San Marco, Venice</cite> <ArrowUpRight size={15} aria-hidden="true" /></a><span>Attributed to Bernardo Bellotto, c. 1740. Cleveland Museum of Art, CC0.</span></li>
                <li><a href="https://art.thewalters.org/object/37.677/"><cite>The Ideal City</cite> <ArrowUpRight size={15} aria-hidden="true" /></a><span>Florentine artist, after a design by Giuliano da Sangallo, c. 1480–1484. The Walters Art Museum, CC0.</span></li>
              </ul>
              <p className="font-credits">Self-hosted type: <a href="/fonts/instrument-serif-OFL.txt">Instrument Serif</a> and <a href="/fonts/manrope-OFL.txt">Manrope</a>, under the SIL Open Font License.</p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  )
}
