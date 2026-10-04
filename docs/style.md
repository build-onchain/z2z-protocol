# Z2Z — Visual style: Renaissance Exchange

## 1. Mục đích, trạng thái và phạm vi

Tài liệu phân biệt **landing đã được duyệt để triển khai** và trading workspace còn proposal. Z2Z là tên sản phẩm được đề xuất cho DEX của Ziquid; không tự diễn giải acronym. Landing dùng English public-facing copy; không wallet/trading implementation, không thêm dependency. Trạng thái runtime/kiểm chứng cụ thể được ghi sau smoke, không suy từ design.

- [Concept](./concept.md): ý tưởng, định vị và giới hạn lời hứa của sản phẩm.
- [Design](./design.md): cấu trúc màn hình, hành trình và ưu tiên tương tác.
- [Artwork catalog](./artwork.md): hồ sơ nguồn, attribution, ngày, image rights và provenance của từng ảnh. Bảng asset bên dưới xác định cách sử dụng, không thay thế catalog.

**Ý định:** mang trật tự, không gian công cộng và quyền chủ động của con người vào một giao diện giao dịch đọc được, không biến sàn thành một bức tranh. Landing/editorial tạo cảm giác quảng trường sáng, kiến trúc ngà, bầu trời xanh; trading workspace là công cụ tài chính Navy, rõ giá, mạng, rủi ro và trạng thái.
Thông điệp landing đề xuất theo concept: **“A new renaissance for open markets.”** Chỉ dùng như narrative; luôn đặt lời giải thích chức năng và giới hạn route gần CTA, không biến tagline thành chứng nhận privacy/settlement đã đạt.

**Bất biến sản phẩm:** P2P market là trung tâm; RFQ là phương án trong cùng DEX. Same-chain/cross-chain mô tả settlement, không phải hai thị trường mới. HyperCore là external spot venue do người dùng chọn, không mặc nhiên private. Native route đầu tiên được chọn là shielded Ironwood ZEC → một tài sản EVM **NATIVE** trên mạng local; còn chưa hoàn chỉnh. Không minh họa như ZEC/USDC đã hoạt động, live Solana, universal privacy hoặc trustless settlement. Strict private matching còn bị chặn về mặt cấu trúc; style không được che khuất giới hạn đó bằng hình ổ khóa hay huy hiệu an toàn.

## 2. Hướng nghệ thuật và tính chính xác lịch sử

### 2.1 Primary: Renaissance thực sự

**The Ideal City**, khoảng 1480–1484, Walters Art Museum, là tác phẩm chủ đạo: bố cục phối cảnh, quảng trường, kiến trúc cân đối, người nhỏ trong một không gian lớn. Credit dùng **Florentine artist, after a design by Giuliano da Sangallo** theo trường attribution hiện hành của collection; không khẳng định vô điều kiện tác giả Fra Carnevale dựa trên tiêu đề trang cũ.

Diễn giải thiết kế của Z2Z là **[SUY LUẬN]**: nhịp cột gợi grid, quảng trường gợi nơi gặp gỡ, người trong cảnh gợi agency. Không nói nghệ sĩ đã mô tả permissionless markets, Zcash hay privacy. Tranh có bối cảnh lịch sử về quyền lực/đức hạnh, không phải bằng chứng cho một tuyên bố tài chính hiện đại.

### 2.2 Secondary: ghi đúng thời kỳ, không gọi tất cả là Renaissance

| Nhóm | Vai trò | Quy tắc lịch sử |
|---|---|---|
| Attributed to Bernardo Bellotto và Canaletto, Venice thế kỷ XVIII | Quảng trường có người, trao đổi, kiến trúc sáng; ảnh phụ cho landing/editorial | Venetian vedute thế kỷ XVIII, không phải Renaissance; giữ qualifier “Attributed to” của Bellotto |
| J. M. W. Turner, Venice thế kỷ XIX | Ánh sáng, nước, khoảng trời; bài viết giải thích kết nối | Romantic light, không phải Renaissance; không dùng sương sáng để gợi settlement mơ hồ |
| Claude Monet, Antibes, 1888 | Khoảng nghỉ editorial, bảng màu thiên nhiên | Impressionism, không phải Renaissance; không phải minh họa thị trường |
| Fédor Hoffbauer, cảnh World Fair 1900 | Trang lịch sử/cộng tác/khả năng kết nối, không gian đô thị | Belle Époque / World Fair imagery, không phải Renaissance; 1900 là năm sự kiện được mô tả, không là creation date đã xác minh |

