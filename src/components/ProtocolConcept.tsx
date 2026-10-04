import { useCallback, useEffect, useRef, useState } from 'react'

type Playback = 'idle' | 'playing' | 'ended'

// Art timing only: destination prefunding precedes source authorization.
const duration = 4800
const emphasis = {
  terms: [0, 0.2],
  prefund: [0.2, 0.422],
  source: [0.422, 0.644],
  evidence: [0.644, 0.822],
  allocation: [0.822, 1],
  entitlement: [0.644, 1],
} as const

export default function ProtocolConcept() {
  const figureRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const entryRef = useRef<HTMLDivElement>(null)
  const animations = useRef<Animation[]>([])
  const playback = useRef<Playback>('idle')
  const allowed = useRef(false)
  const visible = useRef(false)
  const hasStarted = useRef(false)
  const [state, setState] = useState<Playback>('idle')
  const [available, setAvailable] = useState(false)
  const [reduced, setReduced] = useState(false)

  const changeState = useCallback((next: Playback) => {
    playback.current = next
    setState(next)
  }, [])

  const clearAnimations = useCallback(() => {
    for (const animation of animations.current) {
      animation.onfinish = null
      animation.cancel()
    }
    animations.current = []
  }, [])

  const stop = useCallback(() => {
    if (playback.current !== 'playing') return
    clearAnimations()
    changeState('ended')
  }, [changeState, clearAnimations])

  const start = useCallback(() => {
    const figure = figureRef.current
    const scene = sceneRef.current
    const entry = entryRef.current
    if (!figure || !scene || !entry || hasStarted.current || playback.current !== 'idle' || !allowed.current || document.visibilityState !== 'visible') return
    const sceneBounds = scene.getBoundingClientRect()
    visible.current = sceneBounds.bottom > 0 && sceneBounds.top < window.innerHeight && sceneBounds.right > 0 && sceneBounds.left < window.innerWidth
    const bounds = entry.getBoundingClientRect()
    const visibleHeight = Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0)
    if (!visible.current || bounds.height <= 0 || visibleHeight < bounds.height * 0.25 || bounds.right <= 0 || bounds.left >= window.innerWidth) return

    try {
      for (const element of figure.querySelectorAll<HTMLElement | SVGElement>('[data-motion-window]')) {
        const [start, end] = emphasis[element.dataset.motionWindow as keyof typeof emphasis]
        const trace = element.hasAttribute('data-motion-trace')
        const frames: Keyframe[] = [
          { opacity: 0, strokeDashoffset: trace ? '1' : undefined, offset: 0 },
          { opacity: 0, strokeDashoffset: trace ? '1' : undefined, offset: start },
          { opacity: 1, strokeDashoffset: trace ? '1' : undefined, offset: start + 0.025 },
          { opacity: 1, strokeDashoffset: trace ? '0' : undefined, offset: end - 0.025 },
          { opacity: 0, strokeDashoffset: trace ? '0' : undefined, offset: end },
          { opacity: 0, strokeDashoffset: trace ? '0' : undefined, offset: 1 },
        ]
        const animation = element.animate(frames, { duration, easing: 'linear' })
        animation.pause()
        animation.currentTime = 0
        animations.current.push(animation)
      }
      animations.current[0].onfinish = stop
      for (const animation of animations.current) animation.play()
      hasStarted.current = true
      changeState('playing')
    } catch {
      clearAnimations()
      allowed.current = false
      setAvailable(false)
      changeState('idle')
    }
  }, [changeState, clearAnimations, stop])

  useEffect(() => {
    const scene = sceneRef.current
    const entry = entryRef.current
    if (!scene || !entry) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const supported = typeof Element.prototype.animate === 'function' && typeof IntersectionObserver === 'function'

    function onPreferenceChange() {
      allowed.current = supported && !preference.matches
      setAvailable(supported)
      setReduced(preference.matches)
      if (!allowed.current) stop()
      else if (visible.current) start()
    }

    function onVisibilityChange() {
      if (document.visibilityState !== 'visible') stop()
      else start()
    }

    const observer = supported ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === scene) visible.current = entry.isIntersecting && entry.intersectionRatio > 0
      }
      if (!visible.current) stop()
      else start()
    }, { threshold: [0, 0.25] }) : null

    onPreferenceChange()
    observer?.observe(scene)
    observer?.observe(entry)
    preference.addEventListener('change', onPreferenceChange)
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('resize', stop)
    return () => {
      observer?.disconnect()
      preference.removeEventListener('change', onPreferenceChange)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', stop)
      clearAnimations()
    }
  }, [clearAnimations, start, stop])

  return (
    <figure
      className="protocol-concept"
      ref={figureRef}
      data-state={state}
      data-enhanced={available && !reduced ? 'true' : 'false'}
      data-motion-preference={reduced ? 'reduced' : 'standard'}
      aria-labelledby="protocol-concept-title"
    >
      <figcaption className="protocol-caption">
        <span id="protocol-concept-title">How a trade would work</span>
        <span>In development · Not live</span>
      </figcaption>
      <p className="protocol-branch">One illustrative full-payment branch</p>

      <div className="agreement-landscape" id="agreement-landscape-scene" ref={sceneRef}>
        <div className="landscape-domain landscape-source">
          <div className="landscape-domain-heading">
            <span className="landscape-kicker">Source</span>
            <div className="landscape-domain-title">
              <a className="zcash-mark" href="https://z.cash/" aria-label="About Zcash at z.cash">
                <img src="/brand/zcash-logo.svg" width={28} height={28} alt="" loading="lazy" />
              </a>
              <h3>Shielded Zcash</h3>
            </div>
            <p>Trader checks the funded destination</p>
            <span className="landscape-condition">Source payment only after that check</span>
          </div>
          <div className="landscape-model" ref={entryRef}>
            <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
              <ellipse className="landscape-shadow" cx="181" cy="137" rx="151" ry="21" />
              <path className="landscape-plane-edge" d="M18 80L96 156L96 166L18 90Z" />
              <path className="landscape-plane-front" d="M96 156L342 111L342 121L96 166Z" />
              <path className="landscape-plane" d="M18 80L264 35L342 111L96 156Z" />
              <path className="landscape-grid" d="M44 105L290 60M70 130L316 85M79 69L157 145M140 58L218 133M202 46L280 122" />
              <path className="landscape-building-side" d="M145 72L145 103L184 138L184 107Z" />
              <path className="landscape-building-front" d="M184 107L232 98L232 128L184 138Z" />
              <path className="landscape-building-top" d="M145 72L193 63L232 98L184 107Z" />
              <path className="landscape-engraving" d="M163 74L192 69L214 89L185 94ZM191 115L221 109M191 122L221 116" />
              <path className="landscape-post" d="M62 104L62 91L75 89L85 98L85 112L72 115ZM277 65L277 53L290 51L300 60L300 73L287 76Z" />
              <path className="landscape-route" d="M75 111L117 103M242 80L290 71M281 67L290 71L283 77" />
              <path className="landscape-trace" d="M75 111L117 103M242 80L290 71" pathLength="1" data-motion-window="source" data-motion-trace="" />
            </svg>
            <span className="landscape-model-emphasis" data-motion-window="source" aria-hidden="true" />
          </div>
          <div className="landscape-actors landscape-source-actors">
            <span><span className="landscape-person" aria-hidden="true" />Trader</span>
            <span><span className="landscape-person" aria-hidden="true" />Solver</span>
          </div>
          <p className="landscape-funds-label"><span className="funds-key" aria-hidden="true" />Funds · shielded payment to the solver</p>
        </div>

        <div className="landscape-terms">
          <div className="terms-plaque">
            <span className="terms-emphasis" data-motion-window="terms" aria-hidden="true" />
            <div className="terms-brand">
              <img className="logo-light" src="/brand/landing/z2z-light-128.png" width={40} height={40} alt="" loading="lazy" />
              <img className="logo-dark" src="/brand/landing/z2z-dark-128.png" width={40} height={40} alt="" loading="lazy" />
              <span>Z2Z <span>Exact terms</span></span>
            </div>
            <p className="terms-fields"><span>Asset</span><span>Amount</span><span>Price</span></p>
            <p className="terms-recovery">Prepare recovery data.<br />Recovery is conditional.</p>
          </div>
          <svg className="terms-plinth" viewBox="0 0 320 100" aria-hidden="true" focusable="false">
            <ellipse className="landscape-shadow" cx="160" cy="73" rx="130" ry="14" />
            <path className="landscape-plane-edge" d="M28 39L80 82L80 89L28 46Z" />
            <path className="landscape-plane-front" d="M80 82L292 50L292 57L80 89Z" />
            <path className="landscape-plane" d="M28 39L240 7L292 50L80 82Z" />
            <path className="landscape-grid" d="M43 51L255 19M59 65L271 33" />
          </svg>
          <p className="landscape-gate">Agreed by trader + solver</p>
        </div>

        <div className="landscape-domain landscape-destination">
          <div className="landscape-domain-heading">
            <span className="landscape-kicker">Destination</span>
            <div className="landscape-domain-title">
              <svg className="evm-glyph" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
                <path d="M4 8L14 3L24 8V20L14 25L4 20ZM4 8L14 13L24 8M14 13V25" />
              </svg>
              <h3>Local EVM</h3>
            </div>
            <p>Native asset · already funded, not minted</p>
            <span className="landscape-condition">Solver funds and commits first</span>
          </div>
          <div className="landscape-model">
            <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
              <ellipse className="landscape-shadow" cx="181" cy="137" rx="151" ry="21" />
              <path className="landscape-plane-edge" d="M18 80L96 156L96 166L18 90Z" />
              <path className="landscape-plane-front" d="M96 156L342 111L342 121L96 166Z" />
              <path className="landscape-plane" d="M18 80L264 35L342 111L96 156Z" />
              <path className="landscape-grid" d="M44 105L290 60M70 130L316 85M79 69L157 145M140 58L218 133M202 46L280 122" />
              <path className="landscape-building-side" d="M149 77L149 103L181 134L181 108Z" />
              <path className="landscape-building-front" d="M181 108L228 99L228 125L181 134Z" />
              <path className="landscape-building-top" d="M149 77L196 68L228 99L181 108Z" />
              <path className="landscape-engraving" d="M164 80L193 74L211 92L182 98ZM189 115L219 109M189 122L219 116" />
              <path className="landscape-post" d="M61 104L61 91L74 89L84 98L84 112L71 115ZM278 66L278 54L291 52L301 61L301 74L288 77Z" />
              <path className="landscape-route" d="M74 110L132 99M123 95L132 99L125 105M240 82L291 72M282 68L291 72L284 78" />
              <path className="landscape-trace" d="M74 110L132 99" pathLength="1" data-motion-window="prefund" data-motion-trace="" />
              <path className="landscape-trace" d="M240 82L291 72" pathLength="1" data-motion-window="allocation" data-motion-trace="" />
            </svg>
            <span className="landscape-model-emphasis" data-motion-window="prefund" aria-hidden="true" />
            <span className="landscape-model-emphasis" data-motion-window="allocation" aria-hidden="true" />
          </div>
          <div className="landscape-actors landscape-destination-actors">
            <span><span className="landscape-person" aria-hidden="true" />Solver</span>
            <span><span className="landscape-person" aria-hidden="true" />Trader</span>
            <span className="landscape-prefund">Funds committed to the trade</span>
          </div>
          <p className="landscape-funds-label"><span className="funds-key" aria-hidden="true" />Funds · existing asset paid to the trader</p>
        </div>

        <div className="landscape-evidence">
          <div className="evidence-labels">
            <span>Finalized source evidence</span>
            <strong>Evidence, not funds</strong>
            <span>Verify source evidence</span>
          </div>
          <svg viewBox="0 0 1000 28" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path className="evidence-route" d="M8 14H980" />
            <path className="evidence-arrow" d="M977 8L985 14L977 20" />
            <path className="evidence-emphasis" d="M8 14H980" data-motion-window="evidence" />
          </svg>
          <p>Only complete, valid, finalized source evidence can release the committed destination funds after verification.</p>
        </div>
      </div>

      <ol className="protocol-steps">
        <li>
          <span className="protocol-step-emphasis" data-motion-window="terms" aria-hidden="true" />
          <span className="protocol-step-number" aria-hidden="true">01</span>
          <h4>Agree on the terms</h4>
          <p>Trader and solver fix the asset, amount and price. The trader keeps the data and tools needed for conditional recovery.</p>
        </li>
        <li>
          <span className="protocol-step-emphasis" data-motion-window="prefund" aria-hidden="true" />
          <span className="protocol-step-number" aria-hidden="true">02</span>
          <h4>Fund the destination first</h4>
          <p>The solver funds the native asset and irrevocably commits it to the agreed trade <strong>before the trader can authorize the source payment.</strong></p>
        </li>
        <li>
          <span className="protocol-step-emphasis" data-motion-window="source" aria-hidden="true" />
          <span className="protocol-step-number" aria-hidden="true">03</span>
          <h4>Check, then pay</h4>
          <p>The trader independently checks the committed funds, code, verifier, recipients and finality, then authorizes the shielded Zcash payment.</p>
        </li>
        <li>
          <span className="protocol-step-emphasis" data-motion-window="entitlement" aria-hidden="true" />
          <span className="protocol-step-number" aria-hidden="true">04</span>
          <h4>Verify, then settle</h4>
          <p>Complete, valid, finalized source evidence must be accepted and classified before the existing destination asset is paid to the trader.</p>
        </li>
      </ol>
      <div className="protocol-scope">
        <p>This illustrates the full-payment path, not every outcome. Other outcomes can stay pending. Recovery is conditional and is not yet available.</p>
        <p>The design uses shielded Zcash at the source. Destination addresses, amounts and timing can still be public. Private matching is not yet solved.</p>
      </div>
      <div className="protocol-ecosystem" role="group" aria-labelledby="protocol-ecosystem-title">
        <h4 id="protocol-ecosystem-title">Ecosystem context · Not live settlement routes</h4>
        <div className="ecosystem-groups">
          <div>
            <p className="ecosystem-group-label">Network research</p>
            <ul className="ecosystem-networks">
              <li>
                <a className="ecosystem-link ecosystem-solana" href="https://solana.com/">
                  <span className="ecosystem-mark"><img src="/brand/ecosystem/solana-mark.svg" width={101} height={88} alt="" loading="lazy" /></span>
                  <span>Solana</span>
                </a>
                <p>Native adapter candidate</p>
              </li>
              <li>
                <a className="ecosystem-link ecosystem-near" href="https://near.org/" aria-label="NEAR official website">
                  <img className="logo-light" src="/brand/ecosystem/near-logo-black.svg" width={1440} height={351} alt="" loading="lazy" />
                  <img className="logo-dark" src="/brand/ecosystem/near-logo-white.svg" width={1440} height={351} alt="" loading="lazy" />
                </a>
                <p>Research context</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="ecosystem-group-label">External venue</p>
            <ul className="ecosystem-venues">
              <li>
                <a className="ecosystem-link ecosystem-hyperliquid" href="https://hyperliquid.xyz/">
                  <span className="ecosystem-mark">
                    <img className="logo-light" src="/brand/ecosystem/hyperliquid-mark-dark.svg" width={200} height={200} alt="" loading="lazy" />
                    <img className="logo-dark" src="/brand/ecosystem/hyperliquid-mark-green.svg" width={200} height={200} alt="" loading="lazy" />
                  </span>
                  <span>Hyperliquid</span>
                </a>
                <p>External venue · testnet reads</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="ecosystem-note">These marks identify research context and an external venue, not live payout destinations, partnerships or endorsements.</p>
      </div>
    </figure>
  )
}
