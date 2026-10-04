# Z2Z — Visual style: Renaissance Exchange

## 1. Mục đích, trạng thái và phạm vi

Tài liệu separates **current landing/Agreement landscape SVG/CSS2.5D + automatic-once4800ms emphasis/no playback controls**, role-qualified ecosystem identities và **financial workspace proposal**. Canonical visual recipes/acceptance, not financial enablement/legal clearance. English public copy short/concrete across page; no trading/backend/new runtime dependency. Audit retains A1–A3 bounded resolution/history and A4 overlap proof, not full accessibility/performance certification.

- [Concept](concept.md) owns product framing và vocabulary.
- [Design](design.md#landing-components) owns current root/Home/landing-leaf responsibilities và [implemented composition/storyboard/behavior](design.md#agreement-landscape), không public SDK API hoặc financial state machine.
- **Tài liệu này** owns actual landing tokens/fonts/geometry/focus/motion và unmeasured contrast/performance targets; workspace recipes separately scoped.
- [Artwork catalog](artwork.md#functional-protocol-marks) owns image/font/mark provenance, truthful role/status và logo eligibility; không lấy painted emblems làm functional icons.
- [Design audit](design-audit.md) owns observed current checks, original A1 tablet contrast/A2 menu resize/A3 footer reflow history, resolved proof scope và reference ledger. Docs worker không chạy builds/tests/lint/formatters/install/source fixes.

**Ý định landing:** contemporary exchange với historical art, không historical-institution website. Neutral light/dark ground, sans body/controls, selective expressive display, thin rules, borderless compositions và spacing có hierarchy thay cho full-page giấy ngà/Georgia/gold ornament. Painting-led hero vẫn là identity; chỉ thêm một Ideal City panorama. Trading workspace vẫn là công cụ tài chính Navy, rõ giá, mạng, rủi ro và trạng thái.
Hero **“A peer-to-peer exchange, built around Zcash.”**; support **“A DEX in development for trading directly with other people. Agree on the asset, amount and price before authorizing a trade.”** H2 **“Agree on the trade. Know what you authorize.”** Status **“In development. Trading is not available.”** Plain actor/action/limit sentences replace abstract marketing jargon throughout page; Source/Destination and Trader/Solver labels don't rename precise financial docs. **View source** → verified public web repo; **The idea** → `#exchange`; metadata states same prelaunch/exact-terms meaning.

**Bất biến sản phẩm:** P2P market là trung tâm; RFQ là phương án trong cùng DEX. Same-chain/cross-chain mô tả settlement, không phải hai thị trường mới. HyperCore là external spot venue do người dùng chọn, không mặc nhiên private. Native route đầu tiên được chọn là shielded Ironwood ZEC → một tài sản EVM **NATIVE** trên mạng local; còn chưa hoàn chỉnh. Không minh họa như ZEC/USDC đã hoạt động, live Solana, universal privacy hoặc trustless settlement. Strict private matching còn bị chặn về mặt cấu trúc; style không được che khuất giới hạn đó bằng hình ổ khóa hay huy hiệu an toàn.

## 2. Hướng nghệ thuật và tính chính xác lịch sử

### 2.1 Renaissance foundation, không đồng nghĩa hero hiện tại

**The Ideal City**, khoảng 1480–1484, Walters Art Museum, là genuine Renaissance reference và **một supporting panorama** của landing redesign, không privacy feature card hoặc hero thay thế Bellotto. Credit dùng **Florentine artist, after a design by Giuliano da Sangallo** theo trường attribution hiện hành của collection; không khẳng định vô điều kiện tác giả Fra Carnevale dựa trên tiêu đề trang cũ.

Diễn giải thiết kế của Z2Z là **[SUY LUẬN]**: nhịp cột gợi grid, quảng trường gợi nơi gặp gỡ, người trong cảnh gợi agency. Không nói nghệ sĩ đã mô tả permissionless markets, Zcash hay privacy. Tranh có bối cảnh lịch sử về quyền lực/đức hạnh, không phải bằng chứng cho một tuyên bố tài chính hiện đại.

### 2.2 Secondary: ghi đúng thời kỳ, không gọi tất cả là Renaissance

| Nhóm | Vai trò | Quy tắc lịch sử |
|---|---|---|
| Attributed to Bernardo Bellotto và Canaletto, Venice thế kỷ XVIII | Bellotto adaptation làm painting-led hero; Canaletto master/derivatives retained, không visible landing card | Venetian vedute thế kỷ XVIII, không phải Renaissance; giữ qualifier “Attributed to” của Bellotto |
| J. M. W. Turner, Venice thế kỷ XIX | Retained master/approved derivatives và ánh sáng reference, không recovery card trong redesign | Romantic light, không phải Renaissance; không dùng sương sáng để gợi settlement mơ hồ |
| Claude Monet, Antibes, 1888 | Retained color/editorial reference, không mount landing | Impressionism, không phải Renaissance; không phải minh họa thị trường |
| Fédor Hoffbauer, cảnh World Fair 1900 | Retained reference, không mount landing | Belle Époque / World Fair imagery, không phải Renaissance; 1900 là năm sự kiện được mô tả, không là creation date đã xác minh |

Landing chỉ Bellotto hero và một Ideal City panorama. Sáu masters, approved unused adaptations/derivatives và provenance vẫn giữ nguyên; asset có trong `public/` không có nghĩa là visible content. Không slideshow, wallpaper nhiều tranh hoặc serial feature cards.

### 2.3 Ngôn ngữ thị giác

- **Landing dùng:** neutral near-white/dark solid surfaces, painting-led hero còn thấy brushwork/kiến trúc, thin rules, selective display và sạch hierarchy. Footer dark solid với oversized own typographic Z2Z; approved coin không thay đổi. Workspace giữ Navy/Paper functional recipes dưới đây.
- **Không dùng:** parchment toàn trang, gold decorative diamonds, repeated slogan/eyebrow/card templates, neon/aurora/glow, faux-marble controls, đồng xu 3D, script, khung Baroque hoặc activity/metrics giả.
- Amber trong coin/tranh không buộc toàn bộ landing controls thành Gold; không dùng màu gold như “lợi nhuận”, “private” hoặc qualification. Gold action/status recipes dưới đây vẫn áp dụng cho workspace proposed.
- **Current scoped illustration:** architectural2.5D + automatic-once4800ms native emphasis, no playback toolbar/loop/financial-status animation. Depth only architecture/plinth; labels upright/authentic marks flat. Separate Solana/NEAR/Hyperliquid official links identify candidate/research/external-testnet context, not payout destinations.


## 3. Color tokens và surfaces

**Surface ownership:** §3.0 là actual landing contract từ [`src/styles.css`](../src/styles.css); §§3.1–3.3 là **proposed financial workspace/reference palette**, không landing Paper/Gold skin. Shared base/shadcn source tokens hiện mang tên `--paper`, `--ink`, `--navy`, `--gold`, `--success`, `--danger` (`styles.css:7–84`), system sans/Georgia fallback (`86–88`); `--z2z-*` bên dưới chỉ là example, không source migration. Giữ demos/base riêng, không restyle để phục vụ landing. Actual hero image composite còn A1 tablet defect; không suy token ratios thành toàn-page contrast PASS.

<a id="landing-tokens"></a>

### 3.0 Current landing palette, surfaces và computed pairs

Source authority: `.landing-page`/theme `styles.css:169–202`; hero/actions476–577; illustration612–1096/ecosystem1098–1204; responsive1424–1629/reduced-motion1631–1646. Other selectors named below remain source authority if line offsets change; no token rename/invention.

| Role / actual token | Light | Dark và system-dark |
| --- | --- | --- |
| Ground `--landing-surface` | `#f7f8f3` | `#1a211d` |
| Main text `--landing-ink` | `#202c26` | `#edf0e8` |
| Secondary text `--landing-muted` | `#55625c` | `#b8c1b7` |
| Decorative rule `--landing-rule` | `rgb(32 44 38 / 20%)` | `rgb(237 240 232 / 23%)` |
| Agreement/hover tint `--landing-tint` | `#eef1e8` | `#222e25` |
| Scoped focus `--ring` | `#395d47` | `#d1debe` |

| Fixed surface, independent of selected theme | Actual recipe |
| --- | --- |
| Hero | Text `#f6f6ee`, base `#18261d`, ring `#eef2df`; image/overlay composite—not base alone—determines contrast. |
| Source action | Text `#18271d`, fill `#eef2e4`, hover `#ffffff`; 180ms `ease` background-color transition. |
| Footer | Text `#edf0e6`, base `#142019`, ring `#d8e4c5`, secondary `#bdc7ba`; rules `rgb(237 240 230 / 25%)`. |
| Selection | Text `#17251b`, fill `#d9e4c9`. |

Default hero horizontal overlay87%@0%,78%@28%,57%@45%,12%@68%,transparent100%,image50%/50% cover.40–70rem localized override88%@0%,84%@48%,81%@62%,20%@79%,transparent100%,support/status `min(30rem,56vw)` (`1502–1510`).≤40rem later vertical6%@0%,12%@18%,66%@34%,90%@58%,94%@100%,image43%/center,status20rem (`1556–1595`). A1 recipe retained without replacing/recoloring painting. Latest owner Range-line composite measures new-copy support/status≥4.5 at390/640/768/1120/1121/1440;prior ratios stay historical,not substituted/all-crop/H1 certificate.

**Computed opaque sRGB pairs — integration-owner arithmetic, 2026-10-04**, same WCAG method as §3.3; not sampled all controls/states or benchmark:

| Foreground / background | Ratio |
| --- | ---: |
| Light main `#202c26` / `#f7f8f3` | 13.57:1 |
| Light muted `#55625c` / `#f7f8f3` | 5.98:1 |
| Dark main `#edf0e8` / `#1a211d` | 14.25:1 |
| Dark muted `#b8c1b7` / `#1a211d` | 8.87:1 |
| Footer muted `#bdc7ba` / `#142019` | 9.63:1 |
| Source-action text `#18271d` / `#eef2e4` | 13.70:1 |

Alpha rules don't certify functional boundaries/focus/diagram. Essential rails/icons/controls≥3:1,normal text≥4.5,large≥3 actual state/composite;Evidence dashed/labeled,Funds solid/labeled. Historical768 failure **2.21/2.83**,prior post-fix **11.33/12.49** retained separately. **Latest shortened-copy support/status:**390 and640 **14.16/16.23**;768 **11.34/12.49**;1120 **12.23/13.39**;1121 **6.00/12.61**;1440 **8.29/11.48**. All≥4.5,bounded Range-text-line/current image-CSS method;[A1](design-audit.md#a1) owns limits,no all-glyph/stroke/state proof.

### 3.1 Bảy token gốc cho workspace proposed

| Token | Giá trị sRGB | Mục đích |
|---|---|---|
| `--z2z-paper` | `#F4EBDD` | Chữ trên Navy, light workspace/reference surface, status có nền sáng; không current landing ground bắt buộc |
| `--z2z-ink` | `#18262F` | Chữ chính trên Paper; value/heading sáng nền |
| `--z2z-navy` | `#172B3A` | Trading workspace, dialog trading, navigation đậm |
| `--z2z-gold` | `#E4B55F` | Primary CTA, selected marker và pending badge có chữ Navy |
| `--z2z-muted` | `#58636A` | Chữ phụ và biên controls trên Paper; không làm chữ phụ trên Navy |
| `--z2z-success` | `#24684C` | Positive/confirmed trên Paper hoặc nền solid badge |
| `--z2z-danger` | `#A33232` | Error/destructive trên Paper hoặc nền solid badge |

```css
:root {
  --z2z-paper: #F4EBDD;
  --z2z-ink: #18262F;
  --z2z-navy: #172B3A;
  --z2z-gold: #E4B55F;
  --z2z-muted: #58636A;
  --z2z-success: #24684C;
  --z2z-danger: #A33232;
  --z2z-font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --z2z-font-numeric: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}
```

Đây là ví dụ token cho **workspace triển khai sau**, không current landing token contract. Landing typography chọn self-hosted **Instrument Serif regular400** cho hero display và **Manrope variable200–800** cho product/questions/body/controls, từ `google/fonts` `ofl/instrumentserif` và `ofl/manrope`, SIL Open Font License1.1. Builder cung cấp complete upstream TTFs: [`instrument-serif-regular.ttf`](../public/fonts/instrument-serif-regular.ttf) (70,012bytes), [`manrope-variable.ttf`](../public/fonts/manrope-variable.ttf) (164,700bytes), với actual per-family licenses [`instrument-serif-OFL.txt`](../public/fonts/instrument-serif-OFL.txt) và [`manrope-OFL.txt`](../public/fonts/manrope-OFL.txt). Không thêm encoder dependency cho WOFF2, CDN/runtime font fetch, proprietary reference fonts hoặc font/UI package. Integration owner xác nhận actual TTFs loaded trong Chromium smoke; fonts chỉ scoped landing, shared demo fonts không đổi.

### 3.2 Surface recipes

| Surface | Nền / chữ | Biên và hierarchy |
|---|---|---|
| Light workspace/reference editorial | Paper / Ink; supporting text Muted | Viền control Muted; phân nhóm bằng spacing và divider nhẹ; không landing neutral palette override |
| Trading workspace | Navy / Paper | Panel cùng Navy, phân nhóm bằng khoảng cách và divider; Ink không đủ phân biệt Navy để làm biên |
| Navigation dark | Navy / Paper | Selected text Gold + underline 2px; unselected vẫn Paper |
| Primary action | Gold / Navy | Trên Paper có viền Navy 1px để boundary không dựa vào Gold/Paper |
| Secondary action | Trong suốt, chữ và viền Navy trên Paper; Paper trên Navy | Không thay bằng Gold text trên Paper |
| Error / confirmed chip | Danger hoặc Success solid / Paper | Trên Navy thêm biên Paper để đọc được ranh giới; kèm icon và nhãn |
| Pending / attention chip | Gold / Navy | Trên Paper thêm viền Navy; chữ mô tả điều đang chờ |

Trading light variant dùng đầy đủ recipe Paper/Ink, không đảo từng ô ngẫu nhiên. Landing ending là dark solid riêng; hero landing là ngoại lệ đã duyệt cho painting + copy, nhưng contrast phải đo sau composite. Không áp ngoại lệ này cho workspace numbers/forms/dialogs.

**Divider trang trí:** Paper 12% trên Navy ≈ `#32424E` (1.40:1); Ink 12% trên Paper ≈ `#DAD3C8` (1.26:1). Chỉ được dùng cho đường chia không cần thiết để hiểu/điều khiển. Không dùng chúng làm biên input, focus ring, chart series, dấu selection hoặc icon quan trọng. Biên functional trên dark dùng Paper 45% ≈ `#7A8183` (3.67:1); trên light dùng Muted solid (5.22:1). Không dùng opacity cho toàn bộ control vì sẽ làm chữ giảm contrast.

### 3.3 Contrast: các cặp đã tính, không suy rộng

Các tỷ lệ dưới đây được tính từ HEX sRGB bằng relative luminance của WCAG, với `c ≤ 0.04045 → c/12.92`, còn lại `((c+0.055)/1.055)^2.4`; luminance = `0.2126R + 0.7152G + 0.0722B`, ratio = `(Lmax+0.05)/(Lmin+0.05)`. Làm tròn hai chữ số chỉ để hiển thị.

| Foreground / background | Ratio | Cho phép |
|---|---:|---|
| Ink / Paper | 13.10:1 | Body, numeric values, headings |
| Navy / Paper | 12.32:1 | Text, links và biên primary CTA |
| Paper / Navy | 12.32:1 | Text, icons, chart labels |
| Muted / Paper | 5.22:1 | Chữ phụ cỡ thường, biên controls |
| Navy / Gold hoặc Gold / Navy | 7.67:1 | Chữ CTA, selected text và focus ring trên Navy |
| Ink / Gold | 8.16:1 | Chữ nếu cần dùng Ink trong badge Gold |
| Success / Paper hoặc Paper / Success | 5.63:1 | Chữ semantic trên light; chữ trong solid badge |
| Danger / Paper hoặc Paper / Danger | 5.81:1 | Chữ error trên light; chữ trong solid badge |
| Paper 45% trên Navy / Navy | 3.67:1 | Biên control/đồ họa; **không** chữ cỡ thường |

**Các cặp không đạt:** Gold/Paper 1.61:1; Muted/Navy 2.36:1; Success/Navy 2.19:1; Danger/Navy 2.12:1; Ink/Navy 1.06:1. Cấm dùng cho body text, chart stroke mang thông tin, required icon hoặc biên điều khiển. Paper/Gold cũng chỉ 1.61:1: không đặt chữ Paper trên nút Gold.

Text thường≥4.5:1; large≥3:1; meaningful graphics/control boundary≥3:1. New alpha/blend/image/state phải tính riêng. §3.3 workspace pairs và §3.0 opaque landing pairs không full UI certificate. Old390/1440 samples không covered tablet; historical7682.21/2.83 was A1. Current text-line composite matrix closes the bounded support/status finding, **no new H1 glyph measurement**; old H1 bbox1.44 never established a glyph failure. [Audit](design-audit.md#a1) owns history/current methods, not blanket AA.

## 4. Typography và độ rõ của số

### 4.1 Current landing roles — actual CSS, không approximate workspace scale

Font faces `styles.css:153–166`: **Instrument Serif normal400** `/fonts/instrument-serif-regular.ttf`; **Manrope normal200–800** `/fonts/manrope-variable.ttf`, `font-display: swap`. Landing only uses Manrope with existing system fallback; hero H1 alone uses Instrument Serif/Georgia/Times fallback. Exact TTFs và actual SIL OFL1.1 files ở §3.1 giữ nguyên; không proprietary reference-font copy, new encoder/font dependency hoặc CDN.

Values theo root16px chỉ là px equivalents; `rem`, `vw`, `cqw` recipes mới là authority.

| Current role / source lines | Size / weight | Line-height / tracking |
| --- | --- | --- |
| Base —169–180 | `1rem` (16px), inherited normal400 Manrope | `1.65`, normal tracking |
| Hero H1 —516–521 | `clamp(4.5rem, 7.4vw, 7.625rem)` (72–122px), Instrument Serif400 | `1.015`, `-.025em` |
| Hero H1≤70rem —1342–1344 | `clamp(3.75rem, 8vw, 6rem)` (60–96px) | Same unless≤40rem |
| Hero H1≤40rem —1472–1475 | `clamp(2.875rem, 12vw, 4.625rem)` (46–74px) | `1.045`, `-.025em` |
| Hero support —528–533,1352–1355,1477–1480 | `1.0625rem` (17px);≤40rem `1rem`; normal400 | `1.75`; max30rem,40–70rem bounded56vw |
| Hero actions/status —544–577 | Actions `.9375rem` (15px)/600; status `.875rem` (14px)/400 | Actions1.5; status1.6 |
| Thesis H2 —598–609 | `clamp(2.375rem, 3.9vw, 3.75rem)`/500; body1.0625rem/400 | H2 `1.13`, `-.052em`; body1.8,max34rem |
| Landscape titles —685–697,1452–1454 | `clamp(1.25rem,1.7vw,1.5rem)`/600;≤70rem1.375rem; descriptor.875rem | Title1.3/`-.035em`; descriptor1.6 |
| Figure caption/branch/scope/steps —620–638,1067–1096 | Caption/branch.875rem (caption lead600); scope/step prose.8125rem; H4.875rem/600 | Scope/prose1.8; H4 1.5/`-.025em`; scope max64rem |
| Ecosystem —1098–1204 | Heading.875rem/600; group label.8125rem; link1.125rem/600; role/note.875rem | Heading/role1.7; link1.5; note1.8 |
| Questions — `.questions-section`,`.questions-list summary`,`.question-answer` | H2 `clamp(2rem,3.25vw,3rem)`/500;summary1rem/600;answer.9375rem (15px)/400 | H2 1.15/`-.045em`;summary1.6;answer1.8 |
| Header brand/navigation —316–361 | Brand1.125rem/700, `-.035em`; desktop nav.875rem/500; mobile nav1rem | Inherit1.65 unless role specifies |
| Footer wordmark — `.footer-wordmark` | Manrope **`40cqw`/500**,three `minmax(0,1fr)` tracks;page typography,not logo master | `.9`,`-.075em`;min-width0 spans,center2/right finalZ;bounded A3 spacing proof |
| Footer links/credits — `.site-footer` selectors | Top/copyright/credits.875rem;nav.9375rem;normal400 | Credits1.8;others inherit1.65 |

15px FAQ answer/14px caption là actual explanation/secondary roles; không claim all paragraphs≥16px hoặc restyle tasteful tracking to workspace. Text-spacing remains mandatory; A3 resolved in documented320/390100%/200% override checks, not all-device/full-AA proof. No overflow hiding/user-override suppression; [audit](design-audit.md#a3) owns historical/current dimensions.

### 4.2 Proposed workspace typography và numeric precision

| Role | Font | Desktop / mobile | Weight / line-height |
|---|---|---|---|
| Workspace title | UI | 24px / 20px | 600 / 1.3 |
| Panel title | UI | 16–18px | 600 / 1.4 |
| Body / explanation | UI | 16px | 400 / 1.55 |
| Control / table / badge | UI; numeric cells dùng Numeric | **Ít nhất 14px** | 400; label/action 600 / 1.4–1.5 |
| Caption / timestamp / helper | UI | **Ít nhất 14px** | 400 / 1.5 |
| Main amount / quote value | Numeric | 24–28px / 22–24px | 500 / 1.3 |
| Address / transaction ID | Numeric | 14px | 400 / 1.5 |

- Landing chỉ dùng Instrument Serif khi display có mục đích; body/nav/buttons/questions sạch sans. Không full-page Georgia. Workspace vẫn không serif trong orderbook, form, tabs, buttons, price axis hay dialog xác nhận; UI/Numeric requirements giữ nguyên.
- Dùng `font-variant-numeric: tabular-nums lining-nums` cho số; font Numeric cho giá, lượng, fee và IDs. Canh phải cột số, canh trái asset/network, canh theo cùng precision trong một cột.
- Giữ dấu âm và đơn vị nhìn thấy; percent cần dấu `%`, quote price ghi cặp đơn vị. Không dùng Gold cho toàn bộ con số quan trọng vì sẽ làm mọi thứ cùng nổi bật.
- Định dạng hiển thị bằng quy tắc locale nhất quán; placeholder input cho biết dấu thập phân. Không âm thầm biến dấu phẩy thành một ý nghĩa khác. Giá trị review không rút gọn `1.2K` và không mất precision mà người dùng sắp chấp thuận.
- Balance có thể mask bằng `••••`, kèm nút reveal có tên rõ. Đây là bảo vệ màn hình trước người đứng cạnh, **không phải** bảo đảm on-chain privacy.
- Địa chỉ rút gọn chỉ để scanning; cho phép copy toàn bộ và xem toàn bộ trong vùng wrap/scroll có nhãn. Asset có nguy cơ trùng symbol phải có network và identifier; không dùng tooltip làm cách duy nhất phân biệt.
- **Proposed workspace/editorial defaults**, không override current landing §4.1: prose khoảng65–72ch, không justify; heading tracking `-0.02em..0`, UI `0`, optional overline tối đa `.06em`; không uppercase paragraph/wallet address. Landing actual widths/tracking có explicit recipes, vẫn phải reflow dưới200% text và accessibility text-spacing override.

## 5. Spacing, grid và hình học

### 5.1 Scale

- **Workspace scale/reference:** `4, 8, 12, 16, 24, 32, 48, 64, 96px`, baseline4px; không source spacing-token API hoặc lý do thay landing recipes. Ít nhất8px giữa independent controls.
- **Current landing:** header gap1rem/2rem; thesis desktop gap3rem,bottom3.5rem; landscape gap `1rem clamp(1.5rem,2.5vw,2.5rem)`,padding2.75rem/2rem; plaque `clamp(1rem,2vw,1.75rem)`,plinth **positive .75rem top margin**. Desktop domains share heading/model/actor/funds subgrid rows; prefund label full actor-row basis, icon/text contained. Steps1.5rem; ecosystem top padding/margin1.75rem,columns2fr/1fr/gap2.5rem,external separator2rem; questions4rem; panorama2.5rem→1.5rem≤40rem. No uniform card abstraction/negative overlap.
- Workspace: panel padding 16–24px desktop, 16px mobile; group gap 16px, label/input gap 8px, helper gap 4–8px.
- Không kéo giãn orderbook rows để bắt chước nhịp kiến trúc; clarity của giá ưu tiên hơn khoảng thở editorial.

### 5.2 Responsive grid

**Current landing geometry — `.page-container`, `.agreement-landscape`, `.landscape-domain`, `.ecosystem-groups` and responsive CSS:**

| CSS width | Actual container / layout |
| --- | --- |
| `>70rem` | Container `min(84rem,calc(100% - 6rem))`;48px minimum gutters at16px root. Three scene tracks1fr/.86fr/1fr; source/destination share four row subgrids,terms center/evidence row5. Four captions;ecosystem2fr/1fr and network entries two columns. |
| `≤70rem` (1120px at16px root) | Container−4rem/32px gutters;hero cap38rem/40–70rem gradient56vw. Scene **stacks independently of nav**: domain≤28rem with1rem own rows,terms≤24rem,scene gap2.5rem/top2rem/plaque1.5rem,evidence labels one column. Ecosystem groups one column with1.5rem gap/horizontal separator;network max34rem/two entries columns. Captions two columns at40–70rem. |
| `≤52rem` (832px) | Native mobile nav replaces desktop;matchMedia closes hidden menu. Intro/questions one column;scene already stacked at70rem. No old52rem scene contract/26rem domains/negative plinth. |
| `≤40rem` (640px) | Container−40px/20px gutters;vertical hero/crop,15rem top/3rem bottom. Caption vertical;four steps one column1.25rem;network entries one column;panorama1.5rem. No playback controls. |

Hero min-height `min(54rem,calc(100svh - 5rem))`,≤40rem `calc(100svh - 5rem)`;content `clamp(4rem,7vh,6rem)`,copy44rem/support30rem before intermediate cap. Source action52px;icons44px;ecosystem links min44px,mark slot2.75rem,Solana .5rem padding on#101917,whole NEAR width8rem/heightauto (1440:351),Hyperliquid original square200×200/heightauto. Focus2px/offset5px;no illustration button. A1–A4 bounded proof at audit,not all-device conformance. Panorama sizes hint−48px remains unmeasured polish.

**Proposed workspace grid — không implemented landing:**

| Width | Grid / margin | Quy tắc |
| --- | --- | --- |
| `<768px` | 4 columns,16px page margin | One task column; không art background; full exact financial summary. |
| `768–1279px` | 8 columns,16–24px margin | List + task; consent sau builder, không hidden drawer. |
| `1280–1535px` | 12 columns,24px gutter | Three workspace columns theo design §7.7, không áp32px margin cho current landing. |
| `≥1536px` | 12 columns,32px gutter | Workspace max khoảng1800px; extra width không speculative panels. |

**Required reflow target:**320px/200% text + text-spacing no loss/overflow. Current bounded320/390100%/200% overrides passed after A3 grid/40cqw fix; every browser/device/state remains unqualified. Workspace form320–400px, required tables/charts may have labeled internal scroll, never unexplained page overflow. Grid/flex min-width0; exact financial descriptors/amounts must not clip.

### 5.3 Radius, borders, shadows

- **Current landing:** header-source/icon/source-button radius **2px**, icon44×44px, primary52px;1px decorative rules; focus **2px/offset5px** scoped landing/hero/footer ring. Mobile nav shadow `0 12px 32px rgb(0 0 0 / 12%)`, solid neutral surface. Existing faint rules không required control-boundary certificate; contrast phải kiểm theo meaning/state (§3.0).
- **Proposed workspace:** inputs/controls radius6px, panels/dialogs8px, artwork frame0–4px, compact badges4px, chip-only pill999px; default border1px, selection2px, focus2px/offset2px. Không sửa landing thành older workspace recipe. Panel phẳng, dialog/menu có thể shadow `0 12px 32px rgb(24 38 47 / 18%)` nhưng vẫn functional border.
- No gold bevel/heavy gilt/glass blur/floating transparent control. **Implemented architectural illustration** uses terms-plaque shadow `0 3px 0 var(--model-side), 0 10px 20px rgb(0 0 0 / 4%)`, model shadow inkopacity.07; geometric model tokens mix inherited tint75%,muted18%/28% with surface, line muted (`612–616,776–806,922–928`). Depth not on mark faces/financial controls; no third palette.

## 6. Hero và sử dụng artwork

### 6.1 Hero recipe

1. **Current hero:** approved Bellotto painting full-bleed,unchanged P2P/Zcash H1,short developing-DEX/direct-trade/exact-asset/amount/price support. **View source** → verified web repo; **The idea** → `#exchange`; explicit unavailable status. No old abstract privacy-support copy/Explore/fake Launch app. Precise caveats in short thesis/figure/FAQ sentences.
2. Selective expressive display, strong legible hierarchy, localized dark treatment phía chữ; không navy wash phủ toàn painting mất brushwork/color. Contrast đo trên actual composite ở light/dark và mobile crops, không suy token pairs hoặc sampled ratios của old hero.
3. `/art/landing/hero-{800,1660}.webp` responsive/eager; architecture vẫn nhìn thấy. Header dùng approved circular Z2Z alpha, accessible theme/mobile controls; không regenerate logo/art.
4. Mobile giữ painting backdrop, copy/CTA không clip; **một** supporting Ideal City panorama inline sau product thesis/concept diagram, no repeated artwork cards. Financial controls proposed luôn solid, không painting backdrop.
5. No art motion/parallax/carousel; reduced motion tắt smooth scrolling/hover transforms. Footer large typographic Z2Z trên dark solid, actual Exchange/Questions/GitHub links, discreet native credits drawer với original museum sources và AI/editorial-motifs-not-integrations disclosure. Không Inspiration hoặc duplicate centered CTA ending.

### 6.2 Sáu asset: usage, crop và alt

Tất cả nằm ở `public/art/`; URI render bắt đầu bằng `/art/`. Đây là thư viện **được chọn**, không là yêu cầu tải cả sáu ảnh trên landing. Nguồn exact-image bên dưới cùng [artwork catalog](./artwork.md) là điểm kiểm tra provenance; không hotlink museum image trong UI.

| Asset / kích thước | Vai trò được phép | Desktop crop / mobile treatment | Alt khi ảnh mang nội dung |
|---|---|---|---|
| [`ideal-city.jpg`](../public/art/ideal-city.jpg), 1800×664 | Renaissance source cho một supporting panorama, không privacy card | Approved adaptation derivative giữ near2.71:1 và central perspective; mobile inline, không portrait crop | “Quảng trường cân đối với kiến trúc màu ngà, đài phun nước và các nhân vật nhỏ dưới bầu trời xanh.” |
| [`bellotto-piazza-san-marco.jpg`](../public/art/bellotto-piazza-san-marco.jpg), 1263×721 | Source cho approved ecosystem hero background | Dùng latest1660×947 AI-adaptation derivative, không upscale source; full-bleed với responsive focal point/navy scrim; no pixel-original claim | “Quảng trường San Marco với các nhóm người nhỏ, dãy nhà sáng màu và tháp chuông dưới bầu trời xanh.” |
| [`canaletto-piazza-san-marco.jpg`](../public/art/canaletto-piazza-san-marco.jpg), 3971×2448 | Retained master/approved derivatives, không visible redesign landing card | Future editorial dùng near-original16:10, giữ tháp/người; mobile contain | “Người đi lại và quầy hàng trong quảng trường San Marco, phía sau là nhà thờ và tháp chuông.” |
| [`turner-venice.jpg`](../public/art/turner-venice.jpg), 1959×1461 | Retained master/approved derivatives, không recovery card | Future editorial4:3 giữ thuyền/bờ/sky; mobile contain | “Thuyền và các công trình ven kênh ở Venice trong ánh sáng vàng nhạt dưới bầu trời xanh.” |
| [`monet-garden-antibes.jpg`](../public/art/monet-garden-antibes.jpg), 3400×2418 | Retained reference, không mount redesign landing | Future editorial4:3 giữ nhà/cây/biển; mobile contain | “Ngôi nhà mái đỏ giữa cây trong khu vườn ở Antibes, phía xa là biển xanh.” |
| [`hoffbauer-world-fair-1900.jpg`](../public/art/hoffbauer-world-fair-1900.jpg), 2998×2160 | Retained reference, không mount redesign landing | Future editorial contain giữ mép/caption; không wallpaper crop | “Minh họa toàn cảnh Triển lãm Thế giới Paris 1900 với sông Seine, tháp Eiffel và các khu triển lãm.” |

**Exact-image references:** [Walters / Ideal City](https://art.thewalters.org/object/37.677/) · [Bellotto / Cleveland image](https://openaccess-cdn.clevelandart.org/1962.169/1962.169_web.jpg) · [Canaletto / Met image](https://images.metmuseum.org/CRDImages/ep/original/DP-14286-009.jpg) · [Turner / Met image](https://images.metmuseum.org/CRDImages/ep/original/DP169568.jpg) · [Monet / Cleveland image](https://openaccess-cdn.clevelandart.org/1916.1044/1916.1044_print.jpg) · [Hoffbauer / Paris Musées manifest](https://apicollections.parismusees.paris.fr/iiif/320293284/manifest).

**Caption metadata theo collection records:**

- *The Ideal City* — Florentine artist, after a design by Giuliano da Sangallo, khoảng 1480–1484; [Walters](https://art.thewalters.org/object/37.677/).
- *Piazza San Marco, Venice* — **Attributed to** Bernardo Bellotto, khoảng 1740; [Cleveland](https://www.clevelandart.org/art/1962.169).
- *Piazza San Marco* — Canaletto, cuối thập niên 1720; [Met](https://www.metmuseum.org/art/collection/search/435839).
- *Venice, from the Porch of Madonna della Salute* — Joseph Mallord William Turner, khoảng 1835; [Met](https://www.metmuseum.org/art/collection/search/437853).
- *Gardener’s House at Antibes* — Claude Monet, 1888; [Cleveland](https://www.clevelandart.org/art/1916.1044).
- *Vue d’ensemble de l’exposition de 1900.* — Fédor Hoffbauer; [Paris Musées](https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/vue-d-ensemble-de-l-exposition-de-1900-0). Record chưa cung cấp creation date; caption chỉ ghi cảnh Triển lãm 1900, không tự thêm “painted in 1900”.

- Sáu exact images đã chọn có CC0/Open Access provenance theo nguồn museum; giữ source/rights/credit trong catalog dù CC0 không yêu cầu attribution pháp lý. Crop và alt là **đề xuất của Z2Z**, không diễn giải do museum cung cấp.
- Alt mô tả những gì nhìn thấy, không “a private exchange” hay “financial freedom”. Caption giữ title, attribution đúng và ngày; không nhồi tất cả metadata vào alt.
- Nếu ảnh chỉ trang trí và caption/text liền kề đã truyền cùng nội dung, dùng `alt=""`; tránh screen reader đọc hai lần. Nếu một ảnh là link, accessible name phải nói đích đến chứ không chỉ tên file.
- Không remote background image, không autoplay gallery. Cấp width/height để giữ chỗ; chỉ hero được ưu tiên tải, ảnh dưới fold lazy-load. Responsive variants có thể tạo từ file gốc, không upscale Bellotto 1263px thành hero 4K.
- `public/stock-exchange-1907.jpg` **không thuộc sáu asset được chấp thuận ở đây**: đã tìm provenance LOC nhưng chưa kiểm chứng trực tiếp exact-image rights. Không mặc nhiên cho phép dùng vì năm 1907 hay vì ảnh tải được.

## 7. Landing responsibilities và proposed DEX components

### 7.0 Current landing, không component-library API

Canonical ownership [design §2.1.1](design.md#landing-components): root initial/system theme; Home theme/menu/hero/FAQ/footer; imported landing-only default-export `ProtocolConcept` owns complete figure/captions/scope + enhancement/lifecycle. Internal module export isn't public SDK/API. No props/chain selector/registry/financial loader. Exact colors/fonts/geometry/focus above.

Leaf uses static labels/local assets/existing theme and local `idle/playing/ended`, not financial states/balances. Complete ordered HTML/scope/role-context remain;SVG decorative. [Design](design.md#agreement-landscape) owns composition/behavior,[artwork](artwork.md#functional-protocol-marks) authentic files/rights,[audit](design-audit.md) exercised latest checks/A1–A4 history. **§§7.1–7.5 are proposed financial workspace, not shipped components.**

### 7.1 Navigation, market selector và network badges

- Tabs `P2P` / `RFQ` dùng UI 14–16px/600. Active có underline 2px + nhãn rõ; Gold text chỉ trên Navy, Navy trên Paper. Không dùng một tab `Cross-chain` như một thị trường độc lập.
- Header/selector thể hiện asset + network + venue khi relevant. Network badge chữ đầy đủ hoặc abbreviation có expansion nhìn thấy; local/test môi trường có nhãn riêng, không chỉ một chấm màu.
- Asset symbol không đủ định danh. Dòng chọn token phải phân biệt exact asset, network, native/token type và identifier khi có. `NATIVE` không bị đổi thành USDC cho đẹp mockup.
- HyperCore badge ghi external venue; không kèm shield “Private” mặc định. Không dùng trạng thái wallet connected thay cho network supported hoặc route available.

### 7.2 Tables, orderbook và quote rows

- Nền Navy phẳng, chữ Paper; numeric cells Numeric 14px trở lên, tabular, canh phải. Header giữ rõ `Bid` / `Ask`, price units, amount và limits; hàng 40px desktop khi chỉ đọc, ít nhất 44px nếu là target bấm.
- P2P listing là offer/limit có điều kiện, không tạo cảm giác toàn bộ là exchange depth đã live. Quote row có expiry, venue và trạng thái; không giả một giá streaming khi chưa có data source.
- Trên Paper, bid/positive có thể dùng Success, ask/negative Danger. Trên Navy không dùng hai màu này làm chữ giá: giá Paper, cột/nhãn `Bid`/`Ask` rõ; semantic fill chỉ là bổ trợ.
- Depth bars nếu có là lớp nền phụ, không ảnh/texture. Cell chữ được giữ trên nền solid Navy hoặc vùng riêng; không đẩy tint dưới chữ rồi mặc định ratio vẫn đúng.
- Hover/selected không thay chữ bằng muted tối: giữ Paper; thêm marker Gold + label/selected state. Row action phải là button/link focusable thực, không chỉ clickable `<div>`.
- Loading dùng placeholder tĩnh và nhãn; empty/unsupported/error có lời giải thích và action phù hợp. Không điền số 0 để giả một market tồn tại; sample data bắt buộc nhãn `Illustrative — not live` cạnh bảng.

### 7.3 Charts

- Canvas Navy hoặc Paper đồng nhất; không tranh, parchment, gradient glow hay Gold ornamental frame. Price/time labels ít nhất 14px, units và timezone đọc được.
- Line chart trên Navy: Paper solid và Gold dashed, có legend bằng chữ; cả hai đủ contrast. Trên Paper: Navy và Danger, cùng distinction solid/dashed. Không dùng Gold/Paper hoặc Success/Danger-on-Navy làm đường dữ liệu.
- Candles trên Navy: outline Paper ít nhất 2px; tăng/giảm phân biệt hollow/filled, nhãn/legend và direction, không chỉ Success/Danger fill. Semantic fill có thể thêm nhưng không phải boundary hoặc cách duy nhất hiểu dữ liệu.
- Gridlines trang trí được nhẹ; crosshair/data markers/selected points là thông tin nên đạt 3:1. Tooltip nền solid, chữ theo surface recipe, không opacity/backdrop blur.
- Có tóm tắt bằng chữ hoặc bảng tương ứng cho dữ liệu chính; không yêu cầu hover để biết latest price, thay đổi, source và timestamp. Không vẽ chart giả khi chưa có dữ liệu.

### 7.4 Forms, buttons và review dialogs

- Input/select tối thiểu cao 44px; UI/amount input tối thiểu 16px; label luôn nhìn thấy, không chỉ placeholder. Nền cùng surface, border functional; font Numeric cho amount.
- Asset/network/limit/fee/quote expiry hiển thị trước action. Giá trị readonly vẫn đọc được và được gắn nhãn; không trông giống disabled vì dữ liệu đó cần được review.
- Primary CTA: Gold/Navy, border Navy trên Paper; height ≥44px, horizontal padding 16–24px, UI 14–16px/600. Hover giữ cặp màu, thêm underline/biên phù hợp; pressed chỉ dịch ≤1px nếu không reduced motion.
- Secondary: text/border theo surface; link được underline khi nằm trong prose. Destructive: Danger/Paper, trên Navy có biên Paper; nhãn động từ cụ thể như `Cancel offer`, không icon đỏ không tên.
- Disabled: dùng disabled semantics và lý do nằm cạnh; giữ chữ đọc được, không opacity cả control. Không biến trạng thái `Unsupported route` thành một nút có vẻ sắp thực hiện được.
- Busy: nhãn `Requesting quote…` / `Awaiting wallet approval…`; giữ chiều rộng để layout không nhảy, chống nhầm sang action khác. Spinner nhỏ chỉ bổ trợ, không thay nội dung.
- Dialog review trading nền Navy/Paper, max-width khoảng 640px, padding 24px desktop/16px mobile, content scroll khi cần. Overlay Ink alpha chỉ dim backdrop; dialog content luôn solid. Focus ring không bị clipping.
- Review đặt exact send/receive asset + network, venue/route, amounts, fee, price/limit, expiry và privacy boundary ở trên CTA; nhấn mạnh việc ký khác settlement hoàn tất. Không confetti hay màu Success ở bước chỉ mới wallet approval.
- Trên mobile, dialog/card đủ vùng scroll và không đè CTA lên fee/risk text; thao tác đóng luôn có accessible name. Không dùng artwork làm background dialog hoặc order entry.

### 7.5 Privacy boundaries và status

Privacy là **thông tin về từng bước**, không là mood. Badge dùng icon + text + disclosure nhìn thấy; không diễn giải màu amber hay shield là “100% private”.

| Nội dung / trạng thái | Recipe | Ý nghĩa hiển thị |
|---|---|---|
| `Shielded source` | Neutral Paper text/functional border trên Navy; Navy trên Paper | Chỉ phạm vi nguồn shielded đã xác minh; nêu bước nào vẫn lộ thông tin |
| `Public destination` / `External venue` | Neutral, cùng mức prominence với shielded | Không làm mờ public boundary để ưu tiên lời hứa riêng tư |
| `Local` / `Test` / `Unsupported` | Neutral badge với nhãn đầy đủ | Không Gold CTA styling và không giả live support |
| Quote requested / awaiting response | Gold/Navy badge + text | Đang chờ; không lệnh đã khớp |
| Quote expired / rejected | Neutral hoặc Danger/Paper khi cần action | Nêu lý do/expiry; không giữ CTA giá cũ như còn hiệu lực |
| Awaiting signature / submitted / settling | Gold/Navy badge, các bước có tên khác nhau | Wallet approval, broadcast và settlement là các mốc khác nhau |
| Confirmed / settled | Success/Paper solid badge + icon | Chỉ khi có evidence đúng mốc; trên Navy có border Paper |
| Failed / recovery available / recovery required | Failed dùng Danger/Paper; recovery chưa thực hiện dùng Gold/Navy có điều kiện được nêu rõ | Không gộp thành “Cancelled”; không nói “Refunded” trước khi có transfer/evidence đúng |
| `EvidencePending` / unsupported evidence | Neutral hoặc Gold/Navy + lời giải thích | Thiếu evidence giữ pending, không tự refund khi timeout; nêu đúng blocker, không tô Success |

Thứ tự/logic trạng thái thuộc design.md và dữ liệu thực, không do màu quyết định. Tách riêng **connection**, **quote**, **settlement** và **privacy**: một chấm xanh “Connected” không làm quote, funds hay privacy trở thành an toàn. Error helper trên Navy dùng Paper text + error icon/badge có contrast; Danger text trực tiếp trên Navy bị cấm.
Nhãn trên là visual vocabulary, không tạo thêm protocol states. Native flow không phải generic swap chỉ cần chữ ký rồi chờ: design.md quy định review prefunding/arming, independent verification và release authorization. Nếu thực sự có refund/return transfer ở route đủ điều kiện, hiển thị `Refunded` bằng Success/Paper chỉ sau evidence của transfer; recovery có thể cần keys, witnesses, history, gas và công cụ còn hiệu lực, không được hứa deadline cố định.

## 8. Motion, keyboard và accessibility

### 8.1 Motion

- **Current landing:** smooth scroll/source-background180ms ease/native-disclosure-icon180ms ease retained; one automatic-once4800ms WAAPI illustration emphasis,no painting motion. Reduced-motion CSS1631–1646 disables scrolling/transitions/CSS animations/emphasis; leaf preference listener cancels active WAAPI to ended complete still. No controls to hide or resume.
- **Proposed ordinary workspace transitions:**150–200ms `ease-out` cho border/underline/disclosure/dialog appearance; không counting money, bounce CTA, parallax hero, chart pulse, marquee. Pending có label/timestamp; spinner chỉ supplementary và tắt rotation khi reduced motion. Không style rule tạo actual financial progression.
- **Reduced-motion contract:** nonessential spatial/scroll/animation effects off, meaning/text remains instant and complete. Implemented scoped illustration §8.1.1 stays entirely still under reduce, not shortened playback or a manual-step UI. Painting always static.

<a id="illustration-motion"></a>

#### 8.1.1 Agreement landscape — current motion and scoped acceptance

**Authorized/implemented; bounded runtime evidence, not performance certification.** Canonical [behavior](design.md#illustration-interface) and [audit](design-audit.md) avoid a second financial/animation API.

- Complete SSR still/four ordered captions/scope/context. **No Play/Pause/Resume/Replay or timing toolbar.**12 native WAAPI emphasis/trace tracks for one **4800ms** run; document visible,reduced-motion off,WAAPI/observer supported,scene intersecting and source model≥25% vertically visible/horizontally onscreen. Successful start latch prevents restart for mounted leaf. Terms0–960ms→prefund960–2025.6→source2025.6–3091.2→evidence3091.2–3945.6→allocation3945.6–4800;last-caption3091.2–4800. Presentation windows not settlement/recovery ETA;no timer/RAF/loop/financial success.
- Dashed6/6 **Evidence** muted1.5px/non-scaling,active3px ink;solid local Funds2px/local routes1.75px. Upright labels/authentic flat marks,no color-only meaning. Text/stroke/focus acceptance≥4.5/3/3 remains actual-state requirement,not palette certificate.
- Active offscreen/hidden/resize/reduce or natural finish **cancels all animations to ended**,not paused;return/re-entry/preference restoration never restarts latched run. Unmount cancels/disconnects/removes listeners;unsupported/error retains full still. Latest owner exercised natural/offscreen/re-entry/reduce,active1440→1280resize and simulated hidden/visible-property-event cleanup:ended0animations/no restart. **Real background-tab timing/error/unsupported API matrix remains unmeasured.** No per-frame aria-live/focus trap/pointer capture.
- Scene stacks≤70rem,independent52rem nav;caption/network entries one column≤40rem. Desktop shared-row subgrid,positive .75rem plinth gap/full-row prefund text prevent measured overlap. Latest320/390100%/200% declared spacing override stayed within viewports;targeted child collision matrix/A4 at audit,not all-pixel/device conformance.
- **Implementation limit:** native SVG/CSS/WAAPI,no new runtime dependency/WebGL/video/Lottie/motion library/wallet/RPC/tracker/live requests. New unchanged Solana/NEAR/Hyperliquid assets join existing Zcash,own coin/art/fonts unchanged. No retained paused work/idle frame loop;ended cancels all. Authentic files/user local-preview direction not trademark/legal clearance;human policy/permission review before public deployment.
- **Unmeasured performance acceptance:** LCP≤2.5s,CLS≤.1,INP≤200ms per[Web Vitals](https://web.dev/articles/vitals). Layout-shift,FPS/GPU/battery/bundle/cold-cache loading need actual device/network/cache/before-after conditions. Native APIs/7.79s build/bounded lifecycle don't prove CWV/field75th-percentile/performance superiority;no telemetry added.

### 8.2 Interaction và đọc hiểu

- Target tối thiểu **44×44px** cho touch và icon buttons; label/target không chồng nhau. Cỡ 14px của chữ không đồng nghĩa target 14px.
- Mọi control dùng native semantics nếu đủ: button, link, input, table. Keyboard có thứ tự hợp lý; skip link tới workspace/main, focus luôn thấy.
- **Focus:** current landing2px/offset5px with scoped neutral/hero/footer rings (§§3.0,5.3). Proposed workspace Navy2px/offset2px on Paper, Gold2px/offset2px on Navy; Gold CTA ring Navy on Paper/Paper on Navy, offset actual surface. No clipped ring or removed outline without equivalent.
- Actual landing menu/FAQ/credits are **nonmodal native disclosures**, no trap. Home owns Escape/outside/section focus and52rem visible-nav state handling; A2 resolved within recorded390→1440→390/keyboard checks. Proposed financial dialogs trap only where modal, return visible trigger; toast never steals focus. No hover-only essential action.
- Trạng thái cần text/icon, không chỉ red/green. Icon-only action có accessible name; tooltip không chứa duy nhất fee, route risk, full network hay privacy caveat.
- Status update dùng live region phù hợp cho mốc quan trọng; không đọc lại toàn bộ orderbook mỗi tick. Lỗi gắn trực tiếp với field và có summary khi người dùng submit.
- 200% text zoom vẫn đọc được, 320px không page overflow; prose/controls reflow, data table có vùng scroll riêng. Không clip giá trị số hoặc labels để giữ “đẹp”.
- Text contrast ≥4.5:1 cho cỡ thường; essential icons/borders/series ≥3:1. Kiểm tra hover/focus/selected/error riêng trên nền thực; những token ratios đã tính không thay thế kiểm tra màn hình hoàn chỉnh.

## 9. Zcash identity và brand honesty

- Gợi liên hệ Zcash bằng **user control, thông tin privacy boundaries, lựa chọn disclosure và amber/near-black restraint**. Navy/Ink vẫn là palette Z2Z; không đổi toàn bộ product thành một Zcash official skin.
- Tên `ZEC` và `Zcash` chỉ dùng đúng asset/protocol/context. Không dựng logo Zcash mới, không tự lấy official marks làm logo Z2Z, không tạo huy hiệu `Zcash approved`, `official partner` hoặc `privacy guaranteed` khi không có quyền/evidence.
- Không copy artwork, typography lockup, composition, campaign slogans hay poster Colosseum. World Fair là tham chiếu lịch sử từ Hoffbauer có nguồn độc lập, không là một campaign asset được cho phép tái dùng.
- Không dùng hình shield để thay caveat về public destination, external venue, matching leakage hay route chưa sẵn sàng. Nếu user chọn reveal, chữ/nút giải thích thứ được reveal và cho ai; không hứa “invisible” cho tất cả giao dịch.
- “Renaissance Exchange” là working visual direction, không phải tuyên bố affiliation với museum, nghệ sĩ, Colosseum hoặc tổ chức Zcash.
- **Artwork/identity update 2026-10-03:** các bản đầu `*-painting-edit.png` giữ như historical drafts. Người dùng sau đó chọn **own Z2Z symbol không wordmark**: hai Z đối xứng + amber bridge + vòng coin. Theme assets [light transparent](../public/brand/z2z-logo-light-transparent.png) và [dark transparent](../public/brand/z2z-logo-dark-transparent.png); light Navy/Gold, dark Paper/Gold, cùng alpha/silhouette. Preview nền chỉ để xem, không dùng thay alpha. Bộ mới `*-z2z-ecosystem.png` upload actual original painting, official logo-reference sheet và approved Z2Z PNG riêng; dùng symbols Zcash/Hyperliquid/NEAR/Base/Raydium/USDC/Succinct/NEAR Intents theo documented status, không partner/support badges. Source/role/mark caveats trong [artwork catalog](artwork.md#logo-z2z-và-bộ-ecosystem-sau-duyệt--2026-10-03). Base giữ current flat blue Square, không gold bevel; AI-rendered third-party marks không canonical logos hoặc blanket permission. Primary Renaissance vẫn Ideal City; không Colosseum logo/claim “không AI”. Own logo là user-selected raster design, chưa SVG master/trademark clearance.
- [Artwork](artwork.md#functional-protocol-marks) owns unchanged Zcash/Solana/whole NEAR/Hyperliquid files,hashes,policy conflicts/limits;painted AI motifs remain noncanonical. Zcash source link/neutral EVM glyph retained;isolated Solana candidate/NEAR research/Hyperliquid external-testnet links are below scope,not settlement-plane/partner/support logos. NEAR white and Hyperliquid mint are actual official dark-surface variants,no recolor/crop/bevel/trace. Local-preview identification authorization is not commercial trademark clearance;human terms/permission review before deployment. No registry/Inspiration footer.


## 10. Do / Don’t để quyết định nhanh

| Do | Don’t |
|---|---|
| Contemporary neutral landing + historical art; functional Navy ở DEX | Historical-institution paper/gilt skin hoặc orderbook/form lên painting |
| Bellotto ecosystem hero + một Ideal City panorama; captions đúng period | Serial painting cards hoặc gọi Monet/Turner/Bellotto/World Fair là Renaissance |
| Source action rõ, sans controls; Gold/Navy recipes dành workspace proposed | Implied published sibling code, gold body text trên cream hoặc Paper text trên Gold |
| Contrast theo actual landing colors/composite; workspace status có label/icon | Dùng old reference ratios như certification cho redesign |
| Exact asset + network + route/venue | Một symbol/logo che việc native, public hay external |
| RFQ như lựa chọn trong DEX; settlement có nhãn | Cross-chain thành một sàn riêng hoặc HyperCore mặc định private |
| Numbers tabular/monospace, units và precision rõ | Script numerals, count-up profits, chart không source |
| Mobile hero backdrop readable; supporting panorama inline | Crop Ideal City portrait hoặc painting sau financial controls |
| Copy thật về limitation và local/test status | Mock live quotes, universal privacy, fake Zcash endorsement |

## 11. Acceptance checklist cho landing và workspace

**Evidence boundaries:** current authorized build/TypeScript/Node24 SSR + bounded owner browser/motion/reflow/text-line composite proofs at [audit](design-audit.md); historical failures retained and A1–A3 resolved only within that scope. New H1 glyph/full-AT/every control contrast, CWV/performance and financial workspace remain unqualified. Checklist combines continuing landing targets with proposed workspace requirements, not blanket PASS; unchecked items aren't a declaration the authorized landing is unimplemented.

- [ ] Landing neutral contemporary light/dark, workspace Navy/Paper; no artwork behind chart/table/form/dialog/fee review.
- [ ] Workspace reference tokens đúng §3; landing colors đo riêng; no gold-on-cream body text và status contrast đúng recipe.
- [ ] Normal text ≥4.5:1, essential graphics/controls ≥3:1 ở actual states; alpha/ảnh/màu mới tính riêng.
- [ ] Landing local Instrument Serif selective display/Manrope sans + actual OFLs; workspace controls sans≥14px, amounts≥16px, IDs/values tabular mono; units/signs/precision giữ nguyên.
- [ ] Geometry/focus theo **surface-owned** §§4–5,44px targets; visible rings; keyboard nonmodal menu/FAQ/credits, financial dialog trap chỉ nơi modal; A2 responsive hidden-state handling correct.
- [ ] 320px/200% text **và text-spacing override** không mất copy/CTA/risk/wordmark; A3 footer reflow và A1 tablet hero copy composite fixed/remeasured; supporting panorama inline, no page overflow.
- [ ] Bellotto approved hero + một Ideal City panorama; source CTA/GitHub đúng verified public web repo; native three questions/credits, links/captions đúng nguồn; no Inspiration/fake metrics/partner wall/duplicate CTA.
- [ ] Bellotto giữ attribution qualifier; ảnh World Fair không bị gọi là Renaissance hoặc copy campaign Colosseum; stock-exchange-1907 chưa được dùng khi rights chưa rõ.
- [ ] Bid/Ask/limits/quote expiry/network/venue/settlement states đọc được không cần màu, hover hay icon-only hint.
- [ ] Shielded source, public destination và external venue có prominence tương đương; official marks chỉ applicable policy/eligible role-status use, required source-identification link và no implied affiliation/production support; không privacy/trustless vượt evidence.
- [ ] State quote/signature/submitted/settling/settled/refund phân biệt; chưa live có nhãn rõ, không chart/quote giả.
- [ ] Current180ms ease/smooth-scroll/reduced-motion versus proposed workspace150–200ms separately scoped;4800ms automatic-once/no-controls figure,complete SSR/no-JS/reduced/mobile,eligible-entry/latch/end-cancel lifecycle,Evidence≠Funds,no burn-mint,role-qualified authentic ecosystem groups and A4 nonoverlap. No new runtime dependency/WebGL;unmeasured performance/rights never become results.

## 12. Nguồn và giới hạn bằng chứng

- [Walters — The Ideal City](https://art.thewalters.org/object/37.677/): title, attribution và CC0 cho exact images; attribution phải theo record hiện hành.
- [Cleveland Open Access](https://www.clevelandart.org/open-access): CC0 cho ảnh Open Access; Bellotto và Monet exact-image references ở §6 và record đầy đủ trong [artwork catalog](./artwork.md).
- [Met Collection API](https://metmuseum.github.io/) và [Open Access](https://www.metmuseum.org/hubs/open-access): provenance public-domain/Open Access của exact Canaletto/Turner images; catalog ghi object record tương ứng, không suy image rights từ metadata CC0 đơn thuần.
- [Paris Musées IIIF manifest](https://apicollections.parismusees.paris.fr/iiif/320293284/manifest): exact Hoffbauer image có rights CC0 Paris Musées / Musée Carnavalet.
- [WCAG 2.2 — Contrast minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [non-text contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast), [relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance), [text spacing](https://www.w3.org/TR/WCAG22/#text-spacing): contrast method/thresholds và text-spacing acceptance. [Web Vitals](https://web.dev/articles/vitals), published2020-05-04/updated2024-10-31/retrieved2026-10-04: future LCP/CLS/INP targets và field75th-percentile distinction—not measured current benchmarks. [Reference ledger](design-audit.md#reference-ledger) preserves observed versus source-study scope.

Artwork rights/history canonical;aesthetic recipes not museum claims;opaque-pair/prior-composite samples not all-state certificate. Audit separates prior A1–A3/manual9s proof from latest automatic4800ms/layout/spacing/loaded-role-marks checks/A4. Financial workspace/gates,global accessibility/CWV/every-glyph contrast/real background-tab/deployment and exact-use trademark clearance remain unqualified. Docs worker only reads/synchronizes,no product edits/checks/commit/push/deploy.