Primary nhận diện vẫn là The Ideal City. Không đổi hero thành một slideshow sáu phong cách. Secondary là thư viện biên tập, không bắt buộc xuất hiện cùng lúc hoặc trên mọi trang.

### 2.3 Ngôn ngữ thị giác

- **Dùng:** ivory phẳng, Navy trầm, amber tiết chế, kiến trúc rõ, đường biên có mục đích, nhiều khoảng thở trên landing và mật độ hợp lý trong workspace.
- **Không dùng:** neon, aurora/crypto gradients, glow quanh giá, texture giấy cũ trên bảng lệnh, faux-marble controls, đồng xu 3D, chữ script, khung Baroque, thị trường giả thành dòng người đang giao dịch.
- Xanh trời đến từ tranh, không thêm một màu brand xanh cyan mới. Gold là điểm nhấn hành động/selection, không là “lợi nhuận” hay “private”.

## 3. Color tokens và surfaces

### 3.1 Bảy token gốc cố định

| Token | Giá trị sRGB | Mục đích |
|---|---|---|
| `--z2z-paper` | `#F4EBDD` | Landing, editorial, chữ trên Navy, thẻ status có nền sáng |
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
  --z2z-font-editorial: Georgia, "Times New Roman", serif;
  --z2z-font-numeric: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}
