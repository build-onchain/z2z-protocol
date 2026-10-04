# Z2Z — Đặc tả giao diện Renaissance Exchange

> **Landing redesign và Agreement landscape đã authorize/implemented; trading workspace vẫn là đề xuất, chưa release qualification.** Z2Z là tên sản phẩm dự kiến, không đặt thêm expansion. Tài liệu định nghĩa cách trình bày và phối hợp quyền theo từng route; không tạo quyền tiền, financial API, circuit, subsystem hoặc deployment mới.
>
> **Hiện trạng,2026-10-04:** Home imports landing-only [`ProtocolConcept`](../src/components/ProtocolConcept.tsx): complete SVG/CSS2.5D still/four captions, one automatic4800ms native emphasis on eligible viewport entry, **no playback buttons**. Public page uses short concrete copy, Source/Destination and Trader/Solver labels; separate official Solana/NEAR/Hyperliquid context identifies roles, not live routes. A1–A3 retained/resolved history và latest A4 overlap proof ở [audit](design-audit.md). Không executable protocol UI, full financial/accessibility/performance/trademark/deployment qualification.

## 1. Phạm vi, nguồn và quyết định

Mục tiêu: người dùng hiểu mình đang giao dịch ở đâu, exact asset nào, ai có quyền gì, mình thực nhận bao nhiêu và bằng chứng nào cho phép hành động; nghệ thuật giúp định hướng thương hiệu nhưng không cản việc đọc số. Đây là đặc tả interface, không redesign architecture.

| Nguồn canonical | Phần chi phối đặc tả |
|---|---|
| [PRODUCT](../../ziquid-dex/docs/PRODUCT.md), §§1–7 | P2P là chợ trung tâm của DEX; RFQ là discovery khác trong DEX; settlement không phải market mode; external HyperCore là lựa chọn riêng; ưu tiên native và readiness. |
| [ARCHITECTURE](../../ziquid-dex/docs/ARCHITECTURE.md), §§1, 3, 4.2, 5, 6.1, 7 | Exact assets/authority; owner consent; partial/cancel; external domains; native economics, states và actual effects. |
| [SERVER-INDEPENDENCE](../../ziquid-dex/docs/SERVER-INDEPENDENCE.md), §§1–5, 7–8 | Recovery kit, cold restore, permitted manual rights, offline parties, output recovery, root/cancel policy và company-off acceptance. |
| [Client SDK](../../ziquid-dex/docs/modules/client-sdk.md), §§1–5, 7 | **Conceptual future interface**, không APIs có sẵn; exact signing, Unknown, `AllocationReady`/`RecoveryEstimate`, privacy và persistence. |
| [NATIVE-IMPLEMENTATION-STATUS](../../ziquid-dex/docs/NATIVE-IMPLEMENTATION-STATUS.md), “Actual implemented behavior”, “Concrete blockers” | Bằng chứng implementation và thiếu sót hiện hành; local primitives không đồng nghĩa financial route enabled. |

**Thứ tự đọc:** PRODUCT owns scope; ARCHITECTURE owns behavior; SERVER-INDEPENDENCE owns recovery; status owns observed readiness. Các ghi chú SDK/dated imports về thin SDK, SQLite hay source migration không override architecture/status mới. Không suy ra endpoint, SQL engine hoặc state implementation từ mô tả conceptual. Không import giả định auto-residual routing, thời gian 60 giây, 5 bps hay zero fee từ tài liệu lịch sử.

- [concept.md](concept.md): định vị sản phẩm, vocabulary và giới hạn lời hứa.
- **Tài liệu này:** canonical current landing composition, Home/root/illustration-leaf responsibilities, implemented storyboard/behavior; §§3 và 6 tiếp tục owns financial UI mapping, không tạo financial state machine thứ hai trong animation.
- [style.md](style.md): canonical actual landing colors/fonts/geometry/focus/motion và scoped accessibility/performance targets; workspace recipes và unmeasured targets riêng.
- [artwork.md](artwork.md): canonical exact image/font/mark sources, attribution, rights, role/status và functional-logo eligibility. Tài liệu này quyết định vị trí, không thay provenance.
- [design-audit.md](design-audit.md): canonical observed audit, retained A1–A3 reproduction history/resolved proof scope, reference ledger và true unknowns; không legal/financial/deployment qualification.

**Các lựa chọn cố định:** landing contemporary neutral light/dark với historical paintings, selective display và sans controls; workspace Navy, dense và text-first; mặc định app nav vào P2P, không vào external spot. No globally exposed private orderbook, universal cross-chain balance, privacy score/badge hoặc chart/TVL/activity/balance giả. Không thêm tabs perps, LP, farming hay agents. Chưa enable native Ironwood ZEC → local EVM native asset; không trình bày ZEC/USDC như cặp live. Samechain bilateral là proposal; strict-private matching structural Blocked, không được “chữa” bằng nhãn MPC/ZK.

## 2. Landing và app là hai bề mặt khác nhau

### 2.1 Landing `/` — giải thích trước, không giả một sàn live

**Redesign được người dùng duyệt 2026-10-04, thay thế layout/copy cũ.** Public copy English; audience là early Zcash users/builders đánh giá dự án. Contemporary exchange, không historical-institution website: neutral surfaces, thin rules, borderless compositions, measured spacing, sans body/controls và expressive display có chọn lọc. Painting vẫn làm hero backdrop, không tách thành stock-image token; localized legibility treatment không flatten toàn tranh. Reference Hyperliquid là bài học hierarchy/composition, không copy fonts proprietary, assets, metrics hoặc claims.

**Bốn nhịp, không thêm các section rhetorical lặp lại:**

