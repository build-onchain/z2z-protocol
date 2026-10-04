# Z2Z — Concept sản phẩm và tinh thần thương hiệu

**Ngày tổng hợp:** 2026-10-03; current landing/document sync cập nhật2026-10-04. **Trạng thái:** bốn-beat landing và **Agreement landscape SVG/CSS2.5D** implemented, complete still + one automatic4800ms viewport-entry emphasis, không playback buttons hoặc loop. Plain public copy và separate Solana/NEAR/Hyperliquid context thay hợp đồng manual9s cũ. [Audit](design-audit.md) giữ A1–A3 history/resolved bounded proof và A4 overlap resolution. Không executable trading UI, deployment, full accessibility/performance/legal qualification.

Ziquid là repository triển khai nguồn; **Z2Z là tên sản phẩm dự kiến**. Không tự mở rộng tên thành “Zcash-to-Zcash”, không rename package/binary, không suy ra trademark/domain đã được kiểm tra. [PRODUCT nguồn](../../ziquid-dex/docs/PRODUCT.md) và [ARCHITECTURE nguồn](../../ziquid-dex/docs/ARCHITECTURE.md) là căn cứ sản phẩm/hành vi. Concept này không thay đổi financial contract của các tài liệu đó.

## 1. Ý tưởng trong một câu

**Z2Z hướng tới một DEX có chợ P2P để người dùng đặt lệnh mua bán tài sản với nhau, nhận báo giá đổi tài sản và chủ động chọn venue ngoài; quyền xử lý tiền được kiểm theo điều kiện người dùng đã đồng ý, thay vì server tùy ý duyệt.**

Hero: **“A peer-to-peer exchange, built around Zcash.”** Supporting copy: **“A DEX in development for trading directly with other people. Agree on the asset, amount and price before authorizing a trade.”** Luôn hiển thị **“In development. Trading is not available.”** H2 **“Agree on the trade. Know what you authorize.”** Public copy ngắn, concrete, nêu action/actor/limit; không slogan lặp, “concept” labels hoặc P/Q/U/S notation cho visitor. Financial specification vẫn giữ precise internal vocabulary và contract; tranh lịch sử là identity, không anonymity/recovery promise.

