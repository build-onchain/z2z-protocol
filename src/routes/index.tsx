import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, type MouseEvent } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const menuRef = useRef<HTMLDetailsElement>(null)

  function followMenuLink(event: MouseEvent<HTMLAnchorElement>) {
    if (menuRef.current) menuRef.current.open = false
    document.getElementById(event.currentTarget.hash.slice(1))?.focus({ preventScroll: true })
  }

  useEffect(() => {
    function closeMenu(returnFocus: boolean) {
      const menu = menuRef.current
      if (!menu?.open) return
      menu.open = false
      if (returnFocus) menu.querySelector('summary')?.focus()
    }

    function onPointerDown(event: PointerEvent) {
      const menu = menuRef.current
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        closeMenu(menu.contains(document.activeElement))
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && menuRef.current?.open) {
        event.preventDefault()
        closeMenu(true)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div className="landing-page" lang="en">
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="hero" id="top" tabIndex={-1}>
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
        <header className="site-header page-container">
          <a className="brand hero-brand" href="#top" aria-label="Z2Z home">
            <img
              src="/brand/landing/z2z-dark-128.png"
              srcSet="/brand/landing/z2z-dark-256.png 2x"
              width={48}
              height={48}
              alt=""
            />
            <span>Z2Z</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#markets">Markets</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle icon-button"
              type="button"
              title="Change color scheme"
              onClick={() => {
                const root = document.documentElement
                const dark = !root.classList.contains('dark')
                root.classList.toggle('dark', dark)
                root.classList.toggle('light', !dark)
                root.dataset.theme = dark ? 'dark' : 'light'
                try {
                  localStorage.setItem('z2z-theme', dark ? 'dark' : 'light')
                } catch {
                  // A blocked preference store must not prevent changing this visit's theme.
                }
              }}
            >
              <Moon className="theme-to-dark" size={19} aria-hidden="true" />
              <Sun className="theme-to-light" size={19} aria-hidden="true" />
              <span className="visually-hidden theme-to-dark">Switch to dark theme</span>
              <span className="visually-hidden theme-to-light">Switch to light theme</span>
            </button>
            <a className="button button-gold header-explore" href="#markets">
              Explore Z2Z <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <details className="mobile-menu" ref={menuRef}>
              <summary className="icon-button" aria-controls="mobile-navigation">
                <Menu className="menu-open-icon" size={21} aria-hidden="true" />
                <X className="menu-close-icon" size={21} aria-hidden="true" />
                <span className="visually-hidden">Menu</span>
              </summary>
              <nav
                id="mobile-navigation"
                className="mobile-navigation"
                aria-label="Mobile navigation"
              >
                <a href="#markets" onClick={followMenuLink}>Markets <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="#philosophy" onClick={followMenuLink}>Philosophy <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="#how-it-works" onClick={followMenuLink}>How it works <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="#readiness" onClick={followMenuLink}>Where we are <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="mobile-explore" href="#markets" onClick={followMenuLink}>Explore Z2Z <ArrowRight size={18} aria-hidden="true" /></a>
              </nav>
            </details>
          </div>
        </header>

        <section className="hero-content page-container" aria-labelledby="hero-title">
          <p className="eyebrow hero-eyebrow">Private by intent. Open by design.</p>
          <h1 id="hero-title">
            <span>A new renaissance</span>
            <span>for open markets.</span>
          </h1>
          <p className="hero-description">
            A peer-to-peer DEX in the making. Inspired by Zcash, designed around
            your terms—and your right to understand every trade.
          </p>
          <div className="hero-cta">
            <a className="button button-gold" href="#markets">
              Explore Z2Z <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="hero-secondary" href="#how-it-works">
              How it works <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-development">
            <span className="development-badge">Development</span>
            <span>Not open for trading yet.</span>
          </p>
        </section>

        <div className="hero-foot page-container">
          <a className="hero-scroll" href="#markets">
            <ArrowDown size={18} aria-hidden="true" />
            <span>A different kind of exchange</span>
          </a>
          <a className="hero-credit" href="#artwork">Art, reimagined <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>

      <main id="main" tabIndex={-1}>
        <section className="markets-section page-container section-space" id="markets" tabIndex={-1} aria-labelledby="markets-title">
          <div className="section-heading markets-heading">
            <div>
              <p className="eyebrow"><span className="ornament" aria-hidden="true">◆</span> The exchange, reimagined</p>
              <h2 id="markets-title">An open market.<br />A personal choice.</h2>
            </div>
            <p className="section-intro">
              Exchange begins with people. We’re building a place to meet on
              clear terms, with deliberate privacy and rights worth keeping.
            </p>
          </div>

          <div className="markets-grid">
            <article className="market-card market-card-p2p" aria-labelledby="p2p-title">
              <div className="card-art">
                <img
                  src="/art/landing/p2p-1200.webp"
                  srcSet="/art/landing/p2p-640.webp 640w, /art/landing/p2p-1200.webp 1200w"
                  sizes="(min-width: 80rem) 768px, (min-width: 64rem) 60vw, calc(100vw - 3rem)"
                  width={1200}
                  height={740}
                  alt="A reimagined Venetian piazza, with people gathered beneath sunlit arcades."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-copy">
                <p className="eyebrow card-eyebrow">01 / Peer to peer</p>
                <h3 id="p2p-title">Markets,<br />between people.</h3>
                <p>
                  A market designed for direct exchange: choose an asset,
                  amount, and limit, then review a proposed fill together.
                  No counterparty means no trade.
                </p>
                <a className="text-link" href="#mechanisms">How P2P fits <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </article>

            <article className="market-card market-card-privacy" aria-labelledby="privacy-title">
              <div className="card-art">
                <img
                  src="/art/landing/privacy-1600.webp"
                  srcSet="/art/landing/privacy-640.webp 640w, /art/landing/privacy-1600.webp 1600w"
                  sizes="(min-width: 80rem) 728px, (min-width: 48rem) 58vw, calc(100vw - 3rem)"
                  width={1600}
                  height={591}
                  alt="The Ideal City, reimagined with subtle emblems in its Renaissance architecture."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-copy">
                <p className="eyebrow card-eyebrow">02 / Deliberate privacy</p>
                <h3 id="privacy-title">Privacy, on your terms.</h3>
                <p>
                  The goal is shielded Zcash at the source, with clear disclosure
                  of what a destination or venue can reveal. Not a blanket
                  promise of anonymity.
                </p>
                <a className="text-link" href="#faq-privacy">Understand the boundaries <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </article>

            <article className="market-card market-card-recovery" aria-labelledby="recovery-title">
              <div className="card-art">
                <img
                  src="/art/landing/recovery-1200.webp"
                  srcSet="/art/landing/recovery-640.webp 640w, /art/landing/recovery-1200.webp 1200w"
                  sizes="(min-width: 80rem) 520px, (min-width: 48rem) 42vw, calc(100vw - 3rem)"
                  width={1200}
                  height={895}
                  alt="Turner’s luminous Venetian harbor, reimagined with small emblems on boats and cargo."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-copy">
                <p className="eyebrow card-eyebrow">03 / Independent rights</p>
                <h3 id="recovery-title">Your rights.<br />Your tools.</h3>
                <p>
                  An app should help—not be your only way forward. We’re
                  designing for owner-held recovery tools that can exercise
                  existing rights when the interface is gone.
                </p>
                <a className="text-link" href="#faq-recovery">About independent recovery <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="philosophy-section section-space" id="philosophy" tabIndex={-1} aria-labelledby="philosophy-title">
          <div className="page-container philosophy-grid">
            <div>
              <p className="eyebrow"><span className="ornament" aria-hidden="true">◆</span> The principle</p>
              <h2 id="philosophy-title">Built for people.<br />Not gatekeepers.</h2>
              <p className="philosophy-aside">The app helps.<br /><em>You decide.</em></p>
            </div>
            <div className="philosophy-copy">
              <p className="editorial-lead">A market should serve<br />the people in it.</p>
              <p>
                Z2Z is being designed around a simple idea: an app can help
                people find one another, but it shouldn’t get to rewrite
                the terms they agreed to.
              </p>
              <ul className="principles-list">
                <li><span>Terms you can inspect.</span><p>Know the asset, recipient, fees, and limits before you authorize.</p></li>
                <li><span>Consent that stays yours.</span><p>No silent switch to another venue or a different trade.</p></li>
                <li><span>Rights you can verify.</span><p>Independent recovery must be proved, not merely promised.</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="how-section page-container section-space" id="how-it-works" tabIndex={-1} aria-labelledby="how-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="ornament" aria-hidden="true">◆</span> A deliberate path</p>
              <h2 id="how-title">Your terms.<br />A verified outcome.</h2>
            </div>
            <p className="section-intro">The intended flow is simple to follow. Every route still needs to qualify before it can handle funds.</p>
          </div>
          <ol className="steps-grid">
            <li>
              <div className="step-marker"><span>01</span><ArrowRight size={22} aria-hidden="true" /></div>
              <h3>Choose terms</h3>
              <p>Choose the exact asset, amount, price limit, and route. P2P and RFQ stay distinct from external venues.</p>
            </li>
            <li>
              <div className="step-marker"><span>02</span><ArrowRight size={22} aria-hidden="true" /></div>
              <h3>Review &amp; authorize</h3>
              <p>Check recipients, fees, privacy, and recovery requirements. Authorize the exact action—not an open-ended permission.</p>
            </li>
            <li>
              <div className="step-marker"><span>03</span><span className="step-final-mark" aria-hidden="true">◆</span></div>
              <h3>Verify settlement</h3>
              <p>Follow the evidence until actual transfers are confirmed. A signature or a proof alone is not a payment.</p>
            </li>
          </ol>
          <a className="text-link how-readiness-link" href="#readiness">See where development stands <ArrowUpRight size={18} aria-hidden="true" /></a>
        </section>

        <section className="readiness-section section-space" id="readiness" tabIndex={-1} aria-labelledby="readiness-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="ornament" aria-hidden="true">◆</span> Where we are</p>
                <h2 id="readiness-title">Ambitious by design.<br />Honest about today.</h2>
              </div>
              <p className="section-intro">We’re building the pieces carefully. This site explains the vision; it does not offer a live real-money swap.</p>
            </div>

            <div className="mechanisms-grid" id="mechanisms" tabIndex={-1} role="group" aria-label="The three exchange mechanisms">
              <div>
                <p className="mechanism-label">At the center</p>
                <h3>P2P market</h3>
                <p>People set terms and review proposed fills. Complete matching and trading are not yet available.</p>
              </div>
              <div>
                <p className="mechanism-label">Within the DEX</p>
                <h3>RFQ quotes</h3>
                <p>Another way to find a price and counterparty. Native settlement and recovery are still being built.</p>
              </div>
              <div>
                <p className="mechanism-label">A separate choice</p>
                <h3>External spot</h3>
                <p>HyperCore is an external venue, not private P2P. Limited testnet reads exist; trading integration does not.</p>
              </div>
            </div>

            <dl className="readiness-list">
              <div>
                <dt><span className="readiness-tag">In development</span><span>The native first step</span></dt>
                <dd>Shielded ZEC → a native asset on local EVM. End-to-end settlement and independent recovery remain incomplete.</dd>
              </div>
              <div>
                <dt><span className="readiness-tag readiness-tag-blocked">Blocked</span><span>Strict-private matching</span></dt>
                <dd>A known privacy limitation remains unresolved. Safe settlement by itself does not make matching private.</dd>
              </div>
              <div>
                <dt><span className="readiness-tag">Candidates</span><span>Possible next routes</span></dt>
                <dd>Same-chain bilateral exchange, Base Sepolia staging, USDC, and other asset pairs need separate qualification. None is a live listing.</dd>
              </div>
              <div>
                <dt><span className="readiness-tag readiness-tag-muted">Deferred</span><span>Later directions</span></dt>
                <dd>Pools, agents, ZSA orders, and provider-based routes are not part of the current build.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="faq-section page-container section-space" id="faq" tabIndex={-1} aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow"><span className="ornament" aria-hidden="true">◆</span> A few good questions</p>
            <h2 id="faq-title">Clarity,<br />before anything else.</h2>
            <p>The vision is ambitious.<br />The boundaries should be easy to see.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Can I trade on Z2Z today?<ChevronDown size={20} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>Not yet. This is the product landing page, not a trading app. There is no wallet connection, live order entry, or real-money swap here. You can explore the intended mechanisms and current development status.</p></div>
            </details>
            <details id="faq-privacy" tabIndex={-1}>
              <summary>Is every transaction private?<ChevronDown size={20} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>No. The goal is shielded Zcash on the source side of a qualified route. Destination addresses, amounts, timing, and external venue data can still reveal connections. Strict-private matching remains blocked. Privacy needs a clear scope—not a universal badge.</p></div>
            </details>
            <details>
              <summary>Which chains and assets are in scope?<ChevronDown size={20} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>The immediate native priority is one-way shielded Ironwood ZEC to a native asset on a local EVM network. That route is incomplete. Base Sepolia is conditional staging; USDC and other assets are candidates, not live listings. No mainnet or universal-chain support is implied.</p></div>
            </details>
            <details id="faq-recovery" tabIndex={-1}>
              <summary>What if the app disappears?<ChevronDown size={20} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>The design goal is independent use of existing rights through owner-held recovery material and tools. It still requires the right keys, data, proving artifacts, gas, and a functioning chain. The complete native manual path is unfinished. Recovery is not a guaranteed refund or a way to unwind an authorized trade.</p></div>
            </details>
            <details>
              <summary>Is Z2Z affiliated with Zcash or Colosseum?<ChevronDown size={20} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>No affiliation or endorsement is claimed. Zcash’s privacy ethos and Colosseum’s creative direction are references. Emblems in the artwork are editorial motifs—not evidence of integrations, supported assets, or endorsement.</p></div>
            </details>
          </div>
        </section>

        <section className="closing-section section-space" aria-labelledby="closing-title">
          <div className="page-container">
            <div className="closing-ornament" aria-hidden="true"><span />◆<span /></div>
            <p className="eyebrow">An open invitation</p>
            <h2 id="closing-title">The future of exchange<br />starts with better terms.</h2>
            <p>Informed choices. Deliberate privacy.<br />A market built around the people in it.</p>
            <div className="closing-actions">
              <a className="button button-gold" href="#markets">Explore Z2Z <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a className="text-link" href="#readiness">See where we are <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <div className="footer-grid">
            <div className="footer-brand-block">
              <a className="brand footer-brand" href="#top" aria-label="Z2Z home">
                <img className="logo-light" src="/brand/landing/z2z-light-128.png" srcSet="/brand/landing/z2z-light-256.png 2x" width={48} height={48} alt="" loading="lazy" />
                <img className="logo-dark" src="/brand/landing/z2z-dark-128.png" srcSet="/brand/landing/z2z-dark-256.png 2x" width={48} height={48} alt="" loading="lazy" />
                <span>Z2Z</span>
              </a>
              <p>Private by intent.<br />Open by design.</p>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <h3>Explore</h3>
              <a href="#markets">Markets</a>
              <a href="#philosophy">Philosophy</a>
              <a href="#how-it-works">How it works</a>
              <a href="#readiness">Where we are</a>
              <a href="#faq">Questions</a>
            </nav>
            <div className="footer-references">
              <h3>Inspiration</h3>
              <a href="https://z.cash/">Zcash <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://colosseum.com/">Colosseum <ArrowUpRight size={15} aria-hidden="true" /></a>
              <p>References, not affiliations.</p>
            </div>
          </div>

          <details className="artwork-credits" id="artwork" tabIndex={-1}>
            <summary>The art behind the exchange <ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="artwork-content">
              <p>AI-adapted from open-access historical paintings. Embedded emblems are artistic motifs, not integrations or endorsements. Original collection records and image rights:</p>
              <ul>
                <li><span>Open markets</span><a href="https://www.clevelandart.org/art/1962.169"><cite>Piazza San Marco, Venice</cite></a> — attributed to Bernardo Bellotto, c. 1740. Cleveland Museum of Art, CC0.</li>
                <li><span>Peer to peer</span><a href="https://www.metmuseum.org/art/collection/search/435839"><cite>Piazza San Marco</cite></a> — Canaletto, late 1720s. The Metropolitan Museum of Art, Public Domain.</li>
                <li><span>Privacy</span><a href="https://art.thewalters.org/object/37.677/"><cite>The Ideal City</cite></a> — Florentine artist, after a design by Giuliano da Sangallo, c. 1480–1484. The Walters Art Museum, CC0.</li>
                <li><span>Recovery</span><a href="https://www.metmuseum.org/art/collection/search/437853"><cite>Venice, from the Porch of Madonna della Salute</cite></a> — J. M. W. Turner, c. 1835. The Metropolitan Museum of Art, Public Domain.</li>
              </ul>
            </div>
          </details>

          <div className="footer-bottom">
            <p>© 2026 Z2Z <span>A project in development. Not open for trading.</span></p>
            <a href="#top">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