1. **Hero/product/action.** Approved Z2Z coin/header, Bellotto ecosystem hero, unchanged H1 **“A peer-to-peer exchange, built around Zcash.”** Supporting **“A DEX in development for trading directly with other people. Agree on the asset, amount and price before authorizing a trade.”** Status **“In development. Trading is not available.”** **View source** → verified [public web repository](https://github.com/build-onchain/z2z-protocol), not complete financial protocol; **The idea** → `#exchange`.
2. **Product thesis / `#exchange`.** H2 **“Agree on the trade. Know what you authorize.”** Trader/solver agree exact terms, solver commits destination funds first, trader checks before source authorization. Figure **“How a trade would work” / “In development · Not live”**, **“One illustrative full-payment branch”**; Source/Shielded Zcash, Destination/Local EVM, separate Trader/Solver, exact-terms plaque, local funds and dashed evidence. Four captions/conditional recovery/privacy limits always readable; automatic-once emphasis changes no financial state. Separate role-labelled ecosystem context below scope, then one Ideal City panorama. No extra marketing beat, artwork-card series, wallet/form/price/operation. Former Offer↔Agreement↔Settlement A/B participants are historical, not chains.
3. **Ba essential questions / `#questions`.** Native details/summary: **Can I trade today?** Not yet; development, không wallet/order/funds path. **What is private?** Intended shielded Zcash source; destination amounts/addresses/timing có thể public; private matching unresolved, không universal anonymity. **Where can I follow development?** Link public web source/GitHub; không giả toàn financial code đã published. Không thêm affiliation FAQ, internal readiness inventory hoặc procedural trading steps.
4. **Own-brand ending/footer.** Oversized typographic **Z2Z** trên dark solid ending, riêng với canonical approved coin symbol; không regenerate logo hoặc centered duplicate CTA. Functional Exchange / Questions / GitHub links. Discreet native artwork-credits drawer có actual Cleveland/Walters original collection sources, accurate attribution/period/CC0 và AI-edit disclosure; ecosystem emblems là editorial motifs, không integrations/endorsement. Không Inspiration column, Zcash/Colosseum design-reference links, placeholder socials/legal, fake signup/waitlist, partner wall hoặc metrics.

**Delivery/accessibility contract, không blanket PASS:** responsive320px+,200% text/text-spacing, visible keyboard focus,44px touch targets, complete reduced-motion/no-JS meaning. Short plain public copy applies throughout hero/thesis/diagram/questions; precise financial terms remain in specification. Root/Home ownership retained; hero eager/panorama lazy, local approved coin/art/fonts/OFLs unchanged. Official identity SVGs below source/scope don't create routes or legal clearance; permission/terms review before public deployment. A1–A3 prior bounded resolution and A4 latest overlap checks are in audit, not all-state/full-AT certification. No new runtime dependency/font CDN/tracker/financial action.

**Prior bounded redesign verification — integration owner, 2026-10-04, không chạy lại trong đợt docs/audit:** final `NITRO_PRESET=vercel pnpm build` + `pnpm exec tsc --noEmit` **PASS** (10.30s), sau khi dừng concurrent dev. Initial build timed out; retry sau khi dừng dev pass không cần source fix. Runtime contention là inference, không root cause đã được độc lập chứng minh. Generated Vercel-preset SSR output được exercise qua local preview4173 và actual Node24 function trả HTTP200; đây không deployment.

- Isolated Chromium actual widths320/390/768/1440: không page overflow;320/390 với root font200% và menu mở/đóng pass reflow.
- Mobile menu Escape/outside/anchor closure và focus tới Exchange pass; FAQ click/Enter và native credits pass. Three-state system/light/dark cycle, persistence/reload, system preference changes và storage-denied pass.
- No-JavaScript hero/FAQ/credits keyboard và settled pointer interactions pass. Initial raw selector click misses do font/layout transient; corrected settled hit pass, không suppress hoặc source workaround.
- Reduced-motion scroll `auto`; local images và actual Instrument Serif/Manrope TTFs loaded. `brokenAnchors:0`, `remoteResources:[]`, `pageerrors:[]`; public View source repository HTTP200 verified.
- **Historical pre-fix sampling:** actual hero image/CSS composite390/1440 both themes had H1 minima9.83/3.61, support14.16/7.90, status15.75/5.77. Later historical768×1000 support2.21/status2.83 established A1; H1 bbox1.44 did not establish a glyph failure. These bounded old crop methods cannot certify current text, all responsive crops or full AA.
- **Historical initial full-page audit, superseded by authorized fixes:** previously built output on4182 had default reflow passes at320/390/768/1440/1920, boundaries639/640/641,831/832/833,1119/1120/1121 and landscape844×390; it also reproduced A1, A2 hidden-open390→1440→390 and A3 spacing424px overflow. [Audit](design-audit.md) retains these failures and current resolution proof; earlier reviewer “no findings” never erased them.

**Prior manual-illustration implementation checks — owner,2026-10-04:** build/TypeScript passed (7.39s); Node24 generated Vercel handlerHTTP200 and local Zcash markHTTP200; preview4183 supplied A1 text-line contrast, A2 menu resize/focus and A3 spacing resolution. Former12-track9000ms Play/Pause/Resume/Replay/offscreen/resize/reduced-motion checks and simulated hidden-page handling remain historical, **not current automatic behavior**. No-JS/native FAQ/credits, dark reload/local images/fonts/anchors/no errors were bounded prior observations. [Audit](design-audit.md) preserves exact proof.

**Latest automatic/plain-copy/ecosystem cutover — owner,2026-10-04:** build/TypeScript PASS7.79s(artifact272);Node24 actual generated SSRHTTP200/plain caption/no playback UI;5newSVGURLsHTTP200. Preview4184:no overflow at320/390/640/768/832/833/900/1024/1119/1120/1121/1280/1440/1920 and320/390200%;declared spacing320/390100%/200% document305/375 within viewports. Fresh offscreen idle→eligible entry12tracks4800ms→natural ended0→re-entry quiet;active offscreen/reduce also ended0. No-JS4steps/3ecosystem anchors/no controls. Targeted visible nonabsolute children no collisions;plaque/plinth gap12px100%,24px200%. Latest menu390open→1440closed/visibleExchangefocus→390closed/Escape/FAQ keyboard pass,darkreload/3correctvisiblemarkvariants/no brokenhashes/pageerrors. New shortened-copy Range-line current-composite390/640/768/1120/1121/1440 support/status≥4.5;[audit](design-audit.md#a1) owns exact pairs/prior distinction. Not every pixel/AT/real background-tab/native-error-support matrix/CWV/legal/fundedroute/deployment proof.

**Additional latest lifecycle observations:** active resize1440→1280 canceled to ended0animations;fresh playing→simulated hidden `document.visibilityState`+`visibilitychange` canceled to ended0;restored visible property/event did not restart. Current handler/latch paths exercised,not actual background-tab/OS scheduling. Error/unsupported-native API matrix remains unmeasured.

**Historical/superseded evidence — previous landing, 2026-10-04:** `pnpm build` và `pnpm exec tsc --noEmit` đạt; bounded Chromium smoke đã exercise widths320/390/768/1440,200% reflow, theme persistence/system/storage-denied, menu/FAQ keyboard, no-JS và reduced motion. Các checks và sampled hero ratios của surface cũ **không** chứng nhận redesigned layout/copy/crops/typography; không full accessibility audit hoặc financial qualification.

**Artwork retention:** sáu source JPEG, first `*-painting-edit.png`, approved ecosystem PNGs và derivatives/provenance đều được giữ. Landing mới chỉ render Bellotto hero và Ideal City panorama, không Canaletto P2P/Turner recovery cards hoặc Monet/Hoffbauer. Approved own symbol **không wordmark**, có [light alpha](../public/brand/z2z-logo-light-transparent.png)/[dark alpha](../public/brand/z2z-logo-dark-transparent.png), không background previews. Large footer Z2Z là page typography, không đổi canonical symbol. [Artwork catalog](artwork.md#logo-z2z-và-bộ-ecosystem-sau-duyệt--2026-10-03) giữ source/motif history; AI-edited adaptations không nguyên bản bảo tàng, canonical wallet logos, support badges hoặc financial-control backdrop. Bellotto/Canaletto thế kỷ XVIII và Turner thế kỷ XIX không thành Renaissance; không museum/Zcash endorsement.

<a id="landing-components"></a>

#### 2.1.1 Current composition và ownership

`Route` uses `component: Home`. Root theme bootstrap và Home sections/handlers remain existing owners; Home imports **one landing-only default-export leaf** `ProtocolConcept`, no props/public SDK API, financial loader, generic scene configuration hoặc chain registry. Đây là responsibilities của current source, không lệnh refactor.

| Phần current / source | Trách nhiệm và contract |
| --- | --- |
| Theme bootstrap — `__root.tsx:17–31,76–79` | Guarded `z2z-theme`, classes/data-theme before content; system observer only applies in system mode. CSS no-JS system-color/logo fallback, unusable theme action hidden without bootstrap. |
| Theme action — `index.tsx:81–105` | Native system→light→dark→system action, current visit still changes if storage blocked; CSS accessible current/next names. Illustration inherits scoped CSS, no second theme owner. |
| Header/menu — `index.tsx:8–58,64–119` | Native nonmodal details/summary; Home owns Escape/outside/anchor close/focus. `matchMedia('(max-width: 52rem)')` change clears open on desktop; if focus was inside disappearing disclosure, moves to visible desktop Exchange link, otherwise no focus theft. Escape/outside handlers only operate in mobile mode; no trap. A2 proof is bounded in audit. |
| Hero — `index.tsx:123–157`; `.hero::before`/responsive CSS | One H1/eager dimensioned decorative painting,short concrete support/status.40–70rem gradient/56vw keeps A1 fix;art/headline unanimated. Owner repeated new-copy text-line composite at390/640/768/1120/1121/1440≥4.5;prior numbers retained separately,no H1/every-glyph certificate. |
| Thesis/panorama — `index.tsx:159–183` | Exact-terms thesis, `<ProtocolConcept />`, existing lazy dimensioned descriptive Ideal City panorama. No financial forms/RPC/live state. |
| Illustration leaf — `ProtocolConcept.tsx:3–129,131–328` | Complete SSR source/terms/destination/four-caption/scope plus isolated ecosystem group; decorative SVG aria-hidden. Local `idle/playing/ended`, native automatic-once4800ms emphasis/cleanup, no controls/SDK/financial API. |
| Questions — `index.tsx:185–208` | Three native disclosures with trading/privacy/public-web-source limits; no custom accordion API. |
| Footer/credits — `index.tsx:211–238`; `.footer-wordmark` CSS | Dark page-wordmark/accessibility equivalent, three minmax grid tracks/40cqw display, actual links/native museum/font credits. Prior A3 bounded spacing proof retained, no clipping/user-override suppression/Inspiration. |

Stable destinations: `#top`, `#main`, `#exchange`, `#questions`, `#artwork` và `https://github.com/build-onchain/z2z-protocol`. Không wallet/RPC/live network dependency để đọc landing. Exact implemented visual recipes thuộc [style](style.md#landing-tokens); observed interaction evidence thuộc [audit](design-audit.md).

<a id="agreement-landscape"></a>

#### 2.1.2 Implemented “Agreement landscape” — approved composition

Authorized and implemented2026-10-04 as a **SVG/CSS2.5D architectural maquette** on inherited solid neutral landing surface. Source plane left, exact **Asset / Amount / Price** plaque/plinth center, destination plane right; depth only in architectural geometry/shadows, HTML labels upright outside projection. Own approved coin stays flat on the terms plaque—not middlechain/custodial router. No glossy coins, portal/neon/parallax paintings or borrowed LayerZero asset. Existing fonts/paintings/four beats retained.

- Source **“Source / Shielded Zcash”**, **“Trader checks the funded destination”**, **“Source payment only after that check”**; separate **Trader / Solver**. **“Funds · shielded payment to the solver”** is source-local, not a cross-chain cash arrow. Trader maps canonical Owner U; Solver maps Solver S, without changing financial docs.
- Destination **“Destination / Local EVM”**, **“Native asset · already funded, not minted”**, **“Solver funds and commits first”**; Solver/Trader actors with **“Funds committed to the trade”** on its own row, **“Funds · existing asset paid to the trader”**. Neutral EVM glyph does not identify Ethereum/Base/USDC/live network.
- Caption **“How a trade would work” / “In development · Not live”**, descriptor **“One illustrative full-payment branch”**; plaque **“Prepare recovery data. Recovery is conditional.”**, gate **“Agreed by trader + solver”**. Scope explicitly recovery conditional/not yet available and other outcomes pending. Evidence rail **“Finalized source evidence / Evidence, not funds / Verify source evidence”**, complete/valid/finalized source qualification remains explicit.
- Unchanged official Zcash SVG,28px in44px `https://z.cash/` link named **“About Zcash at z.cash”**, flat authentic mark. Own approved coin stays terms identity, not a middlechain. [Artwork](artwork.md#functional-protocol-marks) owns provenance/policies; identification is not endorsement, route readiness or legal clearance.
- Below captions/scope: **“Ecosystem context · Not live settlement routes”**. **Network research:** [Solana](https://solana.com/) — **Native adapter candidate**; [NEAR](https://near.org/) — **Research context**. **External venue:** [Hyperliquid](https://hyperliquid.xyz/) — **External venue · testnet reads**. Separate meaningful official links, unmodified first-party files/theme variants, no payment/evidence-plane placement/partner lockup/live-support implication. Explicit group note denies payout destinations/partnerships/endorsements. Other staging/asset/tool/deferred directions remain docs-only.
- Desktop scene shares four **subgrid rows** for domain headings/models/actors/funds; terms occupies center, evidence own row. Positive `.75rem` plaque/plinth gap replaces negative overlap; prefund label owns actor row, icons remain contained. **≤70rem** stacks scene (domain≤28rem,terms≤24rem,gap2.5rem); nav still **≤52rem**. Ecosystem columns collapse≤70rem; network entries one column≤40rem. This is readable reflow, not projected/shrunken labels.

**Historical alternatives considered before approval:** pre-rendered3D still adds media/variant maintenance; WebGL would need a genuine user-controlled spatial requirement unmet by SVG/still. Selected fixed two-domain explanation required neither. Actual implementation uses native SVG/CSS/WAAPI, **no WebGL/Lottie/video/motion library/new runtime dependency**. This complexity choice is not measured performance superiority. [Reference ledger](design-audit.md#reference-ledger) preserves the research/proposal trail.

<a id="illustration-storyboard"></a>

#### 2.1.3 Implemented storyboard — một full-payment branch, không financial state machine mới

Đây là bốn caption steps luôn tồn tại trong SSR HTML; animation chỉ emphasis. §§3 và 6 cùng canonical ARCHITECTURE vẫn owns actual money rules/allocation/unknown/refund/excess/retry. Illustration không thay protocol qualification hoặc mô tả mọi branch.

| Step | Meaning luôn nhìn thấy trong still | Implemented explanatory emphasis |
| --- | --- | --- |
| **1 — Agree on the terms** | Trader/solver fix asset,amount,price; trader keeps data/tools for conditional recovery. Exact executable source authorization remains withheld until funded-commitment check. | Plaque/first-caption emphasis, no safe-money tick. |
| **2 — Fund the destination first** | Solver funds native asset and **irrevocably commits** to agreed trade **before trader can authorize source payment**. | Destination-local prefund trace/second caption; no source→destination cash transport. |
| **3 — Check, then pay** | Trader independently checks committed funds,code,verifier,recipients,finality, then authorizes shielded Zcash payment. Canonical full checks remain financial specification. | Source-local trace/third caption; no mint/cross-chain atomic promise. |
| **4 — Verify, then settle** | Complete,valid,finalized source evidence must be accepted/classified before existing destination asset pays trader in this full-payment branch. Other branches retain exact canonical rules. | Dashed evidence before destination allocation trace; final-caption emphasis spans both. Evidence/receipt/credit is not cash/paid. |

Exact scope: **“This illustrates the full-payment path, not every outcome. Other outcomes can stay pending. Recovery is conditional and is not yet available.”** Privacy: **“The design uses shielded Zcash at the source. Destination addresses, amounts and timing can still be public. Private matching is not yet solved.”** Partial/excess/conflict/evidence-pending rules remain canonical §§3/6/specification; no false happy-path loop. Public copy removes P/U/S notation, not financial gates or complete-source-evidence qualifications.

<a id="illustration-interface"></a>

#### 2.1.4 Implemented illustration behavior contract

- **Authorization/history:** latest request supersedes former user-started9s controls with automatic short emphasis, plain whole-page copy, visible role-qualified ecosystem marks and overlap repair. Initial proposal/manual implementation/A1–A3 proof remain historical. Financial gates/contracts/routes unchanged.
- **One landing leaf:** default export used only by Home/no props, static labels/local assets/existing theme, no wallet/RPC/API/live financial state/SDK/registry. `idle / playing / ended` is local art state.
- **Complete first:** semantic SSR figure/four ordered captions/scope/ecosystem always readable; decorative SVG/emphasis aria-hidden. **No Play/Pause/Resume/Replay controls or timing toolbar exist**, including SSR/no-JS. Reduced-motion/unsupported native APIs/animation error retain complete still.
- **Automatic once:** WAAPI and IntersectionObserver supported, reduced-motion off, document visible, scene intersecting, **at least25% of source-model height visible** and horizontally in viewport. First eligible entry starts12 native tracks for **4800ms**, `hasStarted` latches successful run for this mounted leaf. No loop/re-entry/replay/resume; an initially ineligible still can begin when first eligible, but a started run cannot restart. Terms0–960ms; prefund960–2025.6; source2025.6–3091.2; evidence3091.2–3945.6; allocation3945.6–4800; final caption3091.2–4800. Art timing is not settlement/recovery ETA. No timer/requestAnimationFrame/render loop/per-frame aria-live/focus or pointer capture.
- **Lifecycle:** active run offscreen/hidden/resize/reduce → cancel all animations and `ended` complete still; natural finish does the same. Return visibility/re-entry/preference restoration does not restart a latched run. Unmount disconnects observer/listeners and cancels. Initialization/native animation errors disable enhancement and preserve still. Exact code contract is source evidence; latest exercised paths versus unknowns belong to audit, not assumed old manual-lifecycle results.
- **Evidence/rights ownership:** [style](style.md#illustration-motion) actual recipes/unmeasured targets, [artwork](artwork.md#functional-protocol-marks) exact assets/conflicting restrictive policies and human permission review before deployment, [audit](design-audit.md) latest bounded layout/autostart/logo proof/A1–A4 history. Local-preview user authorization is not third-party trademark clearance, funded protocol qualification/full accessibility/CWV or deployment.


### 2.2 App — công cụ kiểm tra, không một gallery

Nền Navy `#172B3A`, chữ Paper; Gold `#E4B55F` dùng điểm nhấn. Muted `#58636A`, Success `#24684C`, Danger `#A33232` theo contrast rules trong style.md: trên Navy không dùng riêng làm chữ/stroke trạng thái; luôn có label, Paper text và viền nhận biết. Không paintings, texture hoặc motion sau numbers, tables, forms hay review modal. Art chỉ ở landing hoặc editorial aside không chứa dữ liệu tiền.

Header app gồm Z2Z → landing; nav; readiness/network indicator; `Read-only`/wallet connection; locale. Không total portfolio value. Exact chain/deployment của **hành động đang chọn** luôn thấy được, không một network switch ngầm đổi tất cả rights.

| Route proposed | Nav và mục đích | Giới hạn |
|---|---|---|
| `/app` → `/app/p2p` | Entry của sàn | Chưa tồn tại trong starter; default P2P không đổi native priority. |
| `/app/p2p` | `P2P` — own orders, candidate fills, order builder | Không public toàn bộ private market/depth. |
| `/app/rfq` | `RFQ` — yêu cầu và so sánh exact quotes | Không thay P2P, không executable khi route blocked. |
| `/app/external/hypercore` | `External spot` — venue riêng | Persistent label `External · HyperCore · Public venue`; chỉ spot. |
| `/app/activity` | `Activity` — records của owner trong local scope | Không global feed; missing records không bằng no effects. |
| `/app/activity/:localId` | Detail order/fill/quote/obligation đã chọn | ID opaque local, không keys/source locator/quote mapping trong URL. |
| `/app/recovery` | `Recovery` — import/restore/readiness/rights | Không yêu cầu company login để dùng qualifying manual right. |

Không deep-link với private terms trong query/hash. Detail và Recovery liên kết hai chiều bằng record local; không tạo thêm route cho mỗi native state. Browser Back giữ draft nhưng không tự ký/gửi, không làm sống lại authorization đã tiêu.

## 3. Financial context và action capability

### 3.1 Một context chính xác, không chỉ ticker

Mỗi builder, row được phép hiển thị, quote, review và detail phải nối về cùng **immutable financial context**. Chỗ hẹp được rút gọn bằng middle ellipsis, nhưng full value có thể mở/copy và luôn hiện đầy đủ trước ký. Không âm thầm resolve descriptor đã funding bằng registry `latest`.

| Nhóm | Dữ liệu phải trình bày/kiểm |
|---|---|
| Exact asset | Tên/ticker chỉ là label; network và execution domain, chain/network ID, native asset hay contract/mint/token ID, token program/adapter, decimals/raw units; wrapper/issuer/backing/transfer restrictions nếu có. Native ZEC: đúng Zcash network, Ironwood pool và source context/branch; không đồng nhất wrapped ZEC với shielded native ZEC. |
| Deployment/rules | Địa chỉ contract/program, code/verifier/schema/context identity và pinned version; asset adapter, proxy/upgrade/issuer dependencies, consumption domain và supported policy. Một code hash của proxy không đủ chứng minh tất cả rules bất biến. |
| Terms | Order/quote/fill/obligation reference local; sell/buy exact assets; quantity, price limit hoặc agreed quote; allowed partial quantity, already consumed amount và successor remainder; settlement construction, intent/common fill digest và signed expiry nếu có. |
| Money | Maximum total debit, exact source amount `A`, destination prefund `D` khi native; authenticated net `C` khi đã có; actual receive/allocated shares/minimum receive theo route; fee asset, từng fee và fee recipient, gas/fee payer, cap/agreed fee, rounding/dust. Unknown fee không được hiển thị `0` hoặc `Free`. |
| Beneficiaries | Fixed recipient mỗi chân, solver/source receiver, refund beneficiary, change/remainder outputs và recovery owner theo đúng route; signer/fee payer/relayer riêng. Không suy recipient từ tên contact hoặc address shape. |
| Evidence | Authenticated source/target/venue view, provenance, `asOf`, history/root/checkpoint/finality policy, current unspent/cancel/capacity, supporting proof scope và actual effects. `Observed`, `Unverified`, `Accepted evidence`, `Final under policy` không gộp thành một tick `Verified`. |
| Recovery/privacy | Restore readiness và pinned artifacts; rights hiện có, dữ liệu/private witness còn thiếu; source shielding, public target amount/recipient/time/linkage, matcher inference, prover disclosure, app/network metadata, custody/issuer/venue dependency và limits. Không tổng hợp thành privacy badge hoặc phần trăm. |

Không tính `Available` bằng cách cộng Core/EVM/Solana/Ironwood. Chỉ hiển thị inventory/right trong **exact owner + asset + execution domain + deployment** đang chọn và có provenance. `Reserved`, `SubmissionUnknown`, `Armed`, `Provisional`, `Confirmed` tách rõ; một phần capital không đồng thời backing order, external order và withdrawal. Khi thiếu evidence, hiển thị `Không xác định`, không zero. Active SQL không thuộc interface contract này.

### 3.2 Trade review — checkpoint trước từng quyền tài chính

Review mở từ `Review order`, `Review fill`, `Review quote`, `Review payout/refund` hoặc exact external action. Tên modal nêu hành động, không dùng một `Confirm swap` cho mọi scope. Order intent/discovery consent **không** tự cho phép fill, source spend, funding, external order hay transfer.

Nội dung theo thứ tự:

1. **Hành động và venue:** P2P/RFQ hay External HyperCore; `Proposed/Blocked/Read-only` nếu chưa enable. Nêu market mechanism riêng với settlement construction.
2. **Bạn trả / nhận:** full exact asset descriptors, raw và formatted amounts, limit/minimum, max total debit; fixed recipients và change/remainder. Native phân biệt `D prefunded` với amount thực sự allocated khi biết `C`.
3. **Mỗi fee và signer:** fee recipient/asset/amount/cap; signer, fee payer, network, deployment/code/context. Gas estimate riêng với fixed economic fee; estimate thay đổi không được tăng fee cap hoặc sửa financial terms tự động.
4. **Authority/finality/privacy:** ai ký/gửi, dữ liệu/proof nào kiểm, release nào irreversible, boundary công khai/custody/issuer/venue, early-Q option và source fee khi native. Không mô tả nguồn shielded như đích private.
5. **Recovery và outcome:** bundle đã **restore/inspect thực tế**, resources/data availability, original pinned version, next permitted rights, cancellation semantics và ETA status; actual simulation result nếu có. Chưa simulate hoặc không có real implementation → ghi rõ và block financial submit.
6. **Exact authorization:** fill digest/output bindings/expiry/capability generation; user mở xem full immutable descriptor. Khi fields thay đổi, invalidates review cũ và cần review/consent mới; không sửa signed packet tại chỗ.

Các CTA riêng: `Approve exact fill` là exact owner consent; `Sign source payment` chỉ xuất hiện sau native arm gate; `Sign & submit [action]` nói rõ khi thao tác bao gồm send. Không prechecked consent, không thông qua bằng dismiss/Enter vô tình. Cancel/close modal chỉ dừng **new** signature/release, không thu hồi chữ ký đã xuất hoặc nghĩa vụ đã armed.

### 3.3 Capability checks — disable có lý do, không UI ban phát quyền

Capability là kết quả inspect authenticated state + local owner capability + canonical rule, không server flag `approved` hoặc checkbox. UI liệt kê từng check `Ready / Missing / Invalid / Unknown / Not applicable`, nguồn/as-of và lý do. UI disabled button chỉ là guard bổ sung; wallet/protocol validator vẫn phải enforce. Không giả API `canTrade` hay method bindings đang tồn tại.

| Hành động | Những điều kiện phải đủ trước financial prompt |
|---|---|
| New P2P order/discovery request | Exact supported scope, quantity/limit/fee valid và disclosure consent; no implicit funds lock/send. Nếu action thực sự deposit/reserve backing onchain, review riêng và recovery gate trước irreversible action. Strict-private market enablement vẫn Blocked. |
| New samechain fill | Route qualified; both owners kiểm common exact terms; disjoint backing/live generation/capacity; mỗi owner tự tạo, backup, decrypt và recompute proceeds/change/remainder commitments; exact proofs/consents bind outputs/ciphertexts/fees; recovery kit và actual simulation đủ. |
| Submit already-authorized fill | Packet không đổi, authentic eligible historical root, current unspent/cancel/capacity và explicit signed expiry hợp lệ; no need new offline-owner consent chỉ vì unrelated root churn. Không hứa execution/MEV immunity. |
| Cancel/withdraw samechain remainder | Owner có actual remaining capability, current canonical consumption; cancel cùng backing generation, không packet-only revoke. Races phải reconcile; dùng original funded rules. |
| Native S prefund/arm | Genuine available one-note relation, complete valid agreed Q/no-FVK certificate, independent U/S recovery capabilities, exact destination inventory/context và all-hostile/excess gates đủ. Các gates còn thiếu hiện nay → **không enable** funding. |
| Native U release/sign P | Restore kit/independent U witness; independently authenticated irrevocable exact destination arm, asset/amount/fixed U/S/code/context/finality; source packet/lifetime hợp lệ. Wrong/unfinalized/cancellable funding → giữ executable P authorization private. |
| Native payout/refund | Accepted full source history + exact supported financial classification/context; authentic unconsumed target right và fixed allocation; gas/prover/artifacts/recipient constraints; actual transfer simulation. No nonpayment inference từ silence, timeout hoặc `T != P`. |
| External spot order/cancel | User đã chọn venue, exact market/account/network/units/limit/fees/nonce/action scope; owner signs exact action, authentic current fills/reservations đủ để tránh reused capital; no broad delegated wallet mặc định. |
| Retry/rebroadcast | Reconcile original action và authentic effects trước; xác nhận right còn unconsumed, bytes/economic terms còn được phép. Không tạo competing intent/new fee/nonce/recipient chỉ vì response mất. |

Mất company service có thể mất new discovery. Nó không phải lý do yêu cầu company login/fresh allowlist cho existing independently exercisable qualifying right; Recovery phải chỉ ra manual path và prerequisites thực có. Nếu manual implementation còn thiếu, nói đúng missing capability thay vì một nút fake fallback.

## 4. Màn hình và hành vi

### 4.1 P2P — list, order builder, owner consent

**Desktop ba cột:** trái là `My orders / Proposals for me`; giữa là order builder hoặc exact selected-fill terms; phải là owner consent/capability panel. Nav P2P phản ánh product core, không chứng minh native route sẵn sàng.

- **List:** selector exact sell/buy asset và settlement eligibility; tabs `My orders`, `Proposals for me` là phạm vi dữ liệu của owner, không global book. My-order rows gồm side, quantity/limit có units, consumed/remainder, local order reference, state và as-of. Proposal rows chỉ hiện terms được phép tiết lộ cho owner theo privacy construction; no global trader identity, private source locator, depth, cumulative hidden liquidity hoặc accepted-set map. Strict-private design chưa qualify → không publish book/counterparty inventory để làm UI “có dữ liệu”.
- **Builder:** `Sell / Buy` là order direction, không venue. Hai exact asset selectors, quantity, limit và unit denominator, allowed partial quantity, fees và backing scope; summary max debit/receive constraints. `Settlement: proposed samechain / incomplete native…` chỉ là route descriptor. Ticker giống nhau khác chain/contract phải là lựa chọn khác; unsupported asset vẫn explainable nhưng không submit.
- **Own intent vs fill:** `Review order` kiểm intent/discovery terms, không consent cho bất kỳ match nào. Khi có candidate, center thay bằng exact fill quantity/price/output/fees; phải xem common immutable digest, output recovery và successor remainder. Trở về draft không xóa outstanding authorized fills.
- **Owner consent:** checklist `My exact terms`, `My outputs restored & checked`, `My authorization`, `Other owner authorization`, `Current backing`, `Ready to submit`. Status người kia là mức đủ quyền cần biết, không chia private artifacts. Không show `Matched` như `Filled`; candidate chưa được cả hai đồng ý là `Awaiting consent`.
- **No counterparty:** “Chưa có đối ứng cho điều kiện này. Không có phần khớp hoặc tiền thực nhận.” Người dùng giữ/sửa own intent nếu quyền cho phép hoặc cancel unused qualifying backing. Không phantom liquidity, maker bot, auto RFQ/external fallback hay liquidity guarantee. `Xem RFQ` chỉ điều hướng; RFQ cần new exact request/review, không carry authority.
- **Partial:** chỉ accepted actual fill mới giảm original capacity; original consumed một lần, disjoint successor ghi exact remaining liability/allowed amount và owner-recoverable outputs. UI hiện `Đã thực hiện`, `Phần còn lại`, `Chờ consent tiếp theo` riêng. Mỗi next fill cần fresh exact terms/output/recovery/owner consent. Owner offline thì chưa có new fill; đã fully authorized packet có thể submit theo retained-root policy. Không reset capacity bằng fresh note/random ID; không route remainder sang HyperCore.
- **Cancel:** draft chưa có backing thì `Discard draft`; qualifying live order dùng `Review cancellation of remaining right`. Canonical fill/cancel winner quyết định; request/ACK không giải phóng tiền. Nếu fill thắng, chỉ successor remainder có thể cancel; nếu shared-generation cancel thắng, tất cả outstanding packets trên generation đó reject. Native armed obligation không được đặt vào nút cancel này.

Trên development surface không render fabricated order rows. Empty list nêu “Chưa có P2P interface/matching được tích hợp”, không “Thị trường không có thanh khoản” vì chưa quan sát thị trường. Xem PRODUCT §§1–3, ARCHITECTURE §5 và SERVER-INDEPENDENCE §4 cho authority này.

### 4.2 RFQ — discovery trong DEX

Builder chọn exact source/destination, amount, recipient, constraints và selected route. `Request quote` không source spend. List/compare panel chỉ chứa authentic received quotes: provider/solver scoped identity được phép, quote reference/as-of/expiry, source debit, destination amount, fee breakdown, fixed recipients, custody/privacy/finality/recovery constraints và qualification. Không sort “best” bằng invented prices hoặc coi quoted size là escrow backing.

Quote detail có `Terms`, `Readiness`, `Recovery`, `Evidence`; UI cho người dùng tự chọn quote, không tự chọn provider khác sau lỗi. New quote/reprice/context change invalidate prior review. Nếu native: hiện rõ một chiều **shielded Ironwood ZEC → local EVM native asset**, incomplete; không có live ZEC/USDC banner. Solver phải có vốn thật và irrevocably prefund đúng destination trước executable P release; quote signed/received không là arm hoặc entitlement. Các bước recovery/Q/arm/P/evidence/transfer dùng native matrix §6, không RFQ countdown refund.

Không quote: “Chưa nhận được báo giá có thể kiểm chứng”; quote expired: “Cần báo giá mới trước new acceptance”, không xóa existing armed claim. `No response`, `Rejected`, `Stale`, `Unsupported` là kết quả discovery khác nhau, không proven nonpayment. RFQ không thay chợ P2P và không sửa GD2 structural blocker. Nguồn: PRODUCT §2, ARCHITECTURE §7, SDK §§1–2.

### 4.3 External spot — tách venue và quyền

Persistent notice: **“External HyperCore spot — venue công khai, không phải chợ P2P Z2Z.”** Market selector phải nêu exact Core account/network, spot token IDs/market ID/lot/decimals; HyperEVM native/contract assets là execution domain khác, không chung balances hay atomic transfer.

Nếu sau này có authentic read integration, panel venue order/fill/account có provenance, coverage/as-of và incomplete-history warning; external public data được label external. Native status có typed testnet reads **trong native code**, không có nghĩa web app đã tích hợp hoặc wallet/sign/exchange submission đã có. Hiện chỉ cho đọc design/readiness, không show synthetic connected account.

Financial use requires explicit venue choice và exact per-action owner signing: order, cancel, transfer/withdraw và fee approval là scopes riêng. Không mặc định broad API/agent wallet dưới nhãn spot-only/no-movement/no-leverage; policy backend không enforce stolen signer. Unsafe/unqualified delegated scope phải block prompt và giải thích quyền vượt phạm vi. Không perps/leverage tab; no automatic P2P residual, provider/public-Zcash route hay hidden privacy downgrade. External cancel có thể thua fill; retained reservation cần actual fills/nonce/order state reconciliation, không venue ACK = canceled. Company-off user có thể dùng **actual** venue-native own signer/tools, vẫn phụ thuộc venue/chain/issuer/account/data. Nguồn: ARCHITECTURE §6.1, SERVER-INDEPENDENCE §6, SDK §5.

### 4.4 Activity và detail — knowledge không phải outcome

Activity chỉ đọc owner-local records/imports và authentic observations đúng scope. Filters `Orders`, `Quotes`, `Settlements`, `External` phân loại records, không thêm feature lanes; `All` không gộp balance. Row gồm local reference, mechanism/venue, exact asset/domain labels, amount/unit nếu known, **protocol state**, outcome knowledge/finality, last observation time và next permitted action. UTC/local time labels rõ; không animation giả live activity. Local empty history không khẳng định onchain không có giao dịch.

Detail gồm:

1. Summary state + full immutable context; banner `Read-only / Unknown / EvidencePending / Reorg` khi có.
2. Money table: authorized debit/prefund, actual authenticated consideration, fixed allocations, actual transfers/receipts, remaining right, reserved/provisional/confirmed. No paid total từ pending hash.
3. Timeline source/target/venue riêng: prepared → signed/released → submitted → observed → accepted under policy → actual effects → final under policy. Thiếu bước phải hiện thiếu, không time-travel từ API success sang Completed.
4. Evidence panel: provenance, history/root/checkpoint, policy, as-of, completeness; raw public receipt có thể inspect, private signing/source data chỉ ở local controlled inspect không public export.
5. Capability/actions panel: một next permitted action với lý do; `Reconcile`, `Inspect recovery`, hoặc exact retry/cancel/payout/refund nếu real capability đủ. Nút `Refresh` chỉ đọc lại, không resend tiền.
6. Recovery link và actual bundle/artifact readiness; UI update không đổi original funded code/beneficiaries/fees/consumption rules.

Native partial terminal row ghi `Completed — phân bổ một phần đã chuyển thực tế`, hiện cả U/S shares; không ghi user được toàn bộ quote. Refunded nêu solver destination refund, source U self-return chỉ nếu branch evidence chứng minh, không “user refunded all” chung.

### 4.5 Recovery — inspect/restore quyền, không escape mọi nghĩa vụ

Screen theo thứ tự **Import → Restore & inspect → Independent sync → Inspect permitted right → Prepare/prove → Build/simulate → User sign/submit → Reconcile**. Đây là goal của manual consumer, không lệnh CLI/API hiện có. Ở hiện trạng, unavailable steps có named missing capability và link canonical status; không fake success hoặc pseudo-command copy button.

- Import encrypted owner-controlled bundle từ local file; public descriptor và private capability tách scope. Không paste seed/private key/FVK vào web form, không upload secret để “recovery”. Tool/artifact copies phải tồn tại ở owner, pin original version, hashes kiểm bytes; CID/hash hoặc hosted download link không bằng availability.
- Restore gate kiểm đọc actual encrypted private bytes, inspect full exact context, needed note/openings/outputs/witness/signing/Unknown records và public artifact bytes; không `Backup saved` chỉ vì storage path. Trước funding, arm hoặc irreversible capability release phải đã restore/inspect được.
- Independent sync nêu node/history/data provenance, finality/reorg, artifact/prover/compute/gas/recipient prerequisites. No company login/license/fresh signature cho qualifying existing rights. Missing data/secrets có thể block; bundle không khôi phục mất key bằng hash.
- Rights table: own unfilled samechain exit/cancel; known partial successor; already fully authorized packet; native payout/refund predicate; legacy custody cần actual signers; external quyền theo venue. Không `Withdraw all` xuyên domains, không reclaim tài sản đã delivered.
- Action builder chỉ exact permitted action, cùng validator như app; selectable actual own node/arbitrary submitter transport không đổi beneficiary/fee/asset. Native manual acceptance còn incomplete; không đưa current arithmetic/PCZT inspection thành proof/sign/settlement driver.
- Export explicit encrypted private bundle hoặc separately reviewed redacted public diagnostic; private file không xuất qua share link. Không delete pending witness/authorized bytes khi hết ETA, quote expiry, logout hoặc SDK update.

ETA panel mặc định `Unmeasured — chưa có phép đo phù hợp`, liệt kê stage/reason/as-of/dependencies; nếu valid measurements sau này thì mới `Estimated` với provenance và range. `EvidencePending` không countdown. Deadline/ETA exceeded chỉ cập nhật information, không quyền cancel/refund. Nguồn: SERVER-INDEPENDENCE §§3, 7–8; SDK §§4–7.

## 5. Readiness, knowledge và trạng thái giao diện

### 5.1 Không trộn development/read-only/disconnected

Ba lớp hiển thị **độc lập**: implementation/route readiness; connection/capability của owner; knowledge/finality của operation. `Connected` không làm route live; `Disconnected` không xóa onchain rights; API available không làm observed outcome verified.

| Bề mặt | Nội dung và CTA hợp lệ |
|---|---|
| **Current development** | Banner “Thiết kế giao diện — chưa tích hợp ví, P2P/RFQ/external trading hoặc native settlement”; real starter không đã có screens. Trong future preview chỉ descriptor/spec/readiness thật; không synthetic rows, charts, TVL, balances, signatures hay fake-success wizard. CTA đọc docs/inspect design; financial controls unavailable. |
| **Read-only, nếu có authentic integration sau này** | Xem supported authentic public/owner-imported observations với scope/provenance/as-of/coverage; ký/gửi không có. Imported local record có thể inspect nhưng không chứng minh current right nếu chưa sync. Không yêu cầu kết nối ví chỉ để đọc public descriptor. |
| **Disconnected, sau khi wallet integration thực có** | Không có signer session; vẫn giữ local pending records và thấy known rights/readiness. `Connect wallet` chỉ chọn signer/domain, không xin omnibus approval. Không show universal wallet balance hoặc default account as owned. Reconnect phải reconcile original intent, không resume-send tự động. |
| **Connected nhưng route blocked** | Nêu từng missing financial/privacy/recovery gate và link canonical status; no signing/funding prompt. Không claim features live nhờ wallet connected hoặc TS build. |
| **Ready for exact action, tương lai** | Chỉ khi route qualification và action capability đủ; review exact scope trước signer. UI không tự certify audit/mainnet support/ordinary-laptop proving từ một check xanh. |

Native priority không đồng nghĩa toàn DEX completed: local P/Q/proof subrelations, PostgreSQL accounting, public legacy SPL target evidence và typed native testnet venue reads là capabilities riêng. Không gọi migrated three-business-ACK target là owner-ZK/private native swap. Samechain proposed; strict-private market Blocked; complete native/manual lifecycle missing. Financial enablement theo canonical gates, không theo ngày launch hoặc browser demo. Nguồn: PRODUCT §§4–7, ARCHITECTURE §§3, 7.3, status.

### 5.2 Failure-state contract chung

Hiển thị state text + impact + next safe action; color/icon không là thông tin duy nhất. Money-relevant pending banner nằm trên summary, không buried trong toast. Không bỏ Unknown vào generic `Failed`.

| State/observation | Hiển thị | Hành vi bắt buộc |
|---|---|---|
| **Loading** | Skeleton labels/rows nhưng không amounts, spinner với stage và accessible status | Không dùng `0` hay stale amount như fresh data; initial action blocked. Progress % chỉ khi có work measure thật. |
| **Empty** | Nêu scope: local records trống, chưa quote, hoặc authentic no candidate | Chỉ gọi “No counterparty” khi authentic discovery đủ scope; current missing integration là unavailable, không market empty. |
| **Unavailable / no backend** | Service nào không có, missing coverage/as-of, existing local records retained | Không retry-loop gửi tiền. New discovery unavailable; recovery inspect/manual path nếu actual tool có; missing native/manual capability nói rõ, không link tưởng đã đủ. |
| **Stale quote/observation** | Last as-of, cause, what is stale | Block new consent dựa stale terms/evidence; fetch/review new quote hoặc sync. Không revoke already armed/funded right; unrelated accepted-root appends không làm valid fully authorized samechain packet stale. Native anchor/lifetime phải kiểm riêng. |
| **Owner rejected/canceled signing** | `Rejected by owner — không có new signature/release`; prior signed/armed state vẫn hiện | Trước release không send. Nếu release/send có thể đã xảy ra, reconcile Unknown, không khẳng định no effect. Native already armed không tự refund. |
| **Protocol/venue rejected** | Exact error class, affected action, whether effects proven absent | Authentic atomic reject/revert giữ right; if incomplete receipt/outcome then Unknown. Không suppress exception, silent recipient/fee/asset fallback hoặc mark consumed as free. |
| **Submitted / Unknown** | Exact operation reference, knowledge missing, retained reservations | Giữ original authorized bytes/nonce/input/change/hold fences. Read-only reconcile source/target/venue; no blind re-sign, different economic intent or inventory release từ absent tx. |
| **EvidencePending** | Missing invalid/unsupported witness/history/classifier/artifact, scope và original rights | Không infer nonpayment/payout/refund; no timer. Safe pending không đáp ứng independently terminal all-hostile completion acceptance. |
| **Reorg / unfinalized** | Network/policy affected, last authentic view; `Outcome needs revalidation` | Nonfinal observation không terminal; fence new sends/reuse, rebuild authentic view. Durable authorization/consumption record không xóa; backup/cache không resurrect spent right. Vi phạm finality assumption được báo impairment, không reset về Draft. |
| **Failed transfer / OOG / recipient reject** | Failed actual effect, original right state, fee effect nếu known | Proof/consume/transfers phải rollback theo route; no Paid/Refunded. Retain fixed entitlement, exact terms/witness; retry chỉ sau reconciliation, không silent redirect/opposite allocation. |
| **Retryable** | Reason + exact permitted retry, original terms/as-of/simulation | `Reconcile` trước `Retry exact action`; still authorize signing/send scope. Không auto fee bump/branch/anchor/input/output/expiry hoặc nonce replacement. Valid same-effect proof renewal vẫn cần real capability. |
| **Terminal under selected policy** | Actual effects + accepted source predicate khi native, finality/provenance, recipient/raw units | Tx hash, receipt, credit, proof registration, ACK hoặc message `Delivered` không đủ. No terminal transition nếu one allocation/required return chưa thực hiện. |

Routine data refresh không steal focus hoặc đóng review. Nếu current terms/capability mất validity lúc modal mở, disable CTA và announce specific change; giữ original context cho inspection, không rewrite review thành offer khác. Network reconnect/restart không tự replay money action.

## 6. Native lifecycle — state, actor, action và evidence

Nguồn hành vi: [ARCHITECTURE §7.1–7.2](../../ziquid-dex/docs/ARCHITECTURE.md#settlement), [SERVER-INDEPENDENCE §5](../../ziquid-dex/docs/SERVER-INDEPENDENCE.md#5-native-zec-outbound--original-financial-contract-giữ-nguyên), [SDK §2](../../ziquid-dex/docs/modules/client-sdk.md#2-ordering-invariants-và-logical-state). Đây là **required/proposed interface mapping**, không status runtime đã implement.

`U`: owner bán source ZEC; `S`: solver cấp destination asset. Initial feasibility một genuine U-owned available Ironwood note, không nhiều real inputs/top-up hoặc shared note. `P`: exact source payment chỉ executable khi U release đúng authorization; `Q`: complete locally proved/signed self-spend cùng real input, mọi nonzero outputs U-owned, agreed source fee/lifetime. `T`: actual spend khác hoặc variant cần full supported classifier, không chỉ so txid.

```text
Draft -> RecoveryPrepared -> DestinationArmed -> SourceResolutionPending
             |                                      |       |       |
             v                                      v       v       v
   ReservationCancelled                         PayoutReady | EvidencePending
   (local, chưa arm)                               |    RefundReady |
                                                   v       |       |
                                               Completed   v       |
                                                       Refunded    |
                           valid evidence -> SourceResolutionPending <+
PayoutReady/RefundReady -- verified failed attempt --> giữ nguyên ready right
```

| Architecture state / UI label | Actor và action có thể đề nghị | Gate/evidence và nghĩa tài chính |
|---|---|---|
| **Draft** / `Chuẩn bị terms` | U inspect exact quote/context, giữ note/P authorization; S đề nghị quote thật; reject/discard local draft | Không funding/entitlement/paid. Recovery prerequisites và early-Q risks phải thấy trước authorization. |
| **RecoveryPrepared** / `Recovery đã kiểm trước funding` | U restore kit, giữ independent private payout witness và **unsigned/nonexecutable P**; prove/sign Q local; S inspect complete agreed Q và no-FVK ownership/admission certificate; có thể đề nghị exact prefund nếu gates đủ | All real/dummy actions, signatures/proof/binding/ciphertext/self-output/fee/source context phải valid; save-only primitive chưa đủ financial state. Giao Q cho S cấp quyền early broadcast/fee grief, không U FVK/spend key. Independent hostile/excess capabilities hiện thiếu → route vẫn blocked. |
| **ReservationCancelled** / `Đã hủy reservation local trước arm` | S hủy local unfunded reservation khi authentic no-arm/no-live-funding intent được xác nhận; U giữ own note | Không onchain refund; không free inventory từ timeout/Unknown. Chỉ branch trước irreversible destination arm, không native cancel button sau đó. |
| **DestinationArmed** / `Đích đã prefund và không thể hủy tùy ý` | S đã prefund fixed obligation, chỉ có proven eventual refund right; U independently inspect deployment/code/verifier/context/asset/amount/U-S beneficiaries/source lifetime/destination finality trước release P | Exact irrevocable arm, không quote/journal/event alone. U dừng ký/đóng UI thì P chưa release nhưng funds armed không tự trả S; cần real source resolution. Không solver withdraw/cancel/admin/time refund. |
| **SourceResolutionPending** / `Đang xác định source outcome` | U release/broadcast exact checked P sau gate; S có thể broadcast agreed complete Q theo actual lifetime; either eligible actor independently acquire history/prove/reconcile | Persist exact release/sign/send và bytes trước operation; Unknown retains obligations. Q chỉ executable khi agreed input chưa consumed và anchor/branch/expiry/fee valid; không tự reanchor/reproof. Missing response, `T != P` hoặc changed authorizing bytes không nonpayment. |
| **PayoutReady** / `Đủ evidence để thực hiện phân bổ` | U có independent witness tự prove/submit; arbitrary exact authorized sender/relayer có thể gửi target allocation; S cooperation không gate cho eligible U payout | Cùng accepted valid finalized source history/context, authenticated supported **net** `C` và current unconsumed right; show exact U/S shares. Đây là entitlement, chưa actual paid. Supported partial vẫn ready cho cả fixed shares atomically. |
| **RefundReady** / `Đủ predicate để refund destination cho S` | S independently prove/submit fixed refund; inspect actual source return nếu Q branch | Authenticated same-real-input conflict **và DoesNotPayObligation**, không generic expiry. Observed gross/zero/missing history không đủ. Refund destination là S right; source U recovery chỉ theo proved actual effect. |
| **EvidencePending** / `Thiếu evidence/capability` | Inspect named missing prerequisite; retain original artifacts/witness/obligation; sync/prove lại only permitted statement khi real evidence/capability có | Unknown ownership/input completeness/debits, unsupported T, invalid lifetime/history, missing artifacts, `C>A` missing actual source-return proof/capability: no allocation/clamp/gift/full refund. Pending có thể vô hạn nhưng không được coi native delivered; missing hostile-terminal capability blocks enablement **trước arm**. |
| **Completed** / `Actual phân bổ đã hoàn tất` | Inspect/export actual final effects; no repeat consumption | Authentic supported source predicate và đúng actual atomic destination allocations/transfers theo original context/finality; partial hiển thị both U/S shares. No terminal từ proof/credit/receipt/hash alone. |
| **Refunded** / `Actual destination refund cho S đã hoàn tất` | Inspect actual S receipt và proved nonpayment/source effects | Correct actual S destination refund + accepted conflict/nonpayment; Q path verify U self-return trừ agreed source fee. Arbitrary T không imply U lấy lại principal; không label full user refund. |

### 6.1 `PayoutReady` khác `AllocationReady`

**Architecture state vocabulary dùng `PayoutReady`.** SDK document mô tả conceptual step **`AllocationReady`**: full accepted classification đã cho phép tính fixed shares. Chưa có implemented SDK API/state enum để map; hai tên **không được claim là runtime aliases**. UI dùng Architecture state trên Activity/detail; nếu developer inspect mô tả SDK thì ghi `SDK conceptual allocation step: AllocationReady — proposed`, kèm evidence scope và link nguồn. Không chuyển terminal hoặc cấp permission chỉ bằng string/status từ client SDK.

### 6.2 Allocation, cancellation và ETA không thể bị copywriting đổi

- Với `A,D>0` và authenticated supported `0<=C<=A`, hiển thị raw-unit calculation **`U = floor(D*C/A)`**, **`S = D-U`**; dust thuộc fixed S, không hidden fee. `C` là net consideration có authenticated complete inputs/ownership/debit relation; incoming gross output không là `C`. Unknown relation → pending, không pay hoặc inferred refund. Proven C0 cần real nonpaying conflict; full `C=A` trả U D; `0<C<A` là proportional completion, không đủ full quoted receive.
- Selected target mode là verify/consume/**actual direct native-asset transfers tới fixed U/S atomically**; một required transfer fails → tất cả attempted consumption/state/effects rollback. No withdrawal-credit replacement hoặc recipient redirect. Nếu một hypothetical future credit tồn tại thì vẫn not Paid trước actual withdrawal, không enable parallel settlement mode ở đây.
- `C>A` cần actual independently usable **S-authorized source excess return** và evidence trước terminal; Q không ký/rút được funds đã tới S. Không clamp C về A, gift excess hoặc full destination refund để che capability thiếu.
- Earlier valid bound P/T không bị loại chỉ vì before funding; policy phải classify đầy đủ eligible history khi obligation đã arm. U tự gửi P trước funding là own risk, không ép S fund. Same v6 effects/new auth/anchor vẫn không mặc định nonpayment; paying P′ cũng cần real classifier.
- Consensus expiry chặn invalid late source mining; **không** làm valid included payment mất payout/claim/retry. Quote expiry, source height, destination time và recovery ETA là concepts riêng; không cộng/so khác clocks thành refund deadline.
- S có thể broadcast Q sớm, cả trước prefund; verified U-owned outputs ngăn source principal diversion nhưng vẫn cancellation/fee/option grief. Không promised delayed Q/payment window. Stale source anchor/branch/expired packet cần real new-proof capability/authorization hợp lệ, không automatic reproof hoặc gửi FVK cho S.
- RecoveryEstimate dùng `Unmeasured / Estimated / EvidencePending`, stage/reason/as-of/provenance/assumptions. No fixed completion time, no retry countdown quyền tiền. Authorization independence không bảo đảm liquidity, data/prover availability, inclusion, finality, issuer cooperation hay recipient acceptance.

## 7. Wireframes, responsive sizes và scroll priority

Wireframes biểu diễn **layout/labels**, không fake live data. `<exact asset>`, `<raw amount>`, `<state>` là tên vị trí trong spec, không placeholder rows để publish. Mọi proposed screen khi chưa có authentic data dùng states §5; không seed mock balances/price history vào UI. Typography, contrast và visual component details theo style.md.
Landing figure và proposed storyboard §2.1 khác wireframes workspace dưới đây: chúng là explanatory content, không financial inputs/states/capability UI. Bản current giữ Offer/Agreement/Settlement; native 2.5D replacement chưa được duyệt.


### 7.1 Landing desktop / mobile

```text
DESKTOP — painting-led hero; neutral contemporary content
+------------------------------------------------------------------------------------+
| Z2Z coin    Exchange    Questions                  Theme           View source       |
| A peer-to-peer exchange,                Approved Bellotto painting remains visible   |
| built around Zcash.                     beyond a localized text-safe treatment       |
| A DEX in development. Agree on asset, amount and price before authorizing a trade.    |
| [View source] [The idea]                 In development. Trading is not available.   |
+------------------------------------------------------------------------------------+
| Agree on the trade. Know what you authorize. | Source / Exact terms / Destination   |
| Exact asset / amount / price first          | How a trade would work · Not live    |
| Shielded source intention; destination may be public; matching unresolved           |
| Solana: native adapter candidate / NEAR: research / Hyperliquid: testnet reads       |
+------------------------------------------------------------------------------------+
| Questions: Can I trade today? / What is private? / Where to follow development?     |
+------------------------------------------------------------------------------------+
|                              Z2Z  (own oversized typography, dark solid ending)    |
| Exchange    Questions    GitHub                                      Art credits v |
+------------------------------------------------------------------------------------+

MOBILE — same four beats, painting backdrop retained
+--------------------------------------+
| Z2Z coin             Theme [Menu]     |
| Product headline over painting       |
| Source / The idea / visible prelaunch |
| Exact-terms thesis + source/destination |
| Privacy caveat + Ideal City panorama |
| Three questions (native disclosures) |
| Large own Z2Z / links / credits       |
+--------------------------------------+
```

**Current implemented figure within the same product beat:**

```text
How a trade would work                              In development · Not live
One illustrative full-payment branch
Source: Shielded Zcash    Exact terms: Asset / Amount / Price    Destination: Local EVM
Trader / Solver          Conditional recovery data             Solver / Trader
source-local Funds       Agreed by trader + solver              committed native Funds
                    Evidence, not funds → verify before destination payout
1 Agree on terms → 2 Fund destination first → 3 Check, then pay → 4 Verify, then settle
Full-payment path only; other outcomes pending; recovery conditional/not available
Ecosystem context · Not live settlement routes
Network research: Solana candidate / NEAR research   External venue: Hyperliquid testnet
```

Mobile recompose theo stable source/terms/destination + caption order, logo groups có role/status và không public support wall. Composition details §2.1.2–2.1.4; exact current breakpoints/gutters thuộc style §5, không workspace768/1280 grid dưới đây.


### 7.2 Trading desktop — P2P

```text
DESKTOP ≥1280 — Navy, ba cột; one shared exact-action context
+------------------------------------------------------------------------------------------------------+
| Z2Z  P2P*  RFQ  External spot  Activity  Recovery          Development/Read-only  Network  Wallet Locale|
+------------------------------------------------------------------------------------------------------+
| ROUTE READINESS / named blocker / as-of. Không route đang chạy, không generic privacy badge.           |
+--------------------------+--------------------------------------------+------------------------------+
| [My orders] [Proposals]   | ORDER BUILDER / selected EXACT FILL         | OWNER CONSENT / CAPABILITY   |
| Exact asset pair filter  | Mechanism: P2P  Settlement: <construction> | Scope: <owner/domain>        |
| Scope + provenance       | Sell <exact asset / network / ID>          | □ Original context checked   |
|--------------------------| Quantity <units / raw precision>           | □ My output backup restored  |
| Side | Qty | Limit       | Buy <exact asset / network / ID>           | □ Decrypt/commitment checked |
| Consumed | Remainder     | Limit <quote units per base unit>          | □ My exact authorization     |
| State | Last observed    | Partial terms / current generation         | □ Other owner's auth         |
|--------------------------| Fees / payer / max debit / receive bounds  | □ Current backing & expiry   |
| Authentic owner rows OR  | Fixed beneficiaries / output details       | □ Evidence & simulation      |
| Empty/unavailable panel  | Proceeds + successor remainder / digest    |------------------------------|
| No global private depth  | Privacy / custody / finality limits        | Next permitted action/reason |
| No fake liquidity chart  | Recovery restored / pinned artifact status | [Review exact action]        |
|--------------------------| [Review order] OR [Review exact fill]      | Not Paid / no armed cancel   |
| Local selection summary  | Cancel = remaining right only, if allowed  | [Inspect Recovery]           |
+--------------------------+--------------------------------------------+------------------------------+
| Status evidence: source and target separate; Unknown retains reservation. Detail -> Activity/Recovery |
+------------------------------------------------------------------------------------------------------+
```

No “price chart mặc định” để lấp center. Nếu future authentic chart được chọn riêng, phải ghi actual venue/source/window/coverage; không suy ra private-market depth/optimal execution. Chart không prerequisite cho primary order/fill tasks.

### 7.3 RFQ và external desktop

```text
RFQ — trong DEX
+---------------------------+-----------------------------------------+------------------------------+
| REQUEST                   | AUTHENTIC QUOTES / selected terms       | READINESS / RECOVERY         |
| Source exact asset/domain | Provider/solver scope | as-of | expiry  | Selected route supported?    |
| Amount/raw units          | Debit / destination / fees / recipient | Kit restored / Q / witness   |
| Destination exact asset   | Prefund requirement != quote backing   | Code/context/finality gates  |
| Constraints / recipient   | Empty/stale/unavailable if applicable   | Armed? P release permitted?  |
| [Review request]          | [Review selected exact quote]           | No countdown refund          |
+---------------------------+-----------------------------------------+------------------------------+

EXTERNAL HYPERCORE — persistent independent venue banner, not P2P residual
+---------------------------------------------------------------------------------------------------+
| External · HyperCore spot · Public venue   | exact Core network/account/market/token IDs             |
+---------------------------+-----------------------------------------+-------------------------------+
| Market/units/coverage     | Own external orders/fills if authentic | Exact action / user signer    |
| Not HyperEVM balance      | Open / Partial / Unknown / final fills | Quantity / limit / fee cap    |
| Read integration status   | Venue provenance/as-of/history limits  | Separate cancel/transfer scope|
| No perps/leverage tabs    | No fake public orders/current balance  | Unsafe delegation -> blocked  |
+---------------------------+-----------------------------------------+-------------------------------+
```

### 7.4 Activity/detail và Recovery desktop

```text
ACTIVITY / SELECTED DETAIL
+------------------------------+--------------------------------------------------------------------+
| Owner-local scope / filters   | <local reference>  Protocol state / knowledge / finality           |
| Mechanism/venue              | Unknown/Reorg/EvidencePending banner above financial summary       |
| Asset/domain | Amount/unit   | Immutable exact context / fixed recipients / code / raw units     |
| State | As-of                | Authorized vs actual money / allocation / remaining right         |
| Authentic records OR empty   | Source timeline  | Target timeline  | Venue timeline if selected   |
| No global feed               | Evidence/coverage/as-of -> capability -> exact next action          |
|                              | [Reconcile] [Inspect Recovery] [Review permitted action]           |
+------------------------------+--------------------------------------------------------------------+

RECOVERY
+------------------------------+--------------------------------------------------------------------+
| LOCAL RECOVERY RECORDS       | 1 Import -> 2 Restore/inspect -> 3 Independent sync -> 4 Rights     |
| Imported bundle descriptor   | Exact deployment/assets/rules / pinned actual artifact bytes       |
| Original version / scope     | Private kit encrypted/local / restore evidence / missing items     |
| No key/locator in URL        | Source/target provenance | resources/gas | outcome/reorg fences    |
| Rights retained / Unknown    | Permitted-right table; samechain vs native vs custody/venue        |
| [Import encrypted file]      | 5 Prepare/prove -> 6 Build/simulate -> 7 Sign/send -> 8 Reconcile    |
| [Export encrypted kit]       | Unavailable real operation -> named blocker, not fake CLI command  |
| [Local inspect]              | ETA: Unmeasured/EvidencePending; no timer-created refund            |
+------------------------------+--------------------------------------------------------------------+
```

### 7.5 Trade review desktop / mobile

```text
DESKTOP — dialog max width 640px; content scroll, action footer ngoài scroll
+--------------------------------------------------------------------------------+
| Review <exact action>                         Venue / Network       [Close]    |
| Proposed/blocked/Unknown banner, if applicable                                  |
| Pay exact asset/domain/ID -> Receive exact asset/domain/ID                      |
| Max debit / fixed receive or authenticated U/S allocation / raw units          |
| Fixed recipients + change/remainder / code/verifier/context/common digest       |
| Fees each asset/recipient/cap | signer/fee payer | actual simulation result       |
| Privacy/custody/finality | early-Q limits | permitted cancel/retry               |
| Actual kit restored / artifact bytes / capability checklist / ETA status       |
+--------------------------------------------------------------------------------+
| [Back — no new authorization]      [Approve OR Sign & submit exact action]      |
+--------------------------------------------------------------------------------+

MOBILE — full-height dialog, heading/banner/top facts remain in DOM reading order
+--------------------------------------+
| Review <action>              [Close] |
| Venue/network + readiness            |
| PAY / exact descriptor / raw units   |
| RECEIVE / exact descriptor / bounds  |
| Fixed recipients / all fees          |
| Signer/payer / context/code/digest    |
| Risks -> Recovery -> Capability      |
| Simulation / evidence / as-of        |
| ... single content scroll ...        |
+--------------------------------------+
| [Back] [Exact action, if permitted]   |
+--------------------------------------+
```

Footer không mặc định ready khi disclosure ở dưới fold. Essential facts/context/check results phải load đầy đủ, available keyboard; không ép scroll-bottom checkbox như thay thế validation/consent.

### 7.6 Mobile app — task trước, list sau

```text
P2P — <768                                ACTIVITY DETAIL / RECOVERY — <768
+--------------------------------------+  +--------------------------------------+
| Z2Z  Read-only          [More/Locale] |  | [Back] <record or Recovery>          |
| Exact domain / readiness blocker     |  | State + Unknown/Reorg banner         |
| [Build order] [My orders] [Proposals]|  | Exact context / fixed recipients     |
| Mechanism P2P / settlement descriptor|  | Authorized vs actual money           |
| Sell exact asset + quantity         |  | Source/target/venue separate timeline |
| Buy exact asset + limit units       |  | Evidence / as-of / finality           |
| Partial / proceeds / remainder      |  | Recovery restore -> independent sync |
| Fees / max debit / receive bounds   |  | Permitted right -> prepare/prove      |
| Recovery check / capability summary |  | Build/simulate -> user sign/send      |
| Owner consent detail (not omitted)  |  | Missing operation -> blocker         |
| Selected proposal/list via local tab|  | ETA Unmeasured + actual dependencies  |
+--------------------------------------+  +--------------------------------------+
| [Review permitted exact action]      |  | [Reconcile / Review permitted action]|
+--------------------------------------+  +--------------------------------------+
| P2P    RFQ    Activity    Recovery   |  | P2P    RFQ    Activity    Recovery    |
+--------------------------------------+  +--------------------------------------+
RFQ mobile: request -> quotes -> selected terms -> readiness/recovery -> review.
External mobile: persistent external banner -> exact market/account -> own actual
orders/fills -> separate exact action review; available via labeled More link.
```

Các local view tabs không hide important pending banner hoặc lost authorization; switching tab không consent. Không duplicate mobile form để desktop data/state lệch nhau. Selected proposal mở builder/consent task, no swipe-only controls.

### 7.7 Sizes và scrolling

| Viewport CSS px | Bố cục / kích thước proposed |
|---|---|
| `<768` | Một cột, gutter 16px, support 320px không page-level horizontal scroll. Mobile header + four-link bottom nav; explicit `More → External spot` và locale. CTA bar phía trên bottom nav, safe-area aware; padding content tránh che cuối form. Khi virtual keyboard/zoom làm viewport thấp, chuyển action bar thành in-flow, không che fields/errors. |
| `768–1279` | Gutter 16–24px; list khoảng 256px + task flexible. Consent panel **sau builder trong task column**, không một drawer hidden; viewport thấp chuyển một scroll toàn page. Nav wrap/disclosure có labels, không shrink money typography. |
| `1280–1535` | Gutter 24px, gap 16px; list khoảng 280px, center flexible `min-width: 0` đủ khoảng 400px, consent khoảng 320px. Header khoảng 64px; dense table rows tối thiểu 44px, form/control heights 44px, body/money ≥14px. |
| `≥1536` | Gutter 32px/gap 20px; list khoảng 320px, consent khoảng 360px, center flexible; workspace max khoảng 1800px. Extra width tăng visibility, không thêm speculative panels. |

Landing uses normal page scroll, static responsive paintings/in-flow captions; only the Agreement landscape has automatic-once4800ms emphasis under its eligibility/reduced-motion contract, no animated gallery. App desktop header + persistent status và tối đa hai scroll regions: order/activity list và task; consent cùng task reading context. Sticky summary không che descriptors/errors; height<720px/zoom ưu tiên page scroll. Review một content scroll + action footer. Table horizontal scroll chỉ trong labeled comparison region, không rút money thành icons.

**Scroll/read priority:** critical pending/reorg/blocker → action/venue/exact assets → amounts/recipients/fees → terms/remainder → capability/recovery → evidence/detail/list. Critical financial facts không chỉ ở hover tooltip; auxiliary evidence có disclosure nhưng blockers luôn visible. Focus/validation đưa user đến field lỗi mà không cuộn mất summary; keyboard tab qua controls không kẹt ở panel.

## 8. Keyboard, accessibility, localization và precision

### 8.1 Interaction/accessibility contract

**Scope:** current root/Home theme/menu/FAQ/footer + landing-only illustration leaf theo[§2.1.1](#landing-components),implemented playback[§2.1.4](#illustration-interface)/[style](style.md#illustration-motion). No modal trap/financial live-region updates for nonmodal disclosures or art. A1–A3 resolved within audit proof scope, never exceptions to ongoing accessibility targets; all-state/AT matrix remains unqualified.


- Semantic landmarks/headings, real links cho navigation, buttons cho actions; skip links đến task và list. List/table có caption/scope, headers và sort state; row selection không chỉ on-click area không focusable. View tabs có selected state và keyboard semantics; disclosures ghi rõ nội dung.
- Full keyboard flow: navigation → exact selectors → fields → checklist/detail → review → explicit signer action. Native browser focus order theo DOM/read priority; không global single-key shortcut gửi tiền, không Enter ở amount auto-sign, không double-submit từ repeat key. `Tab`/`Shift+Tab`, arrow navigation trong actual tab/selector widgets và `Space`/`Enter` chỉ kích hoạt focused safe control.
- Review dialog có accessible name, focus trap; initial focus heading/first inspectable item, **không** primary signing CTA; return focus khi close. Escape/close dừng dialog/new signature, không biểu thị onchain cancel. Nếu approval/release đang ở wallet, app nói waiting và kiểm authentic response/reconcile sau; không lock focus vô hạn hoặc gọi close là undo.
- Persistent visible focus ring đủ contrast trên Paper/Navy; controls/touch targets tối thiểu 44×44px. Text/money ≥14px, line-height UI khoảng 1.4–1.5; heading scale theo style.md. Contrast mục tiêu WCAG 2.2 AA: text thường ≥4.5:1, large text ≥3:1, meaningful controls/focus/boundaries ≥3:1. Semantic text labels + icons/borders, không red/green-only. Không low-contrast Gold body text trên Paper hay Muted/Success/Danger text trên Navy.
- `Loading`/pending stages qua polite status region; error mới cản money action announce rõ nhưng không lặp theo mỗi refresh. Errors inline liên kết field, summary focusable sau attempt. Disabled financial action có visible reason và details reachable, không tooltip trên disabled element làm nơi duy nhất giải thích.
- 200% zoom và reflow tương đương 320 CSS px phải giữ controls/exact descriptors/fees; text wrapping không làm đổi amounts. Money string cần min-width và text selection, full units không bị truncate như ID. Horizontal data region có keyboard scroll/label; focus không bị sticky header/footer che.
- Reduced motion tắt nonessential transition; skeleton không flashing/pulsing mãi, không carousel tự chạy. Art meaningful có alt ngắn theo artwork register, caption/provenance giữ riêng; decorative crop dùng empty alt, không duplicate caption cho screen reader. Numbers/charts không nằm trên art; nếu chart authentic sau này thì có text table tương đương và source/coverage, không color-only.

### 8.2 Locale và copy

Spec dùng tiếng Việt; English UI symbols/state keys (`P2P`, `RFQ`, `PayoutReady`, `Unknown`) giữ khi hữu ích. Proposed Vietnamese UI cần message strings hoàn chỉnh cho labels/errors/risks/review; **current** [`project.inlang/settings.json`](../project.inlang/settings.json) chỉ cấu hình `en`, `de`, chưa `vi`. Không claim Vietnamese localization đã ship, không thêm dịch/route code trong docs này.

Locale switch đổi cách trình bày, không đổi raw amount/asset/recipient/terms/digest, không drop pending operations hoặc trigger review approval. Dates hiển thị timezone rõ; as-of/expiry cho xem UTC và source-specific height nếu liên quan, không pha chain clocks. Locale text dài phải wrap; amount, fee, ID theo tabular mono, ticker/contract/chain/state machine identifiers không dịch. Copy success chỉ cho actual verified effect, dùng `Submitted`, `Awaiting evidence` trước đó; tránh `Safe`, `Trustless`, `Private`, `Instant`, `Guaranteed` như lời hứa chung.

### 8.3 Decimal/raw-unit contract

- Source ZEC dùng zatoshi, 8 decimals; destination/token decimals lấy từ **exact qualified descriptor**, không đoán từ ticker hay hard-code mọi EVM asset 18 decimals. Prices có unit denominator `quote asset / 1 base asset`, side/rounding/lot/tick constraints theo selected route/venue.
- Financial inputs là decimal text, không browser number spinner/scientific notation. Chọn **canonical dấu chấm `.` trong inputs**, helper “Nhập số thập phân bằng dấu chấm, không dấu phân cách nghìn”; `inputmode` chỉ hỗ trợ keyboard, không thay parser. Reject dấu phẩy/grouping/mixed separators, exponent, negative/NaN/Infinity, excess decimals, overflow hoặc size/tick không hợp lệ trước review. Locale formatting chỉ ở read-only display; không reinterpret `1,000` thành 1 hay 1000.
- Convert exact decimal string ↔ integer raw units không qua binary floating point; arithmetic/comparison/allocation theo canonical native/venue policy, không một JS reimplementation của financial rules. Never round user's signed debit/limit để làm input fit. Validation nói precision/tick/minimum nào không đạt, giữ text cho sửa.
- Tables right-align money và tabular monospace; localized separators có explicit asset units. Có thể display shortened **secondary** overview nếu không gây false equality, phải đánh dấu approximate và giữ full exact amount on inspect. Review/detail/capability uses full precision + raw units; small nonzero không hiện `0`. Không dùng `$` fiat conversion nếu chưa actual source/valuation/provenance, không estimate tổng portfolio.
- Fixed fees/allocation dust/minimum receive theo raw units hiển thị trước ký. Native `floor(D*C/A)` không rounding up cho U; S remainder/dust visible, không “slippage tolerance” thay fixed approved economics. P2P partial và external venue lot/fee rounding phải đúng exact scope; current undefined rules block action, không default 0.5%/5 bps.
- `Copy amount` dùng ungrouped canonical decimal hoặc labeled raw integer; `Copy ID` dùng full bytes/string, không truncated display. Clipboard copy explicit, không auto-copy signed/private artifacts hoặc keys; không transliterate/normalize recipient vào địa chỉ khác.

## 9. Privacy-sensitive persistence và telemetry

Nguồn: SERVER-INDEPENDENCE §3; ARCHITECTURE §§4, 8; SDK §§3, 5–6. Không chọn thêm database/key manager/binding ở interface spec này.

- Owner wallet/native consumer giữ signing/viewing/recovery capabilities; browser UI không thành sole secret/artifact store. Private owner bundle encrypted dưới user-controlled capability, disjoint U/S/market scopes; restore actual bytes bắt buộc trước irreversible actions. Không server sole backup, no U spending key/FVK/master key hoặc both-owner witnesses tới matcher, solver, prover, relayer.
- WebStorage chỉ cho preference không nhạy cảm như locale và nonsensitive view. **Không** plaintext note/openings/P/Q/PCZT/witness/quotes/source mapping/signed authorization/keys vào `localStorage`, `sessionStorage`, hydration HTML, cache/service-worker payload hoặc URL. Browser/native encrypted persistence integration còn phải reviewed; không giả browser crypto là secure enclave hay zeroization được bảo đảm. Lock/reload không được xóa durable native pending/recovery records.
- Local private draft và exact pending operations cần original owner-controlled durable record theo canonical consumer; secret values không auto-resubmit sau reconnect/restart, restore phải reconcile current state. UI preference/cache reset không giải phóng backing, invalidate current signed rights hoặc xóa Unknown fences. Không delete witness/artifacts ở TTL/expiry/job ACK/terminal-looking cached receipt.
- No third-party analytics, session replay, ad pixels hoặc screen-content capture trên trading/review/Activity/Recovery. Keys, seed, FVK/IVK, note openings, PCZT/P/Q, signing payload và private source↔quote/order/claimant mappings **không được gửi vào analytics/logs/errors/queues/URLs**. Không hash secret/source locator để giả anonymize; mapping/job handles/IP/timing vẫn có correlation risk.
- Public discovery/status phải chỉ có field được permitted privacy construction; không publish private book/counterparty map để debug. Public raw chain history khác với app-selected private mapping. No across-app shared key/viewing daemon hoặc common private store vì dùng chung source library.
- Diagnostics xuất **explicit**, owner inspect trước, default generic code/state/public version/allowed provenance và redacted identifiers; không automatic upload raw wallet/chain-selected signing data. Error copy không in private argument/env/session tokens. Secret file/key không yêu cầu người dùng đưa lên support; public provenance/artifact hashes không bằng private witness.
- Art load local, external provenance links explicit; no remote image request/embedded tracker trong money tasks. Recovery company-off kit có actual cached tool/artifact copies và independent access, không online font/analytics/login dependency để mở rights; đây là acceptance goal chưa observed runtime.

## 10. Acceptance scenarios — required, chưa được exercise

Đây là tiêu chí cho future implementation/release review, **không test results**. UI giải thích đúng không thay actual protocol qualification/drill. Protocol facts do canonical sources/real validator cấp; consumer phải phản ánh chúng. Diagram/modal/state prototype không chứng minh route đủ điều kiện. Công việc docs này không chạy build, lint, tests, formatter, install hoặc financial actions.
Current landing/A1–A3 retained bounded proof và A4 overlap resolution belong to [audit](design-audit.md); this financial acceptance table is not executed trading evidence. Illustration preserves prefund-before-source-authorization, complete evidence≠funds/no burn-mint, authentic role-qualified context and complete still/no-JS/reduced/mobile meaning with4800ms automatic-once/no-control cleanup. Bounded art/layout proof does not close financial gates, certify global accessibility/CWV/trademark rights or deploy.


### 10.1 Product, exact context và consent

| ID / scenario | Kết quả bắt buộc | Trace |
|---|---|---|
| D01 — current starter / chưa integration | Mọi route trong doc label proposed; no live balances/orders/chart/TVL/sign-success. CTA docs/design; no money prompt. P2P central vẫn thấy, native priority không được quảng cáo completed DEX. | `src/routes/index.tsx`; PRODUCT §§1, 7; status “Actual implemented behavior”. |
| D02 — exact asset giống ticker/address shape | Wrong network/pool/Core-EVM domain/contract/mint/program/decimals/code/context/recipient/fee bị reject trước ký; full descriptor và raw units kiểm được. Không route native ZEC thành wrapped token hoặc ZEC/USDC listing từ ticker. | PRODUCT §6; ARCHITECTURE §§1.1, 3, 7.2; SDK §§1, 7. |
| D03 — chưa có đối ứng | No fill/payment, explain liquidity riêng với authorization; owner giữ/sửa intent hoặc actual unused right theo predicate. Không fake depth/maker activity/auto RFQ-external/provider routing. Development unavailable không bị gọi market empty. | PRODUCT §§1–3; SERVER-INDEPENDENCE §1; SDK §1. |
| D04 — proposed partial fill/remainder | Exact known fill/output backup/decrypt/commitment và cả hai owners' common-digest consents trước consumption. Actual fill tạo disjoint recoverable proceeds/successor, original consumed một lần; next remainder fill cần fresh exact consent, không reset capacity hoặc offline auto-fill. | ARCHITECTURE §§5.2–5.3; SERVER-INDEPENDENCE §§3.2, 4; SDK §2. |
| D05 — stale RFQ trước acceptance | New consent blocked; fresh authentic quote/context cần review mới. No repricing/signer continuation theo old review. Existing arm/valid included payment vẫn giữ quyền, quote expiry không refund/revoke payout. | ARCHITECTURE §§7.2, 7.3; SDK §§2, 4–5. |
| D06 — owner rejects signature / đóng app | No new signed release/send khi biết chắc chưa ký; prior authorized/Unknown/armed operation retained/reconciled. Local pre-arm `ReservationCancelled` không chain refund; post-arm no generic Cancel/timeout refund. | ARCHITECTURE §7.2; SERVER-INDEPENDENCE §5; SDK §§2, 5. |
| D07 — unsafe external route | P2P/RFQ consent không authorize HyperCore/provider/public-Zcash fallback. Broad delegated API permission unqualified bị block, không gọi spot-only. Explicit venue/action/account/nonce/fees review và per-action user signing; Core enqueue/EVM success không filled. | ARCHITECTURE §6.1; SERVER-INDEPENDENCE §6; SDK §§1, 5, 7. |
| D08 — external partial/fill-cancel race | Authentic actual external fill/cancel/nonce/coverage quyết định residual, reservations giữ lúc Unknown. Chỉ actual remaining amount có thể cancel; no automatic capital reuse hoặc chuyển về P2P. | ARCHITECTURE §6.1; SDK §§3, 5, 7. |

### 10.2 Recovery, offline parties và race

| ID / scenario | Kết quả bắt buộc | Trace |
|---|---|---|
| D09 — company off + clean restored authorized right | Với qualifying route, remove company UI/API/indexer/prover/CDN/relayer/signers; clean user process restore encrypted kit và **actual pinned artifacts**, independently sync authentic state, inspect/prove/build/simulate/sign/direct-submit existing allowed right, reconcile actual effects. No hidden login/DNS/license/fresh company signature. Hiện full native manual driver thiếu → blocker, không fake runnable tool. | SERVER-INDEPENDENCE §§3, 7–8; ARCHITECTURE §4.2; SDK §§6–7; status. |
| D10 — output missing/wrong key/commitment | Owner local output checks/backup/restore không đủ thì withhold new fill authorization, dù ciphertext hash có. Complete authenticated recovery data/digest bindings phải đúng trước consume; không gửi cả hai owners' secrets để server “sửa”. | ARCHITECTURE §§5.2–5.3; SERVER-INDEPENDENCE §§3.2, 4.2; SDK §§2, 5. |
| D11 — one samechain owner offline | New arbitrary fill không approve được; existing owner exit không company gate. **Fully authorize → owner offline → unrelated accepted-root appends/tree rollover → exact packet submit** không yêu cầu offline secret/proof/signature renewal. Current unspent/generation/capacity/explicit expiry checks vẫn enforce; orphan/unaccepted root và cross-tree replay reject. Native Q không inherit retained-root policy. | SERVER-INDEPENDENCE §§3.2, 7.1–8; ARCHITECTURE §5; SDK §§2–3, 7. |
| D12 — F1/F2 và shared cancel generation | Hai outstanding packets khác relayer/fee/proof bytes cùng backing generation; included cancel invalidate generation và cả hai reject. Nếu fill included trước thì chỉ successor remainder cancel được. UI ACK/pending cancel không thắng chain winner; packet-only revoke không labeled order canceled/free backing. | SERVER-INDEPENDENCE §§4.3, 8; ARCHITECTURE §5.3; SDK §§2, 7. |
| D13 — U offline / S offline native | S chỉ dùng complete agreed Q/actual independent evidence theo lifecycle khi U offline, không FVK/re-sign rescue; U eligible payout với independent witness khi S offline/withholds witness. Every hostile T và excess có actual independent terminal/return capability trước enablement; missing hiện nay không narrow acceptance thành indefinite pending. | ARCHITECTURE §§7.2–7.3; SERVER-INDEPENDENCE §§5, 8; SDK §7; status blockers. |
| D14 — stale Q anchor/branch/expiry | Nêu packet/lifetime invalid và EvidencePending, không automatic reanchor/reproof hoặc key/FVK upload. Early-Q broadcast fee grief disclosed trước export; no promised delayed window/fixed recovery ETA. | ARCHITECTURE §7.2; SERVER-INDEPENDENCE §5; SDK §§2, 4. |

### 10.3 Outcome, failure, precision và privacy

| ID / scenario | Kết quả bắt buộc | Trace |
|---|---|---|
| D15 — gross credit / mixed input / earlier P′ / excess | Gross không C; unknown complete ownership/debits giữ pending, không payout/inferred refund. Valid bound earlier P/T và paying variant được classify, `T != P` không nonpayment. Authenticated supported C cho fixed floor U/remainder S; `C>A` chưa actual S-authorized source return/evidence không terminal/clamp/gift. | ARCHITECTURE §§7.1–7.2; SDK §2; status blockers. |
| D16 — failed payout/recipient/OOG rollback | Actual verify/consume/two fixed transfers atomic; required transfer failure rollback consumption/state/effects. `PayoutReady`/`RefundReady` right và original witness/beneficiaries retained; reconcile/verify retry conditions, no Paid/redirect/opposite refund. Actual source gas/fee effects nếu có phải nói đúng, không hứa retry free. | ARCHITECTURE §§4.2, 7.1–7.2; SERVER-INDEPENDENCE §§5, 7; SDK §§2, 5. |
| D17 — submit response mất / restart / stale backup | Unknown retains exact bytes/nonce/input/change/capacity/obligation; authentic reconcile trước new action/retry/release. Cache restore không re-fund/re-pay/revive spent generation; original funded version không `latest` reinterpretation. No blind repeated money send. | ARCHITECTURE §4.2; SERVER-INDEPENDENCE §7; SDK §§3, 5–7. |
| D18 — no backend/data/prover/chain availability | New discovery unavailable, local detail/kit vẫn inspect khi có. Existing qualifying right có actual independent tool/path, hoặc named missing prerequisite; không hidden company admission hoặc no-op fallback. Authorization independence không đủ data/prover/inclusion/liquidity; EvidencePending không delivered. | PRODUCT §§3–5; SERVER-INDEPENDENCE §§1, 7–8; SDK §§4–7. |
| D19 — reorg / exceeded ETA / source expiry | Nonfinal effects revalidated, new sends/capital reuse fenced; no automatic refund/reproof/intent reset. ETA Unmeasured không fabricated duration; measured estimate có provenance/as-of, invalidates khi reorg. Expiry không tước payout cho valid included payment; mixed clocks không timer allocation. | ARCHITECTURE §7.2; SDK §§3–5, 7. |
| D20 — actual completion evidence | Completed chỉ đúng actual U/S allocations + accepted supported source relation/finality; Refunded chỉ actual S destination refund + real conflict/nonpayment/source branch evidence. Partial labeled partial với both shares; tx hash/ACK/credit/log/proof/message không paid. `AllocationReady` chỉ SDK conceptual step, no implemented alias/state transition. | ARCHITECTURE §§1.1, 7.2; SDK §§2, 7. |
| D21 — locale/precision/keyboard/320px/zoom | Canonical decimal input rejects ambiguous/excess precision, no float/silent rounding; full exact units/recipients/fees accessible trước ký. Locale không đổi signed terms. Tab/focus/Escape không vô tình ký/cancel onchain; 200% zoom/small viewport không clipped financial summary/actions. | Interface §§7–8; exact-unit/authorization requirements PRODUCT §6, SDK §§1, 7. |
| D22 — private logging/storage/support export | No secrets/private P/Q/PCZT/witness/quote↔source mapping trong WebStorage/plaintext cache/hydration/URL/errors/analytics; explicit encrypted owner kit, disjoint scopes; diagnostic redaction inspected, no auto upload/replay/hashed private locator. No secret request để support. | SERVER-INDEPENDENCE §3; ARCHITECTURE §§4, 8; SDK §§3, 5–7. |
| D23 — art/copy/claims | Local art đúng period/attribution; no art behind financial controls/numbers, no endorsement/audit/privacy badge. Landing primary CTA dẫn verified public web source, không implied published sibling protocol; app P2P vẫn proposed, external tách explicit. No fabricated TVL/activity/charts/balances/fee/ETA. | Interface §§1–2, 7; concept/style/artwork; PRODUCT §§5–7; status. |

## 11. Handoff và giới hạn

`docs/design.md` owns current landing/root/Home/leaf responsibilities và **implemented** Agreement landscape/storyboard/behavior; `style.md` owns actual recipes/scoped targets, `artwork.md` owns unchanged art/fonts/own-logo + official-source-mark provenance/policy constraints, `concept.md` owns framing và `design-audit.md` owns original findings/current resolution proof. Prior proposal/approval boundary is historical; current landscape/fix batch user-authorized. No independent rules file, public component/financial API, chain registry or duplicated protocol state machine.

Current owner build/TypeScript/Node24 SSR/bounded Chromium results and historical audit reproductions are canonical in design-audit; docs worker ran none. **A1 tablet contrast/A2 menu resize/A3 footer spacing are resolved within the recorded post-fix scope**, not financial/global accessibility qualification. Financial implementations/APIs aren't selected or enabled by these docs; actual validators/consumer operations must qualify before money controls. Missing hostile-terminal/excess/manual capabilities remain release blockers. No backend/wallet signing/funded transaction/build/lint/formatter/install/commit/push/deploy performed by docs worker.