Audience hiện tại là người dùng Zcash sớm và builders đang đánh giá dự án. Primary **View source** dẫn tới [public web repository](https://github.com/build-onchain/z2z-protocol), đã được main integration owner xác minh remote và HTTP200. Đây là source của website, **không** chứng minh financial protocol sibling đã public. Không dùng “Read protocol”, URL sibling đoán, hoặc relative sibling docs làm CTA công khai. Secondary **The idea** dẫn `#exchange`.

### Tự do ở đây có nghĩa gì?

- **Tự quyết định:** kiểm tài sản, lượng, giá giới hạn, recipient, phí và quyền ký trước hành động không thể đảo ngược.
- **Tự chọn đối ứng:** chợ P2P là bộ phận chính của DEX; RFQ là cách tìm giá/đối ứng khác trong sàn, không thay thế P2P.
- **Quyền riêng tư có phạm vi:** bảo vệ phần thông tin có thể bảo vệ trên exact route; cho người dùng biết ai vẫn quan sát được gì.
- **Quyền đã được cấp không phụ thuộc domain công ty:** với route đủ điều kiện và dữ liệu/công cụ được giữ trước, owner có thể tự thực hiện quyền hiện hữu khi hosted app/server biến mất.

Authorization independence **khác** thanh khoản, data availability, prover availability, chain inclusion hoặc legal eligibility. Không thể tạo buyer/solver, khôi phục secret đã mất, đảo ngược thanh toán finalized hay cưỡng chế issuer gỡ freeze. [SERVER-INDEPENDENCE §1–3](../../ziquid-dex/docs/SERVER-INDEPENDENCE.md)

## 2. Người dùng và vấn đề

| Người dùng dự kiến | Công việc cần giải quyết | Giới hạn phải nói rõ |
| --- | --- | --- |
| Người mua/bán P2P | Chọn exact asset, lượng và limit; kiểm đề nghị fill, output và phần còn lại | Không có đối ứng thì không khớp; private matching đầy đủ chưa giải được |
| Người giữ ZEC | Tìm báo giá đổi sang một tài sản đích mà không unshield principal trên chặng Zcash của selected route | Chain đích/API/solver có thể làm lộ liên hệ; native route chưa hoàn chỉnh |
| Solver/bên nhận đổi | Cấp vốn thật ở đích theo immutable terms, theo dõi source evidence và quyền của mình | Quote không phải prefunding; missing evidence không tạo payout/refund |
| Owner cần manual path | Giữ recovery bundle/công cụ và thực hiện quyền còn hiệu lực khi app mất | Cần keys, witnesses, history, proving resources, gas và chain hoạt động |

Đây là **user jobs theo tài liệu thiết kế**, không bằng chứng đã có khách hàng, maker commitment, trading volume hay cost saving. Không dùng con số spread, phí, throughput hoặc TVL giả để làm landing page đáng tin hơn.

## 3. Cấu trúc DEX

| Lớp | Vai trò | Trạng thái cần thể hiện |
| --- | --- | --- |
| **P2P market** | Người mua/bán đặt asset, lượng, limit; đề nghị fill rồi owner kiểm/đồng ý | Trung tâm concept; private discovery/matching và exact settlement có gates riêng |
| **RFQ / báo giá** | Solver đưa giá và vốn; người dùng chọn exact terms | Cơ chế trong DEX, không phải private market đã đạt strict privacy |
| **Settlement** | Thực hiện nghĩa vụ samechain hoặc crosschain theo construction riêng | Không phải hai “chợ” riêng; không một nút proof xử lý mọi chain |
| **External spot** | Người dùng chủ động chọn HyperCore | Venue ngoài, theo own account/rules; không tự private hoặc tự route phần dư |
| **Pools / agents / ZSA** | Hướng nghiên cứu về sau | Deferred; không dựng farming/perps/agent tab như tính năng đang có |

Samechain candidate cần **hai owner freshly authorize exact fill/output/common terms**, conservation và backing thật. Partial fill tạo remainder/successor riêng; không tự tiếp tục khớp lúc owner offline. Fill/cancel cạnh tranh cùng generation; chain inclusion quyết định. Construction này là proposal, không chứng minh strict matcher privacy. [PRODUCT §1–4](../../ziquid-dex/docs/PRODUCT.md), [ARCHITECTURE §5](../../ziquid-dex/docs/ARCHITECTURE.md)

### Priority native hiện tại

Đường triển khai ưu tiên là **shielded Ironwood/v6 ZEC → một tài sản native trên local EVM**, một chiều. Base Sepolia là staging sau gates/authorization riêng; không mặc định support mainnet, mọi EVM, bidirectional hoặc ZEC → USDC. Solana financial-proof adapter và các cặp HYPE/ZEC, USDC/ZEC, token cổ phiếu/ZEC vẫn candidates, không listing. Ticker không phải asset identity. [PRODUCT §6–7](../../ziquid-dex/docs/PRODUCT.md), [ARCHITECTURE §7.1](../../ziquid-dex/docs/ARCHITECTURE.md)

Native flow theo thiết kế:

1. Owner U giữ source spending authority, chuẩn bị exact payment **P chưa executable** và locally proved/signed recovery self-spend **Q** của cùng real input. Giữ independent payout witness và encrypted recovery bundle.
2. Solver S kiểm packet rồi **prefund và irrevocably arm** exact destination obligation. Owner independently kiểm code/verifier/asset/amount/beneficiaries/context/finality trước release executable P authorization.
3. Accepted source history và complete payment/conflict evidence quyết định quyền; **T khác P không đồng nghĩa solver chưa được trả**. Gross credit không đủ chứng minh net user consideration.
4. Với supported authenticated `0 ≤ C ≤ A`, allocation là `U = floor(D × C / A)`, `S = D − U`, raw units theo từng chain; dust thuộc S. Actual target transfers tới cả hai fixed beneficiaries phải atomic. Transfer failure rollback, quyền vẫn retryable.
5. Missing/unsupported evidence giữ `EvidencePending`, không timeout refund. `C > A` cần actual source excess-return capability/evidence, không giả Q trả lại ZEC đã tới S.

Q có thể bị solver broadcast sớm gây cancellation/fee grief; anchor/branch/expiry có thể mất hiệu lực và packet không tự reprove. Không hứa fair exchange hoàn chỉnh hay recovery trong thời gian cố định. [ARCHITECTURE §7.2–7.3](../../ziquid-dex/docs/ARCHITECTURE.md)
**Illustration không đổi sản phẩm thành generic bridge:** public scene tách **Trader / Solver** khỏi **Source / Shielded Zcash** và **Destination / Local EVM**; Trader maps Owner U, Solver maps Solver S trong financial docs, không rename financial model. Một illustrative **full-payment branch**, in development. Destination prefund/irrevocable commitment **trước executable P release**; public copy nói source payment authorization, evidence **khác funds**, destination trả existing native asset có điều kiện—not BURN/MINT, universal routing hoặc atomic cross-chain promise. Four captions/scope giữ public destination, private matching unresolved và conditional-not-available recovery. Former Offer↔Agreement↔Settlement A/B là participants trong historical figure, không chains. [Design](design.md#agreement-landscape) owns storyboard/behavior; financial mapping vẫn design §§3/6 và canonical sources, không second financial state machine/API/registry.


## 4. Thực tế đã có và điều chưa có

**Web repository,2026-10-04:** implemented bốn beats: painting-led hero; plain exact-terms thesis + Agreement landscape, separate role-labelled ecosystem context và một Ideal City panorama; ba short native questions; own-brand footer/native credits. Root owns theme bootstrap/system observer; Home owns page/menu/theme actions và landing-only default-export [ProtocolConcept](../src/components/ProtocolConcept.tsx). Illustration `idle/playing/ended` và4800ms automatic-once emphasis là art, không financial status; no playback controls, wallet/backend/funded route. Desktop row subgrid/positive plaque-plinth gap và70rem scene stack tách52rem nav breakpoint. [Source](../src/routes/index.tsx), [root](../src/routes/__root.tsx), [manifest](../package.json). Owner build/TypeScript/browser proof và history ở [audit](design-audit.md); Apollo/Query dependency names không integration evidence.

**Protocol nguồn:** status ghi nhận local crypto/proof subrelations, checked accounting, migrated market safety modules và synthetic target evidence. Đây là nguồn báo cáo, không được chạy lại trong đợt viết concept này. **Chưa có finished real-money swap/company-off drill**, các financial gates chưa Passed. [NATIVE-IMPLEMENTATION-STATUS](../../ziquid-dex/docs/NATIVE-IMPLEMENTATION-STATUS.md)

Strict matcher privacy của retained candidate có **GD2 structural FAIL** khi matcher hợp tác với trader và quan sát kết quả chính trader. MPC/ZK không tự xóa leakage đó. UI không được giảm adversary hoặc gắn “Private market live” để che blocker. Native cũng thiếu complete source-history/payment/ownership/uniqueness proofs, independently usable hostile-spend/excess recovery và actual funded target acceptance. [PRODUCT §5](../../ziquid-dex/docs/PRODUCT.md), [status — blockers](../../ziquid-dex/docs/NATIVE-IMPLEMENTATION-STATUS.md#concrete-blockers-to-the-entire-protocol)

## 5. Tinh thần Zcash và bối cảnh sự kiện

Z.Cash mô tả mục tiêu là **“empower economic freedom”**; Zcash Foundation nói về open financial networks cho người dùng bảo vệ privacy “on their own terms”. Đây là căn cứ cho **narrative về quyền tự quyết**, không endorsement Z2Z. Zcash có cả shielded lẫn transparent path; không suy từ chữ ZEC ra privacy toàn bộ giao dịch. [Zcash overview](https://z.cash/learn/what-is-zcash/), [Foundation](https://zfnd.org/), [shielded/transparent](https://z.cash/learn/what-is-the-difference-between-shielded-and-transparent-zcash/)

**Crypto World’s Fair của Colosseum** diễn ra 14/09–12/10/2026, gồm Zcash ecosystem track. Organizer mô tả cảm hứng World’s Fairs thế kỷ 19–20; bài về redesign nêu Renaissance, Volta Prize và World’s Fair. Đây là bối cảnh/cảm hứng người dùng chọn, không bằng chứng Z2Z đã đăng ký, eligible, funded, sponsored hay endorsed. [Announcement, 2026-09-03](https://blog.colosseum.com/expanding-the-arena/), [branding, 2026-09-04](https://blog.colosseum.com/crypto-worlds-fair-crash-course-payment-channels/), [event](https://colosseum.com/worldsfair)

**The Zecathon** tại [thezecathon.com](https://thezecathon.com/) là event privacy hackathon riêng được site mô tả do zkSNARKs tổ chức. Không tự đồng nhất với Zcash track của Colosseum hoặc dùng chung deadline. Rules/schedule nằm sau sign-in; final conditions không được suy từ public configuration có proposal/placeholder comments.

Colosseum campaign artwork/logos chỉ **link làm reference**: chưa có license tái sử dụng cho app. Zcash logo có [trademark policy](https://zfnd.org/zcash-trademark-policy/), không gắn vào Z2Z wordmark hoặc làm người dùng tưởng official product. [Colosseum rules §17](https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf) yêu cầu advance written consent cho contestant dùng administrator IP.

## 6. Visual concept — Renaissance Exchange

**Lựa chọn landing đã duyệt:** contemporary exchange với tranh lịch sử, không website của một historical institution. Neutral light/dark surfaces, clean sans body/controls, expressive display có chọn lọc, spacing được đo, thin rules và borderless compositions. Không toàn trang Georgia/giấy cổ/gold ornament; workspace tài chính proposed vẫn giữ Navy/sans/tabular/solid surfaces và exact-terms requirements.

- **Renaissance foundation:** central perspective, nhịp arcade/cột, quảng trường và proportion tạo cảm giác trật tự, quyền tham gia, gặp gỡ. *The Ideal City* là primary reference đúng thời kỳ, không lời chứng minh lịch sử về tự do thị trường.
- **Merchant/civic life:** piazza Venice có người và activity giúp DEX là chợ trao đổi, không palace dành riêng cho elite. Canaletto/Bellotto là thế kỷ 18, không Phục Hưng.
- **Light and possibility:** Turner, Monet cung cấp xanh trời, ivory, coral/gold và painterly light; lần lượt Romantic/Impressionist, không gắn nhãn Renaissance.
- **World’s Fair layer:** panorama hội chợ gợi builders/innovation/public gathering. Đây là ngôn ngữ Belle Époque/fin-de-siècle, bổ trợ thay vì thay nền Renaissance.
- **Financial-market continuity:** ảnh stock exchange hiện có dùng editorial về lịch sử market; không dùng làm proof decentralization/privacy hoặc background bảng lệnh.

“Financial freedom” là **diễn giải thương hiệu hiện đại của Z2Z**. Banquet có thể mang nội dung tôn giáo/quý tộc; *Ideal City* nói về virtuous ruler; *Liberty Leading the People* nói về cách mạng 1830 và có violence. Không đổi ý nghĩa gốc thành “các tác phẩm này nói về DeFi”.
**Current visual direction:** low-relief Agreement landscape, architectural SVG/CSS2.5D + upright HTML labels trên neutral surface. Approved Bellotto hero/Ideal City panorama, Instrument Serif H1/Manrope body và no-Inspiration footer retained. Four captions luôn visible; automatic4800ms emphasis starts once on eligible entry, no buttons/loop/restart. SSR/no-JS/reduced motion vẫn complete still. Offscreen/hidden/resize/reduce cancels active run to ended; [design](design.md#illustration-interface)/[style](style.md#illustration-motion) owns exact eligibility/lifecycle, audit owns exercised proof. Không WebGL/new runtime dependencies/painting parallax/logo redesign.

**Truthful identity groups:** linked unchanged Zcash source mark, neutral EVM destination glyph và separate **“Ecosystem context · Not live settlement routes”** below scope. Network research: **Solana — Native adapter candidate**, **NEAR — Research context**; external venue: **Hyperliquid — External venue · testnet reads**, each links official website. No payment-plane placement/partnership/endorsement/live-support claim. [Artwork](artwork.md#functional-protocol-marks) owns exact first-party sources/hashes and restrictive/conflicting terms; asset authenticity/local-preview authorization is not trademark clearance. Human permission/terms review before public deployment. Other candidate/staging/asset/tooling inventories remain docs-only, not support wall.


### Hình ảnh chọn sẵn

Sáu JPEG open-access và toàn bộ approved adaptations được giữ làm source/reference. Landing redesign chỉ hiển thị Bellotto ecosystem hero và **một Ideal City panorama** qua responsive WebP tại `public/art/landing/`; không biến bốn tranh thành wallpaper/cards. Logo alpha đã duyệt có derivatives tại `public/brand/landing/`, không regenerate. Credit/rights/download URL, thêm 12+ references và hạn chế nằm ở [artwork.md](artwork.md).

| Asset | Vai trò trong landing redesign |
| --- | --- |
| [`ideal-city.jpg`](../public/art/ideal-city.jpg) | Source cho một supporting panorama; giữ central perspective và panorama |
| [`bellotto-piazza-san-marco.jpg`](../public/art/bellotto-piazza-san-marco.jpg) | Source của painting-led ecosystem hero; attribution **attributed to Bernardo Bellotto** |
| [`canaletto-piazza-san-marco.jpg`](../public/art/canaletto-piazza-san-marco.jpg) | Master/approved derivatives retained; không visible landing card |
| [`turner-venice.jpg`](../public/art/turner-venice.jpg) | Master/approved derivatives retained; không visible recovery card |
| [`monet-garden-antibes.jpg`](../public/art/monet-garden-antibes.jpg) | Retained reference, không mount; Impressionist |
| [`hoffbauer-world-fair-1900.jpg`](../public/art/hoffbauer-world-fair-1900.jpg) | Retained reference, không mount; không logo/campaign Colosseum |

Ảnh người dùng #1 là campaign-style navy/gold fair poster; source/license chính xác chưa xác minh, không copy vào product. Ảnh #2 thuộc visual family Veronese banquet; **không chốt tên tác phẩm từ ảnh nhỏ**. [*Wedding at Cana*, Louvre](https://collections.louvre.fr/ark:/53355/cl010064382) và [*Feast in the House of Levi*, Accademia](https://www.gallerieaccademia.it/en/opera/convito-in-casa-di-levi/) là comparison references, không cùng tác phẩm. Hai nguồn này không cho phép suy blanket commercial reuse chỉ vì tranh gốc lâu đời.

## 7. Nguyên tắc giao diện

1. **Landing giải thích; trading thực hiện quyền.** Landing có contemporary neutral surfaces, painting-led hero và selective display; workspace navy, sans, tabular numbers, solid surfaces. Không paintings/texture sau amount, charts, books, form hoặc signing dialog.
2. **Nhìn là DEX:** exact market/asset/network, bid/ask hoặc disclosed executable quotes, quantity, limit, fees, order/activity/settlement views. Không hiển thị private order data chưa được phép công khai.
3. **Nhìn là Zcash-aware:** source shielded scope, destination visibility, prover/solver visibility, local recovery và user-held authority hiện ngay trước consent; không universal green lock.
4. **Protocol readiness khác connection:** connected wallet không bật route chưa qualified. Khi chưa trading backend thì báo unavailable/development, không mock price/volume/fill/live balance.
5. **Thành công = actual effects:** signed/submitted/proof accepted/credit không “paid”. Timeout không đổi quyền. Retry theo same retained intent, không blind double-submit.
6. **Honest public copy:** short plain sentences, concrete actors/actions/limits; source/destination labels không “concept”, Trader/Solver không financial variable names. Nói recovery conditional/not available, destination can be public và matching unresolved; không “100% anonymous / trustless every chain / instant refund”. Internal financial docs vẫn dùng exact P/Q/U/S/evidence vocabulary.

Current landing thesis nói exact terms trước authorization; figure caption **“How a trade would work” / “In development · Not live”**, descriptor **“One illustrative full-payment branch”**. Four caption steps và bounded ecosystem context nằm trong product beat, không extra marketing section. Three native questions nói chưa trade/no wallet/funds, shielded-source/public-destination/matching-unresolved và website source—not complete protocol. Không complete recovery promise, serial feature cards/readiness inventory/duplicate CTA. Dark typographic Z2Z footer riêng canonical coin, actual links/native credits; no Inspiration/design-reference columns/social/legal placeholders/affiliation FAQ. Source/ecosystem identification links không public inspiration footer.

Canonical ownership: **concept** owns product framing/vocabulary; [design](design.md) composition/responsibilities/storyboard/behavior; [style](style.md) actual recipes và unmeasured targets; [artwork](artwork.md) exact sources/rights/roles; [audit](design-audit.md) observed checks, A1–A3 history/resolution và A4 overlap proof. Current automatic-once/plain-copy/role-context cutover supersedes manual9s controls; trading workspace remains proposed, financial gates unchanged. Không extra rules/components/contracts system.

## 8. Source ledger và kiểm chứng

External product/event/art context dưới đây được retrieved **2026-10-03**; current sibling product/native authorities được đọc lại **2026-10-04** cho illustration scope. Publication date không bị thay bằng retrieval date. Hyperliquid/LayerZero/source-rendered comparison và supplied BURN→MINT image interpretation có ledger riêng ở [design audit](design-audit.md#reference-ledger); chúng không grants assets/fonts/financial claims/integration.

| Nguồn | Date/scope | Dùng cho |
| --- | --- | --- |
| [Ziquid PRODUCT](../../ziquid-dex/docs/PRODUCT.md) | Design 2026-10-02 | Product identity, P2P/RFQ/external venue, privacy và scope |
| [ARCHITECTURE](../../ziquid-dex/docs/ARCHITECTURE.md) | Living design; inspected 2026-10-03, selected native §§7.1–7.3 re-read2026-10-04 | Actual rule authority: prefund-before-P, evidence/asset effect, selected direct native transfer, full-payment versus other branches |
| [SERVER-INDEPENDENCE](../../ziquid-dex/docs/SERVER-INDEPENDENCE.md) | Proposal 2026-10-02; §§1/3/5 re-read2026-10-04 | Recovery prerequisites, permission/availability distinction và no unconditional refund |
| [NATIVE-IMPLEMENTATION-STATUS](../../ziquid-dex/docs/NATIVE-IMPLEMENTATION-STATUS.md) | Living checkpoint including2026-10-04 work; inspected2026-10-04 | Source-reported local implementation, unfinished financial gates—not new protocol checks |
| [Z.Cash overview](https://z.cash/learn/what-is-zcash/) | Published 2023-04-10, modified 2024-09-09 | Economic freedom mission, not Z2Z guarantee |
| [Shielded versus transparent](https://z.cash/learn/what-is-the-difference-between-shielded-and-transparent-zcash/) | Published 2023-04-10, modified 2025-10-14 | Conditional Zcash privacy |
| [Zcash Foundation](https://zfnd.org/) | Undated mission page | Open financial networks/privacy on own terms |
| [Expanding the Arena](https://blog.colosseum.com/expanding-the-arena/) | 2026-09-03 | World’s Fair concept and event dates |
| [Colosseum branding](https://blog.colosseum.com/crypto-worlds-fair-crash-course-payment-channels/) | 2026-09-04 | Explicit Renaissance/Volta/World’s Fair inspiration |
| [Fair page](https://colosseum.com/worldsfair) / [rules](https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf) | Page undated; rules ©2026 | Event/track context; eligibility and IP must be checked separately |
| [The Zecathon](https://thezecathon.com/) | Undated; detailed info sign-in restricted | Separate event identity only, no copied terms |
| [Zcash trademark policy](https://zfnd.org/zcash-trademark-policy/) | Modified2025-10-23; parent retrieved current policy2026-10-04 | Specified truthful word/mark uses, own-brand prominence/no confusion, webpage logo-link requirement; current source-concept use/link recorded, not blanket permission or legal conclusion |

Sibling relative links cần adjacent repos,không public CTA. PRODUCT/ARCHITECTURE/status ưu tiên archived research;không import fees/cadence/support/custody/autonomy. [Audit](design-audit.md) separates prior contrast/menu/footer/manual9s evidence from latest4800ms automatic-entry/end/offscreen/reduce cleanup,no-JS4steps/3official-role-links,spacing/menu/new-copy contrast/targeted A4 layout proof. Owner build/TypeScriptPASS7.79s/Node24 SSR/5SVGURLsHTTP200 are observed,not deployment/CWV/full accessibility/financial gate/legal-clearance results. Docs worker only reads/synchronizes,no checks/product edits/financial action/commit/push/deploy. [Artwork](artwork.md) retains full source/rights/history and exact-use trademark unknowns requiring human permission/terms review before public deployment.