```

Đây là ví dụ token cho triển khai sau, không phải code đã áp dụng vào app. Không tải font từ CDN và không thêm font/UI package chỉ để đạt hướng này.

### 3.2 Surface recipes

| Surface | Nền / chữ | Biên và hierarchy |
|---|---|---|
| Landing/editorial | Paper / Ink; supporting text Muted | Viền control Muted; card phân nhóm bằng spacing và divider nhẹ |
| Trading workspace | Navy / Paper | Panel cùng Navy, phân nhóm bằng khoảng cách và divider; Ink không đủ phân biệt Navy để làm biên |
| Navigation dark | Navy / Paper | Selected text Gold + underline 2px; unselected vẫn Paper |
| Primary action | Gold / Navy | Trên Paper có viền Navy 1px để boundary không dựa vào Gold/Paper |
| Secondary action | Trong suốt, chữ và viền Navy trên Paper; Paper trên Navy | Không thay bằng Gold text trên Paper |
| Error / confirmed chip | Danger hoặc Success solid / Paper | Trên Navy thêm biên Paper để đọc được ranh giới; kèm icon và nhãn |
| Pending / attention chip | Gold / Navy | Trên Paper thêm viền Navy; chữ mô tả điều đang chờ |

Trading light variant, nếu một màn hình cần dùng, dùng đầy đủ recipe Paper/Ink, không đảo từng ô ngẫu nhiên. Landing dark section chỉ là vùng Navy/Paper riêng có padding; không dùng dark scrim để hợp thức hóa text nằm trên tranh.

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

Text thường cần ≥4.5:1; large text cần ≥3:1; thông tin đồ họa/biên control cần ≥3:1 với nền liền kề. Không dựa vào ngoại lệ large text để dùng một cặp có ratio <3. Alpha, blend, ảnh, hover hoặc màu mới đều phải tính lại. Các số trên xác nhận token pairs, **không xác nhận toàn bộ UI accessibility**; bounded landing smoke ghi ở [design §2.1](design.md#21-landing--giải-thích-trước-không-giả-một-sàn-live).

## 4. Typography và độ rõ của số

| Role | Font | Desktop / mobile | Weight / line-height |
|---|---|---|---|
| Landing H1 | Editorial | 48–64px / 32–40px | 400 / 1.08–1.15 |
| Editorial H2 | Editorial | 32–40px / 28–32px | 400 / 1.2 |
| Editorial H3 | Editorial | 24–28px / 22–24px | 400 / 1.25 |
| Workspace title | UI | 24px / 20px | 600 / 1.3 |
| Panel title | UI | 16–18px | 600 / 1.4 |
| Body / explanation | UI | 16px | 400 / 1.55 |
| Control / table / badge | UI; numeric cells dùng Numeric | **Ít nhất 14px** | 400; label/action 600 / 1.4–1.5 |
| Caption / timestamp / helper | UI | **Ít nhất 14px** | 400 / 1.5 |
| Main amount / quote value | Numeric | 24–28px / 22–24px | 500 / 1.3 |
| Address / transaction ID | Numeric | 14px | 400 / 1.5 |

- Chỉ editorial headings dùng serif. Không serif trong orderbook, form, tabs, buttons, price axis hay dialog xác nhận.
- Dùng `font-variant-numeric: tabular-nums lining-nums` cho số; font Numeric cho giá, lượng, fee và IDs. Canh phải cột số, canh trái asset/network, canh theo cùng precision trong một cột.
- Giữ dấu âm và đơn vị nhìn thấy; percent cần dấu `%`, quote price ghi cặp đơn vị. Không dùng Gold cho toàn bộ con số quan trọng vì sẽ làm mọi thứ cùng nổi bật.
- Định dạng hiển thị bằng quy tắc locale nhất quán; placeholder input cho biết dấu thập phân. Không âm thầm biến dấu phẩy thành một ý nghĩa khác. Giá trị review không rút gọn `1.2K` và không mất precision mà người dùng sắp chấp thuận.
- Balance có thể mask bằng `••••`, kèm nút reveal có tên rõ. Đây là bảo vệ màn hình trước người đứng cạnh, **không phải** bảo đảm on-chain privacy.
- Địa chỉ rút gọn chỉ để scanning; cho phép copy toàn bộ và xem toàn bộ trong vùng wrap/scroll có nhãn. Asset có nguy cơ trùng symbol phải có network và identifier; không dùng tooltip làm cách duy nhất phân biệt.
- Body editorial tối đa 65–72ch; không justify. Letter spacing heading từ `-0.02em` đến `0`, UI `0`; overline nếu thật sự cần tối đa `0.06em`, không uppercase toàn bộ paragraph hay wallet address.

## 5. Spacing, grid và hình học

### 5.1 Scale

- Space tokens: `4, 8, 12, 16, 24, 32, 48, 64, 96px`. Baseline 4px; 8px là khoảng tối thiểu giữa hai controls độc lập.
- Landing section: padding dọc 64–96px desktop, 40–48px mobile; text/art gap 32px desktop, 24px mobile.
- Workspace: panel padding 16–24px desktop, 16px mobile; group gap 16px, label/input gap 8px, helper gap 4–8px.
- Không kéo giãn orderbook rows để bắt chước nhịp kiến trúc; clarity của giá ưu tiên hơn khoảng thở editorial.

### 5.2 Responsive grid

| Width | Grid / gutter | Quy tắc |
|---|---|---|
| `<768px` | 4 columns, gutter 16px, page margin 16px | Một luồng dọc; text trước figure; không mobile art background |
| `768–1279px` | 8 columns, gutter 24px, margin 24px | Compact workspace; không ép ba cột dưới min-width hữu ích |
| `≥1280px` | 12 columns, gutter 24px, margin 32px | Workspace ba cột theo design.md; landing centered |
| `≥1536px` | 12 columns, gutter 24–32px | Expanded workspace, không phóng font/bảng theo tỷ lệ màn hình |

Landing content max-width 1280px, editorial prose 72ch. Workspace có thể dùng chiều ngang còn lại; giữ form khoảng 320–400px và dành rộng hơn cho bảng/chart, theo design.md. Component phải có `min-width: 0` khi nằm trong grid/flex. Không phát sinh page-level horizontal scroll ở 320px; bảng có nhiều cột được scroll trong vùng được gắn nhãn riêng.

### 5.3 Radius, borders, shadows

- Controls/inputs: radius 6px; panels/dialogs: 8px; artwork frame: 0–4px; compact informational badges: 4px; pill 999px chỉ cho chip nhỏ, không mọi card/button.
- Border mặc định 1px; selected indicator 2px; focus ring 2px với offset 2px. Dùng recipes contrast ở §3, không border Ink-on-Navy.
- Panel phẳng; không shadow ở mỗi hàng, ô nhập hay card trading. Dialog/raised menu có thể dùng `0 12px 32px rgb(24 38 47 / 18%)` và **vẫn có functional border**. Shadow không thay thế boundary.
- Không inset gold bevel, heavy gilt frames hay glass blur. Floating element phải dùng nền solid để tránh contrast phụ thuộc vào nội dung phía sau.

## 6. Hero và sử dụng artwork

### 6.1 Hero recipe

1. **Override được người dùng duyệt 2026-10-04:** first-image Bellotto ecosystem làm hero background full-bleed, copy/CTA trên ảnh. Quy tắc cũ solid-copy-only không còn áp dụng cho hero landing; vẫn bắt buộc với financial controls và các artwork cards.
2. Hero đọc bằng serif heading lớn “A new renaissance for open markets.”, supporting copy sans, ivory text và Gold/Navy CTA. Navy scrim kiểm soát vùng chữ và đáy, không blur/tint cả painting thành wallpaper mất chi tiết. Contrast phải đo trên background sau composite, không suy từ token pairs.
3. `/art/landing/hero-{800,1660}.webp` derivatives dùng responsive source, eager priority; artwork kiến trúc vẫn thấy ở phần phải. Header dùng approved circular Z2Z alpha, controls có surface/focus contrast riêng.
4. Mobile giữ background hero theo yêu cầu mới; positioning/scrim bảo đảm headline/CTA/architecture không clip. Các card tiếp theo ảnh inline với text trên solid surface, stack trên narrow view, không overlay dense paragraphs vào tranh.
5. No art motion/parallax/carousel; reduced motion tắt smooth scrolling/hover transforms. Attribution có actual linked section/footer, symbols không live-support/affiliation badges. Primary CTA “Explore Z2Z” anchor tới market narrative vì chưa có app route; không fake Launch app.

### 6.2 Sáu asset: usage, crop và alt

Tất cả nằm ở `public/art/`; URI render bắt đầu bằng `/art/`. Đây là thư viện **được chọn**, không là yêu cầu tải cả sáu ảnh trên landing. Nguồn exact-image bên dưới cùng [artwork catalog](./artwork.md) là điểm kiểm tra provenance; không hotlink museum image trong UI.

| Asset / kích thước | Vai trò được phép | Desktop crop / mobile treatment | Alt khi ảnh mang nội dung |
|---|---|---|---|
| [`ideal-city.jpg`](../public/art/ideal-city.jpg), 1800×664 | Primary Renaissance style reference; privacy card trong approved landing | Card giữ panorama near2.71:1; mobile inline contain, không crop portrait | “Quảng trường cân đối với kiến trúc màu ngà, đài phun nước và các nhân vật nhỏ dưới bầu trời xanh.” |
| [`bellotto-piazza-san-marco.jpg`](../public/art/bellotto-piazza-san-marco.jpg), 1263×721 | Source cho approved ecosystem hero background | Dùng latest1660×947 AI-adaptation derivative, không upscale source; full-bleed với responsive focal point/navy scrim; no pixel-original claim | “Quảng trường San Marco với các nhóm người nhỏ, dãy nhà sáng màu và tháp chuông dưới bầu trời xanh.” |
| [`canaletto-piazza-san-marco.jpg`](../public/art/canaletto-piazza-san-marco.jpg), 3971×2448 | Editorial về thị trường như một không gian chung | Desktop 16:10 gần tỷ lệ gốc, `50% 55%`, giữ tháp và người ở tiền cảnh. Mobile contain toàn ảnh | “Người đi lại và quầy hàng trong quảng trường San Marco, phía sau là nhà thờ và tháp chuông.” |
| [`turner-venice.jpg`](../public/art/turner-venice.jpg), 1959×1461 | Editorial kết nối/settlement; tham chiếu ánh sáng phụ | Desktop 4:3, `50% 50%`, giữ thuyền và hai bờ kiến trúc; không chỉ cắt lấy sky. Mobile contain toàn ảnh | “Thuyền và các công trình ven kênh ở Venice trong ánh sáng vàng nhạt dưới bầu trời xanh.” |
| [`monet-garden-antibes.jpg`](../public/art/monet-garden-antibes.jpg), 3400×2418 | Editorial nghỉ nhịp, community/story; không chart hoặc liquidity graphic | Desktop 4:3, `50% 55%`, giữ nhà hồng, cây và biển xanh. Mobile contain toàn ảnh | “Ngôi nhà mái đỏ giữa cây trong khu vườn ở Antibes, phía xa là biển xanh.” |
| [`hoffbauer-world-fair-1900.jpg`](../public/art/hoffbauer-world-fair-1900.jpg), 2998×2160 | Editorial World Fair, lịch sử kết nối; không default hero | Desktop tỷ lệ gốc ≈1.39:1, contain để giữ mép và caption gốc; không crop như wallpaper. Mobile contain, kèm mô tả/caption HTML đọc được | “Minh họa toàn cảnh Triển lãm Thế giới Paris 1900 với sông Seine, tháp Eiffel và các khu triển lãm.” |

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

## 7. Functional DEX components

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

- Transition thông thường **150–200ms**, ease-out, chỉ cho border/underline, disclosure và dialog xuất hiện. Không đổi số tiền bằng counting animation, không bounce CTA, không parallax hero, không chart pulse, không ticker chạy ngang.
- Settlement pending dùng nhãn và timestamp; không tự đổi mọi thứ thành animation tiến triển nếu chưa có dữ liệu. Nếu spinner dùng rotation liên tục, có text thay thế và không là nguồn thông tin duy nhất.
- `prefers-reduced-motion: reduce`: tắt translation, spinner rotation, smooth scroll và animation; giữ cập nhật state/text ngay lập tức. Không cố rút animation xuống 150ms rồi gọi đó là reduced motion.

### 8.2 Interaction và đọc hiểu

- Target tối thiểu **44×44px** cho touch và icon buttons; label/target không chồng nhau. Cỡ 14px của chữ không đồng nghĩa target 14px.
- Mọi control dùng native semantics nếu đủ: button, link, input, table. Keyboard có thứ tự hợp lý; skip link tới workspace/main, focus luôn thấy.
- Focus: ring Navy 2px/offset 2px trên Paper; Gold 2px/offset 2px trên Navy. Gold CTA có ring Navy khi nằm trên Paper, Paper khi nằm trên Navy; offset lấy màu surface để ring không dính vào fill. Không xóa outline khi không có thay thế.
- Dialog giữ focus trong modal, đóng bằng Escape khi phù hợp, trả focus về trigger; toast không cướp focus. Menu/tabs theo pattern keyboard tiêu chuẩn, không hover-only.
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

## 10. Do / Don’t để quyết định nhanh

| Do | Don’t |
|---|---|
| Quảng trường Renaissance ở landing, functional Navy ở DEX | Đặt orderbook/form lên painting hoặc parchment |
| Bellotto ecosystem hero; Ideal City Renaissance reference/privacy card, caption đúng period | Gọi Monet, Turner, Bellotto hoặc World Fair là Renaissance |
| Gold/Navy CTA có boundary đúng surface | Gold body text trên cream hoặc Paper text trên Gold |
| Paper text trên dark; status solid có nhãn/icon | Muted/Success/Danger text hay thin series trực tiếp trên Navy |
| Exact asset + network + route/venue | Một symbol/logo che việc native, public hay external |
| RFQ như lựa chọn trong DEX; settlement có nhãn | Cross-chain thành một sàn riêng hoặc HyperCore mặc định private |
| Numbers tabular/monospace, units và precision rõ | Script numerals, count-up profits, chart không source |
| Mobile hero background có scrim; các card inline/contain | Crop Ideal City panorama thành portrait hoặc painting sau financial controls |
| Copy thật về limitation và local/test status | Mock live quotes, universal privacy, fake Zcash endorsement |

## 11. Acceptance checklist cho landing và workspace

Landing hiện đã triển khai và có bounded runtime proof ở [design §2.1](design.md#21-landing--giải-thích-trước-không-giả-một-sàn-live), gồm320px/200% text reflow, keyboard menu/FAQ, theme và hero-composite contrast. Checklist tổng hợp bên dưới vẫn chưa marked passed: nó bao gồm trading workspace chưa có và yêu cầu accessibility của tất cả states chưa được audit.

- [ ] Landing Paper/Ink, workspace Navy/Paper; artwork không nằm sau chart, bảng, form, dialog hay fee review.
- [ ] Bảy HEX tokens đúng §3; không gold-on-cream body text; cặp trạng thái trên Navy theo recipes có contrast.
- [ ] Normal text ≥4.5:1, essential graphics/controls ≥3:1 trên tất cả states; alpha/ảnh/màu bổ sung được tính riêng.
- [ ] Editorial serif, controls sans ≥14px, amount inputs ≥16px; values/IDs tabular monospace, units/signs/precision không mất.
- [ ] Spacing/radius/border theo scale, 44px targets, focus ring nhìn thấy, dialog/menu không cần mouse để dùng.
- [ ] 320px và 200% zoom không mất copy/CTA/risk text; mobile background hero có scrim đọc được, artwork cards stack và ảnh inline.
- [ ] Hero dùng Bellotto ecosystem approved artwork; Ideal City ở privacy card; responsive derivatives/captions/links đúng nguồn và lịch sử.
- [ ] Bellotto giữ attribution qualifier; ảnh World Fair không bị gọi là Renaissance hoặc copy campaign Colosseum; stock-exchange-1907 chưa được dùng khi rights chưa rõ.
- [ ] Bid/Ask/limits/quote expiry/network/venue/settlement states đọc được không cần màu, hover hay icon-only hint.
- [ ] Shielded source, public destination và external venue có prominence tương đương; không official Zcash marks hoặc lời hứa privacy/trustless vượt evidence.
- [ ] State quote/signature/submitted/settling/settled/refund phân biệt; chưa live có nhãn rõ, không chart/quote giả.
- [ ] Transition 150–200ms; reduced motion tắt chuyển động không thiết yếu; không parallax, glow/pulse hoặc animated amounts.

## 12. Nguồn và giới hạn bằng chứng

- [Walters — The Ideal City](https://art.thewalters.org/object/37.677/): title, attribution và CC0 cho exact images; attribution phải theo record hiện hành.
- [Cleveland Open Access](https://www.clevelandart.org/open-access): CC0 cho ảnh Open Access; Bellotto và Monet exact-image references ở §6 và record đầy đủ trong [artwork catalog](./artwork.md).
- [Met Collection API](https://metmuseum.github.io/) và [Open Access](https://www.metmuseum.org/hubs/open-access): provenance public-domain/Open Access của exact Canaletto/Turner images; catalog ghi object record tương ứng, không suy image rights từ metadata CC0 đơn thuần.
- [Paris Musées IIIF manifest](https://apicollections.parismusees.paris.fr/iiif/320293284/manifest): exact Hoffbauer image có rights CC0 Paris Musées / Musée Carnavalet.
- [WCAG 2.2 — Contrast minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [non-text contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast), [relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance): phương pháp và ngưỡng cho §3.

Artwork được xem trực tiếp từ sáu file local để chọn composition/crop/alt. Các vai trò nghệ thuật, tokens, kích thước và recipes là **quyết định thiết kế**, không là phát biểu của museum. Palette contrast là phép tính số học; landing implementation/browser evidence cập nhật2026-10-04 được ghi riêng tại design §2.1. Financial workspace vẫn proposed.
