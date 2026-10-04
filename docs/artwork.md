# Z2Z artwork references: 18 verified collection candidates

**Research/access date: 2026-10-03.** Sources are primary museum/official collection pages, APIs, IIIF manifests, and image hosts. This is research, not app implementation or evidence of endorsement. Documentation/research only. Six JPEGs were saved by the integration owner under public/art/; none is mounted into the application.

## Rights, history, and interpretation

- **Public-domain artwork does not automatically mean every digitization is freely reusable.** An accessible image URL, old artist death date, or CC0 metadata license is not by itself an image-use license. This report separates image rights from underlying artwork and metadata rights.
- “Fits freedom/private markets” is **our proposed brand interpretation [INFERENCE]**, not a museum's claim about crypto, privacy, financial liberation, or the artist's intentions. These paintings predate Zcash. Public plazas suggest voluntary association and exchange; they do not prove financial freedom. Crowded historic markets do not visually communicate cryptographic privacy; the product must explain that separately.
- The supplied blue/gold Colosseum World Fair poster is a **Belle Époque/World Fair-style reference, not strictly Renaissance**. Do not download event banners or carry over Colosseum/Zcash marks without applicable permission; style reference is not affiliation or a reusable asset license. Official event context and source links are preserved in [concept.md](concept.md).
- The supplied monumental banquet is **provisionally Veronese-like**. Do not lock its title without comparing the actual user image. *Wedding Feast at Cana* has extensive open sky, an upper balustrade, foreground musicians, and water jars. *Feast in the House of Levi* has three large architectural arches and flanking stair balustrades. Both official images were accessed; identification of the supplied image remains provisional.
- Veronese's banquets were religious commissions and can read as elite luxury or service hierarchy. Delacroix is **1830 Romantic revolutionary imagery**, not Renaissance, and contains weapons, corpses, and nudity. Prefer civic space and luminous landscape over these as app heroes.
- Stylistic labels not literally supplied by a collection are curatorial classification **[INFERENCE]**; title, attribution, date, medium, dimensions, and rights are transcribed or paraphrased from the cited primary records. Preserve attribution qualifiers and approximate dates.

### Rights policy evidence

1. [Cleveland Open Access](https://www.clevelandart.org/open-access), directly read: high-resolution images and collection data are CC0; images may be reused, remixed, and used in applications without permission. Individual APIs below explicitly say `share_license_status: "CC0"`.
2. [Walters Ideal City](https://art.thewalters.org/object/37.677/), directly read: each listed image explicitly links “Creative Commons Zero” and a download button.
3. [Met API documentation](https://metmuseum.github.io/), directly read: API includes corresponding high-resolution public-domain JPEGs; object endpoint supplies images “if … available under Open Access.” Individual records below give `isPublicDomain: true` and `primaryImage`. [Met Open Access policy](https://www.metmuseum.org/hubs/open-access) was retrieved through search excerpts, which explicitly state unrestricted image use under CC0; direct page fetch returned HTTP 429. The [official dataset README](https://raw.githubusercontent.com/metmuseum/openaccess/master/README.md), directly read, warns metadata CC0 is separate from images. Do not infer image rights merely from that README.
4. Art Institute: [Open Access Images](https://www.artic.edu/collection-information/open-access/open-access-images) and [Terms](https://www.artic.edu/terms) were available as official search excerpts but direct pages returned 403. Exact image APIs below explicitly say `credit_line: "CC0 Public Domain Designation"`, stronger evidence than metadata license alone. [API documentation](https://api.artic.edu/docs/) directly documents IIIF URL construction.
5. [Paris Musées manifest](https://apicollections.parismusees.paris.fr/iiif/320293284/manifest), directly read: exact image canvas has `Droits: CC0 Paris Musées / Musée Carnavalet – Histoire de Paris` and the CC0 URL.
6. [Louvre Terms of Use](https://collections.louvre.fr/en/page/cgu), directly read, last updated 19 March 2026: §4.1.1.2 permits public-domain-work photographs free for strictly private and enumerated museographic/scientific/educational uses; other purposes, particularly commercial, require a paid written RMN request. **Not a blanket app-image license.** Textual entries are separately under the Etalab Open Licence (§4.1.2).
7. [Vatican copyright](https://www.museivaticani.va/content/museivaticani/en/copyright.html), directly read, expressly forbids reproduction/distribution of site images. [Accademia image-use page](https://www.gallerieaccademia.it/collezioni/richiesta-uso-immagini/), directly read, provides permission requests and says commercial uses are always subject to advance concession fees. Treat both as reference-only here.

## Three top recommendations

1. **Attributed to Bernardo Bellotto, *Piazza San Marco, Venice*, c. 1740 (Cleveland).** Best primary hero: wide, luminous civic plaza, ivory arcades, blue sky, small groups instead of violent or explicitly devotional protagonists. Explicit CC0 and reachable images. Keep “Attributed to” in captions.
2. **Florentine artist, after design by Giuliano da Sangallo, *The Ideal City*, c. 1480–1484 (Walters).** Best genuine Renaissance architectural banner, approximately 2.7:1 image. Clear spatial rhythm and restrained crowding. Exact images are CC0. Current live artist fields differ from the page's stale Fra Carnevale title; use the live fields, not an unqualified Fra Carnevale credit. Its historical ruler/virtues narrative is not permissionless markets.
3. **Claude Monet, *Gardener's House at Antibes*, 1888 (Cleveland).** Best gold-blue landscape/color counterpart: pale blue sky and sea, sunlit coral-gold house, yellow-green foliage. Explicit CC0 and reachable 3400px JPEG. Less religious/violent/luxury-coded than banquet art, but a landscape cannot itself explain DEX or privacy.

## Six downloadable, rights-verified image choices

All six exact URLs below successfully returned image bytes through `read` on **2026-10-03**. Dimensions are delivered image width × height, not canvas size. The six selected assets have been saved under public/art/ and visually inspected. Source resolutions are research masters, not optimized production delivery sizes. Fetch success is not a test/build claim. Preserve credits and source/rights links even when CC0 does not legally require attribution.

| Local filename selected by parent | Artwork / image rights | Exact accessible URL | Image size |
|---|---|---|---|
| `bellotto-piazza-san-marco.jpg` | Bellotto attributed, Cleveland CC0; parent already saved web variant | https://openaccess-cdn.clevelandart.org/1962.169/1962.169_web.jpg | 1263 × 721 |
| optional higher-resolution Bellotto | Same exact record, CC0; print variant also fetched | https://openaccess-cdn.clevelandart.org/1962.169/1962.169_print.jpg | 3400 × 1941 |
| `ideal-city.jpg` | Florentine / after Sangallo, Walters exact-image CC0 | https://art.thewalters.org/images/art/PS4_37.677_Fnt_PF_DD_AT26_64470.jpg | 1800 × 664 |
| `monet-garden-antibes.jpg` | Monet, Cleveland CC0 | https://openaccess-cdn.clevelandart.org/1916.1044/1916.1044_print.jpg | 3400 × 2418 |
| `canaletto-piazza-san-marco.jpg` | Canaletto, Met public-domain/Open Access image | https://images.metmuseum.org/CRDImages/ep/original/DP-14286-009.jpg | 3971 × 2448 |
| `turner-venice.jpg` | Turner, Met public-domain/Open Access image | https://images.metmuseum.org/CRDImages/ep/original/DP169568.jpg | 1959 × 1461 |
| `hoffbauer-world-fair-1900.jpg` | Hoffbauer, Paris Musées exact-image CC0 | https://apicollections.parismusees.paris.fr/sites/default/files/styles/4k/collections/atoms/images/CAR/aze_cargtop030101_001.jpg?itok=jBep3u5m | 2998 × 2160 |

The table has six **distinct artworks**; Bellotto's optional second resolution is not a seventh artwork. These are safer acquisition choices than restricted Raphael/Veronese/Delacroix photographs or AIC images whose bytes were blocked in this environment.


## Local image inventory

All six links below resolve to saved JPEGs; metadata/credits are in the numbered records. Downloaded 2026-10-03, files retained at source resolution for concept selection. Production must generate responsive derivatives before mounting large masters.

- [bellotto-piazza-san-marco.jpg](../public/art/bellotto-piazza-san-marco.jpg)
- [ideal-city.jpg](../public/art/ideal-city.jpg)
- [monet-garden-antibes.jpg](../public/art/monet-garden-antibes.jpg)
- [canaletto-piazza-san-marco.jpg](../public/art/canaletto-piazza-san-marco.jpg)
- [turner-venice.jpg](../public/art/turner-venice.jpg)
- [hoffbauer-world-fair-1900.jpg](../public/art/hoffbauer-world-fair-1900.jpg)

The existing [stock-exchange-1907.jpg](../public/stock-exchange-1907.jpg) visually matches Library of Congress digital ID cph.3c36687, [LCCN 2006685055](https://www.loc.gov/item/2006685055/), including the Pearson Publishing Company 1907 copyright caption. Primary preview [link](https://tile.loc.gov/storage-services/service/pnp/cph/3c30000/3c36000/3c36600/3c36687r.jpg) matched visually; exact catalog fetch was blocked (403). “No known restrictions on publication” is currently available through [Commons transcription](https://commons.wikimedia.org/wiki/File:The_floor_of_the_New_York_Stock_Exchange,_secretly_shot_with_a_camera_hidden_in_the_photographer%27s_sleeve_LCCN2006685055.jpg), not directly reverified from the exact LOC record. Preserve this uncertainty; do not transfer rights from related item 2006685053. Suggested credit: New York Stock Exchange floor, photograph bearing Pearson Publishing Company’s 1907 copyright notice. Library of Congress, Prints and Photographs Division, cph.3c36687, LCCN2006685055. No photographer identified.

## Verified candidates

For each entry, physical dimensions are height × width unless indicated otherwise. “Image” can mean a reference-only URL: read the rights line before saving it as a public app asset.

### 1. *Piazza San Marco, Venice* — attributed to Bernardo Bellotto, c. 1740

- **Style/medium:** eighteenth-century Venetian veduta [INFERENCE]; oil on canvas. Not Renaissance by date.
- **Primary sources:** [Cleveland page](https://www.clevelandart.org/art/1962.169), [API](https://openaccess-api.clevelandart.org/api/artworks/1962.169), accession 1962.169.
- **Dimensions:** unframed 136.2 × 232.5 cm. Web image 1263 × 721; print 3400 × 1941.
- **Image:** https://openaccess-cdn.clevelandart.org/1962.169/1962.169_print.jpg — fetched successfully.
- **Rights:** explicit API `share_license_status: CC0`; collection page permits copy/modify/distribute without asking permission.
- **Brand fit [INFERENCE]:** public square, small dispersed participants, ivory architecture and blue sky suggest an open civic marketplace. Best landing hero.
- **Caveats/crop:** retain **attributed to** in credit. Museum notes Grand Tour aristocratic buyers and churches/government architecture; do not claim historically egalitarian markets. Preserve campanile, horizon, and some people. Existing image is near 16:9; avoid dropping all figures or tightly cropping into the church.

### 2. *The Ideal City* — Florentine artist, after design by Giuliano da Sangallo, c. 1480–1484

- **Style/medium:** collection explicitly labels Renaissance; oil and tempera on panel.
- **Primary source:** [Walters live record](https://art.thewalters.org/object/37.677/), accession 37.677.
- **Dimensions:** painted surface 77.4 × 220 cm; panel 80.3 × 220 × 3.2 cm. Image 1800 × 664.
- **Image:** https://art.thewalters.org/images/art/PS4_37.677_Fnt_PF_DD_AT26_64470.jpg — fetched successfully. [Official download](https://art.thewalters.org/object/37.677/?download=PS4_37.677_Fnt_PF_DD_AT26_64470.jpg).
- **Rights:** exact image has **Creative Commons Zero** beside it, with CC0 link and download control.
- **Brand fit [INFERENCE]:** strongest Renaissance perspective reference: ordered civic space, classical openings, warm stone, minimal clutter. Wide editorial banner or manifesto image.
- **Caveats/crop:** live creator fields are Florentine and after Sangallo, despite page metadata/title naming Fra Carnevale. Do not confidently credit that older attribution. Museum discusses virtuous ruler, military-victory arch, cardinal virtues, religion, and palace commission: not a literal decentralized-market allegory. Preserve central vanishing point; a narrow mobile crop loses the ideal-city structure. Prefer uncropped/contained panorama.

### 3. *Piazza San Marco* — Canaletto (Giovanni Antonio Canal), late 1720s

- **Style/medium:** eighteenth-century Venetian veduta [INFERENCE]; oil on canvas.
- **Primary sources:** [Met record](https://www.metmuseum.org/art/collection/search/435839), [direct API](https://collectionapi.metmuseum.org/public/collection/v1/objects/435839), accession 1988.162.
- **Dimensions:** 68.6 × 112.4 cm. Delivered image 3971 × 2448.
- **Image:** https://images.metmuseum.org/CRDImages/ep/original/DP-14286-009.jpg — fetched successfully.
- **Rights:** API `isPublicDomain: true`, populated `primaryImage`; public-domain Open Access image under museum policy and [API documentation](https://metmuseum.github.io/).
- **Brand fit [INFERENCE]:** warm architecture, blue sky, public association, long axial square; brighter civic alternative to monumental banquet.
- **Caveats/crop:** contains St Mark's church and historic elite tourism context. Not a privacy scene. Preserve square's perspective and representative pedestrians; use 16:9 only if bell tower and basilica remain coherent. Text should sit outside intricate architecture.

### 4. *Venice, from the Porch of Madonna della Salute* — Joseph Mallord William Turner, ca. 1835

- **Style/medium:** Romantic Venetian landscape [INFERENCE]; oil on canvas.
- **Primary sources:** [Met record](https://www.metmuseum.org/art/collection/search/437853), [API](https://collectionapi.metmuseum.org/public/collection/v1/objects/437853), accession 99.31.
- **Dimensions:** 91.4 × 122.2 cm. Delivered image 1959 × 1461.
- **Image:** https://images.metmuseum.org/CRDImages/ep/original/DP169568.jpg — fetched successfully.
- **Rights:** API `isPublicDomain: true` plus populated Open Access image URL; same Met rights evidence as above.
- **Brand fit [INFERENCE]:** luminous water, boats, blue-gold reflections suggest movement and connection without revolutionary violence.
- **Caveats/crop:** painterly atmospheric view, not evidence of actual economic freedom. Religious building in title; no prominent devotional narrative. Preserve boats, waterfront, and sky. Current resolution suits secondary visual better than a full-screen high-DPI hero. Do not recolor until golden light disappears.

### 5. *Pirna: The Obertor from the South* — Bernardo Bellotto, mid-1750s

- **Style/medium:** eighteenth-century topographical veduta [INFERENCE]; oil on canvas.
- **Primary sources:** [Met record](https://www.metmuseum.org/art/collection/search/435646), [API](https://collectionapi.metmuseum.org/public/collection/v1/objects/435646), accession 1991.306.
- **Dimensions:** 46.4 × 78.1 cm; delivered image 3809 × 2349.
- **Image:** https://images.metmuseum.org/CRDImages/ep/original/DT4602.jpg — fetched successfully.
- **Rights:** `isPublicDomain: true`, populated Open Access image URL.
- **Brand fit [INFERENCE]:** town gateway, inhabitants, open sky, and everyday urban movement; less spectacle/luxury-coded civic alternative.
- **Caveats/crop:** museum notes court commissions; gateway can read as boundary/control. Less monumental than Venice. Keep people and passage through the town rather than crop to empty fortification.

### 6. *The Grand Canal, Venice* — Francesco Guardi, c. 1760

- **Style/medium:** eighteenth-century Venetian veduta [INFERENCE]; API style `18th Century`; oil on canvas.
- **Primary sources:** [AIC page](https://www.artic.edu/artworks/111074/the-grand-canal-venice), [API](https://api.artic.edu/api/v1/artworks/111074?fields=id,title,date_display,artist_display,dimensions,medium_display,image_id,is_public_domain,style_title), [manifest](https://api.artic.edu/api/v1/artworks/111074/manifest.json).
- **Dimensions:** 73 × 119.4 cm; image service metadata 3000 × 1786.
- **Image published in manifest:** https://www.artic.edu/iiif/2/f23f8a3b-66b8-9061-811c-c65dd0a32ebd/full/843,/0/default.jpg . Exact bytes not fetched; AIC website/other image requests returned 403.
- **Rights:** artwork API `is_public_domain: true`. [Exact image API](https://api.artic.edu/api/v1/images/f23f8a3b-66b8-9061-811c-c65dd0a32ebd?fields=id,credit_line,iiif_url,width,height) has **null `credit_line`**, unlike the other AIC candidates. **Image-specific CC0 label unverified**; do not mistake API metadata CC0 for image rights. Collection policy is supportive but lower-confidence here.
- **Brand fit [INFERENCE]:** boats, commerce-adjacent waterfront, monumental architecture offer maritime-market identity.
- **Caveats/crop:** museum itself describes melancholy sky. Contains church and customhouse; weaker bright liberation tone. Preserve waterborne activity; not in verified download shortlist.

### 7. *Gardener's House at Antibes* — Claude Monet, 1888

- **Style/medium:** Impressionist Mediterranean landscape [INFERENCE]; oil on canvas.
- **Primary sources:** [Cleveland page](https://www.clevelandart.org/art/1916.1044), [API](https://openaccess-api.clevelandart.org/api/artworks/1916.1044), accession 1916.1044.
- **Dimensions:** unframed 66.3 × 93 cm; web image 900 × 640; print 3400 × 2418.
- **Image:** https://openaccess-cdn.clevelandart.org/1916.1044/1916.1044_print.jpg — fetched successfully.
- **Rights:** `share_license_status: CC0` and object page permits copy/modify/distribute without permission.
- **Brand fit [INFERENCE]:** brightest usable gold/coral-blue landscape found; wide-open sky, spring growth, modest house rather than wealth spectacle. Useful warm supporting hero or editorial panel.
- **Caveats/crop:** landscape, not a market scene. Crop can lose the modest human-scale house; keep both house and sea. Upper sky is relatively calm, but text still requires measured contrast. Dense foliage should not sit under numerical trading data.

### 8. *Bordighera* — Claude Monet, 1884

- **Style/medium:** API explicitly says Impressionism; oil on canvas.
- **Primary sources:** [AIC API](https://api.artic.edu/api/v1/artworks/81537?fields=id,title,date_display,artist_display,dimensions,medium_display,image_id,is_public_domain,style_title,description), [published manifest](https://api.artic.edu/api/v1/artworks/81537/manifest.json), [museum catalogue](https://www.artic.edu/digital-publications/48/monet-paintings-and-drawings-at-the-art-institute-of-chicago-2/390/cat-20-bordighera-1884).
- **Dimensions:** current API 65 × 80.8 cm; older museum catalogue 64.8 × 81.3 cm. Use current record and preserve the discrepancy if scholarly accuracy matters. Image resource 6018 × 4842.
- **Published image URL:** https://www.artic.edu/iiif/2/4d1b3ad0-14db-0d21-ad9f-17abb8bdfbb5/full/843,/0/default.jpg . A constructed 1686px variant returned 403; no reachable bytes verified.
- **Rights:** artwork `is_public_domain: true`; [exact image API](https://api.artic.edu/api/v1/images/4d1b3ad0-14db-0d21-ad9f-17abb8bdfbb5?fields=id,credit_line,iiif_url,width,height) explicitly `CC0 Public Domain Designation`.
- **Brand fit [INFERENCE]:** sunlit Mediterranean settlement and vegetation; gold-blue palette bridge.
- **Caveats/crop:** branches obscure town/sea per museum; not much negative space. Secondary art or color reference, not dense UI background. Download accessibility blocked here, although rights are verified.

### 9. *The Bay of Marseille, Seen from L'Estaque* — Paul Cézanne, c. 1885

- **Style/medium:** API explicitly Post-Impressionism; oil on canvas.
- **Primary sources:** [AIC API](https://api.artic.edu/api/v1/artworks/16487?fields=id,title,date_display,artist_display,dimensions,medium_display,style_title,image_id,is_public_domain,description), [manifest](https://api.artic.edu/api/v1/artworks/16487/manifest.json), [collection page](https://www.artic.edu/artworks/16487/the-bay-of-marseille-seen-from-l-estaque).
- **Dimensions:** 80.2 × 100.6 cm; image resource 12821 × 10275.
- **Published image URL:** https://www.artic.edu/iiif/2/d4ca6321-8656-3d3f-a362-2ee297b2b813/full/843,/0/default.jpg . Image bytes not fetched; AIC host blocked other image requests.
- **Rights:** artwork `is_public_domain: true`; [exact image API](https://api.artic.edu/api/v1/images/d4ca6321-8656-3d3f-a362-2ee297b2b813?fields=id,credit_line,iiif_url,width,height) explicitly `CC0 Public Domain Designation`.
- **Brand fit [INFERENCE]:** warm roofs versus blue sea; compositional layers suit grid/market identity without weaponry, banquets, or devotional figures.
- **Caveats/crop:** color and structure, not literal financial independence. Museum describes four zones: architecture, water, mountain, sky. Preserve that sequence instead of zooming into anonymous roof texture. Rights verified; accessibility not verified.

### 10. *Sunrise* — Claude Lorrain (Claude Gellée), possibly 1646–47

- **Style/medium:** seventeenth-century ideal/classical landscape [INFERENCE]; oil on canvas.
- **Primary sources:** [Met record](https://www.metmuseum.org/art/collection/search/435907), [API](https://collectionapi.metmuseum.org/public/collection/v1/objects/435907), accession 47.12.
- **Dimensions:** 102.9 × 134 cm; delivered image 4000 × 3054.
- **Image:** https://images.metmuseum.org/CRDImages/ep/original/DP-14936-013.jpg — fetched successfully.
- **Rights:** `isPublicDomain: true`, populated Open Access image URL.
- **Brand fit [INFERENCE]:** luminous golden horizon and spacious pastoral depth suggest possibility and autonomy; less violent/religious/luxury-coded than canonical liberty/banquet scenes.
- **Caveats/crop:** date is explicitly **possibly**, not certain. Museum notes foreground/middle-ground darkening; weaker brighter-hero choice than Monet. Keep luminous horizon; editorial/supplementary use better than making most of a hero dark brown.

### 11. *Italian Landscape* — Claude Lorrain, c. 1630

- **Style/medium:** seventeenth-century ideal landscape [INFERENCE]; oil on canvas.
- **Primary sources:** [Cleveland page](https://www.clevelandart.org/art/1946.73), [API](https://openaccess-api.clevelandart.org/api/artworks/1946.73), accession 1946.73.
- **Dimensions:** unframed 97.5 × 134.2 cm; web image 1233 × 893; print 3400 × 2462.
- **Image:** https://openaccess-cdn.clevelandart.org/1946.73/1946.73_print.jpg — fetched successfully.
- **Rights:** `share_license_status: CC0`, object page permits unrestricted copy/modify/distribute.
- **Brand fit [INFERENCE]:** open sky and luminous distance; quiet alternative to conflict or luxury spectacle.
- **Caveats/crop:** very dark wooded lower-left, bright upper sky, temple-like structure, and distant church. Suitable contemplative editorial panel, not primary bright plaza hero. Maintain the transition from shade to light instead of applying a blanket dark overlay.

### 12. *View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm—The Oxbow* — Thomas Cole, 1836

- **Style/medium:** Romantic / Hudson River School landscape [INFERENCE]; oil on canvas.
- **Primary sources:** [Met record](https://www.metmuseum.org/art/collection/search/10497), [API](https://collectionapi.metmuseum.org/public/collection/v1/objects/10497), accession 08.228. Museum's [Reexamining the Wilderness Aesthetic](https://www.metmuseum.org/en/perspectives/oxbow-questioning-romantic-wilderness) is an additional contextual source, accessed as an official search excerpt; direct request returned 429.
- **Dimensions:** 130.8 × 193 cm; delivered image 4000 × 2733.
- **Image:** https://images.metmuseum.org/CRDImages/ad/original/DP-12550-001.jpg — fetched successfully.
- **Rights:** `isPublicDomain: true`, populated Open Access image URL.
- **Brand fit [INFERENCE]:** opening weather, long view, sunlit fields can communicate opportunity and expansive agency, without bodies/weapons.
- **Caveats/crop:** wilderness/property/settlement readings are contested, not an uncomplicated liberation symbol. Avoid declaring landscape empty or free for taking. Keep storm-versus-sunlight contrast; cropping only bright fields changes the painting's argument. Less closely tied to civic market gathering.

### 13. *Vue d'ensemble de l'exposition de 1900.* — Fédor Hoffbauer; Imprimerie Lemercier, printer; Strauss, publisher

- **Style/medium/date:** Belle Époque World Fair panoramic chromolithograph [INFERENCE style]. **1900 is the depicted event; exact creation date is not supplied by the accessed catalogue/manifest.** Do not silently convert event year into a verified execution date.
- **Primary sources:** [Paris Musées / Musée Carnavalet page](https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/vue-d-ensemble-de-l-exposition-de-1900-0), [exact manifest](https://apicollections.parismusees.paris.fr/iiif/320293284/manifest), notice 651569.
- **Dimensions:** artwork 65.1 × 90.3 cm; image canvas 2998 × 2160. Catalogue montage dimensions differ from expected proportions; do not derive image crop from the mount.
- **Image:** https://apicollections.parismusees.paris.fr/sites/default/files/styles/4k/collections/atoms/images/CAR/aze_cargtop030101_001.jpg?itok=jBep3u5m — exact manifest resource fetched successfully. [Download package](https://www.parismuseescollections.paris.fr/fr/zip/oeuvre/651569).
- **Rights:** object page and manifest image canvas explicitly **CC0 Paris Musées / Musée Carnavalet – Histoire de Paris** plus CC0 URL.
- **Brand fit [INFERENCE]:** strongest direct historical World Fair analogue found with verified reusable image: monumental pavilions, warm architectural color, blue sky, global-exhibition scale. More faithful period reference than calling a fair poster Renaissance.
- **Caveats/crop:** exhibition history is not endorsement by the modern Fair and not evidence of egalitarian finance. Avoid borrowing national/imperial claims or reproducing printed event lettering as current Z2Z copy. Dense architecture is better as full editorial illustration; cropping to 16:9 should preserve Eiffel Tower/major axes. Never put order-book figures over pavilion details.

### 14. *Exposition 1900* — Alexandre Lunois, 1899

- **Style/medium:** Belle Époque poster [INFERENCE]; color lithograph, France/Paris.
- **Primary sources:** [Cleveland page](https://www.clevelandart.org/art/1978.1049), [API](https://openaccess-api.clevelandart.org/api/artworks/1978.1049), accession 1978.1049.
- **Dimensions:** sheet 129 × 93.5 cm; image 123.5 × 87.7 cm. Download JPEG 2481 × 3400.
- **Image:** https://openaccess-cdn.clevelandart.org/1978.1049/1978.1049_print.jpg — fetched successfully.
- **Rights:** `share_license_status: CC0`; object page permits copy/modify/distribute without permission.
- **Brand fit [INFERENCE]:** real period exhibition typography and decorative printed palette; useful art-direction reference and vertical editorial card.
- **Caveats/crop:** not gold-blue plaza hero: green/red, figures, kimono, palm-reading-like encounter. Do not idealize exoticizing fair imagery. Avoid inheriting old event title as current product name. Preserve full poster for historical reference; heavy crop misrepresents it.

### 15. *Paris Street; Rainy Day* — Gustave Caillebotte, 1877

- **Style/medium:** API explicitly Impressionism; oil on canvas.
- **Primary sources:** [AIC artwork API](https://api.artic.edu/api/v1/artworks/20684?fields=id,title,date_display,artist_display,dimensions,medium_display,image_id,is_public_domain,style_title,thumbnail), [exact image API](https://api.artic.edu/api/v1/images/f8fd76e9-c396-5678-36ed-6a348c904d27?fields=id,credit_line,iiif_url,width,height), [page](https://www.artic.edu/artworks/20684/paris-street-rainy-day).
- **Dimensions:** 212.2 × 276.2 cm; exact image resource 9987 × 7755.
- **Image URL constructed following official IIIF documentation:** https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/843,/0/default.jpg . Bytes not verified here; parent/AIC image access returned 403. This is a documented construction, not a claimed downloaded file.
- **Rights:** artwork `is_public_domain: true`; exact image API explicitly **CC0 Public Domain Designation**.
- **Brand fit [INFERENCE]:** public pedestrian movement and dignified urban life without religious narrative or armed revolt.
- **Caveats/crop:** muted rain and bourgeois clothing, not optimistic gold-blue hero. Supporting civic-human scene. Preserve umbrella-bearing figures and diagonal streets; a hero crop can amputate the main people. Keep historical wardrobes out of functional trading controls.

### 16. *School of Athens* — Raphael, c. 1509–1511; documented room campaign 1508–1511

- **Style/medium:** High Renaissance fresco. [Vatican room page](https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello/stanza-della-segnatura/stanza-della-segnatura.html) calls these frescoes the beginning of the High Renaissance and dates the room campaign 1508–1511. [Official catalogue excerpt](https://www.museivaticani.va/content/dam/museivaticani/pdf/eventi_novita/iniziative/novita_editoriali/79_scheda_catalogo_raffaello.pdf), directly read, specifically discusses Raphael painting *School of Athens* in 1509. **Exact individual completion year not established by the accessed object page**; c.1509–1511 is a conventional range [INFERENCE], bounded by those official sources.
- **Primary object source:** [Vatican Museums School of Athens](https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello/stanza-della-segnatura/scuola-di-atene.html).
- **Dimensions:** not supplied in accessed primary object/room pages; leave unknown rather than repeat an unsourced 500 × 770 cm.
- **Reference image:** https://www.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/stanze_raffaello/03_02_Scuola_Atene.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg — fetched successfully, **not approved as reusable app asset**.
- **Rights:** [Vatican copyright](https://www.museivaticani.va/content/museivaticani/en/copyright.html) expressly reserves site images and forbids reproduction/distribution. No open license verified.
- **Brand fit [INFERENCE]:** shared reasoning, geometry, central perspective, majestic arch and blue opening; intellectual freedom is a brand reading. Museum specifically associates the scene with rational truth/philosophy, not financial markets.
- **Caveats/crop:** papal library commission and religious setting even though the scene depicts philosophers. Male-dominated canonical assembly; avoid claims of universal inclusion. Preserve vanishing point/arch, do not paste Zcash marks onto sacred/historical figures. Link as inspiration, use Walters civic image instead for a currently cleared app download.

### 17. *Les Noces de Cana* (*The Wedding Feast at Cana*) — Paolo Caliari, called Veronese, 1562–1563

- **Style/medium:** Venetian Renaissance banquet [INFERENCE]; oil on canvas.
- **Primary source:** [Louvre record](https://collections.louvre.fr/ark:/53355/cl010064382), INV 142 / MR 384. Display date is broad sixteenth century, but object history explicitly says painted **1562–1563** for Benedictine refectory of San Giorgio Maggiore, Venice.
- **Dimensions:** 6.77 × 9.94 m.
- **Reference image:** https://collections.louvre.fr/media/cache/large/0000000021/0000064382/0001288788_OG.JPG — fetched successfully; image credit **© 2019 GrandPalaisRmn (musée du Louvre) / Michel Urtado**.
- **Rights:** no CC0. [Current Louvre terms §4.1.1.2](https://collections.louvre.fr/en/page/cgu) limit free photograph uses; other/commercial uses require paid written RMN authorization. **Reference-only; not approved app download.** Artwork age is not the digitization license.
- **Brand fit [INFERENCE]:** monumental open architecture, many participants, splendid blue-gold color, conviviality; closer to supplied open-sky crowded-banquet description than Levi, but identification of the user's image is still provisional.
- **Caveats/crop:** biblical miracle and monastic commission, elite banquet/luxury hierarchy, crowded foreground and no reliable negative space. Can look like private wealth rather than public access. Keep original context in editorial reference; never obscure Christ/participants merely to claim secular “free markets.” Not a trading-page background.

### 18. *Le 28 juillet 1830. La Liberté guidant le peuple* (*Liberty Leading the People*) — Eugène Delacroix, 1830

- **Style/medium:** French Romantic history painting, not Renaissance; Louvre location labels romantisme. Oil on canvas.
- **Primary source:** [Louvre record](https://collections.louvre.fr/ark:/53355/cl010065872), RF 129. Object history explicitly dates painting September–December 1830.
- **Dimensions:** 2.6 × 3.25 m, excluding frame.
- **Reference image:** https://collections.louvre.fr/media/cache/large/0000000021/0000065872/0001264365_OG.JPG — fetched successfully; exact record credit **© 2024 GrandPalaisRmn (musée du Louvre) / Rabeau/Didierjean**.
- **Rights:** no CC0. Same [Louvre §4.1.1.2 photograph limits](https://collections.louvre.fr/en/page/cgu); commercial app branding needs separate paid authorization. **Do not ship this photograph as default app art.**
- **Brand fit [INFERENCE]:** unambiguous political liberty symbol and collective agency; useful conceptual counterpoint rather than first hero.
- **Caveats/crop:** firearms, corpses, revolutionary violence, partial nudity, national flag, and specific July 1830 French politics. Does not symbolize financial privacy. Cropping out bodies sanitizes the work rather than solves the mismatch. Prefer civic plaza or luminous landscape for a peaceful markets message.

## Related Veronese reference, not counted as a nineteenth candidate

For identifying the supplied banquet, [Accademia's current official *Convito in casa di Levi* record](https://www.gallerieaccademia.it/en/opera/convito-in-casa-di-levi/) was directly accessed after the old `/en/feast-house-levi` page returned 404. It credits **Paolo Caliari called Paolo Veronese**, dates **1573**, and measures **560 × 1309 cm**, oil on canvas, catalogue 203. Use those current official dimensions rather than inconsistent secondary 555cm values.

Official reference image successfully fetched: https://www.gallerieaccademia.it/wp-content/uploads/2026/06/203_20Veronese_20Convito_20in_20casa_20Levi.jpg (1749 × 800). Three arches and flanking stairs distinguish it from Cana's open sky. Parent compared the image and reports Levi is **not** the exact supplied banquet; the supplied open sky/crowded-front composition is likely Cana, but exact identification is still provisional. The museum documents its religious commission, Inquisition dispute, and retitling from Last Supper. Artistic license/censorship is documented; financial liberation is our interpretation, not historical fact. [Current image permissions](https://www.gallerieaccademia.it/collezioni/richiesta-uso-immagini/) require publication requests and commercial concession fees. No CC0 verified; reference-only.

## Practical visual direction [PROPOSED / INFERENCE]

- **Art on the threshold, clarity inside the exchange.** Use one wide image on landing/onboarding/editorial surfaces; no paintings, faux parchment, atmospheric grain, or ornamental scrollwork beneath charts, order books, balances, fees, status labels, and transaction controls. A DEX must remain recognizable as a financial interface and Zcash privacy claims must stay technically honest.
- **Composition:** airy arcade/plaza and blue sky are better primary hero material than a crowded banquet. Keep artwork meaningful figures, horizon, and central perspective. Put headlines on a dedicated solid/low-detail panel rather than relying on arbitrary dark overlays. Maintain a mobile alternative with deliberate focal point; don't pretend every historic panorama survives `object-fit: cover` unchanged.
- **Palette:** ivory stone, blue sky, warm ochre/gold; Monet adds coral and yellow-green. Final UI tokens and verified contrast pairs are defined in [style.md](style.md); this catalogue does not establish a second palette. Colors are design interpretations, not sampled source colors.
- **Functional restraint:** use gold as identity accent, not buy/sell or profit/loss semantics. Keep distinct semantic colors and text/icons for order side, errors, warnings, confirmation, privacy/network state. Serif display headings can evoke humanism; numeric controls require clean sans/mono, tabular figures, stable alignment, and high contrast. No licensing research establishes a token's accessibility; verify contrast in implementation.
- **Caption hygiene:** artist including qualifiers, exact museum title, approximate date, institution, source, and image rights. Never imply museum, Colosseum, World Fair, or Zcash event endorsement. Keep source ledger reachable from design documentation.

## Productive search terms

Search official collection sources using combinations, not generic moodboards:

- `Renaissance ideal city central perspective Florentine Sangallo open access`
- `Venetian veduta piazza San Marco Bellotto attributed CC0`
- `Canaletto public square civic gathering oil on canvas open access`
- `Turner Venice lagoon luminous gold blue public domain`
- `Monet Antibes Mediterranean garden gold blue CC0`
- `Cezanne Estaque sea warm roofs Post-Impressionism open access`
- `Exposition universelle 1900 Hoffbauer chromolithographie CC0 Paris Musées`
- `Belle Epoque exhibition poster Lunois 1899 open access`
- `Romantic liberty nonviolent civic landscape public domain museum`
- `Veronese Cana Levi official collection image use permissions`

Useful filters: Cleveland `cc0=1`; AIC `is_public_domain` plus **exact image API credit**; Walters per-image Creative Commons Zero; Paris Musées canvas-level CC0. Do not replace image rights checks with artist death-year arithmetic.

## Access limitations and verification scope

- Every numbered candidate has an accessed primary object record/API/manifest; eighteen are listed, not guessed collection links. Exact image rights remain uncertain where stated. Fourteen numbered candidates have explicit public-domain/Open Access or exact-image CC0 evidence; Guardi's specific-image label remains unverified, and Raphael/Cana/Liberty are restricted reference choices.
- AIC APIs/manifests worked; AIC pages/IIIF bytes returned 403. Those candidates have rights/metadata evidence but are not in the six successful-download shortlist. Met site pages returned 429; its official API/image hosts and API documentation worked. The general Met CC0 image policy was available as official search excerpts, not a successful direct full-page retrieval. Louvre and Vatican primary records/terms worked.
- Library of Congress fair item attempts returned 403 in both page/API and alternate `/pictures/item/` fetches. Instead of guessing rights or download URLs, the shortlist uses directly accessed Paris Musées and Cleveland fair sources.
- Source/claim audit performed while assembling the historical-art ledger: creator qualifiers preserved, approximate/event-versus-execution dates labeled, physical-versus-image dimensions separated, metadata rights not confused with image rights, and brand readings marked as inference. That original research phase generated no art and ran no app builds, lint, tests, or formatters; subsequent AI adaptations are documented separately below.

## Z2Z source-painting adaptations — 2026-10-03

Theo yêu cầu tiếp theo của người dùng, bốn ảnh mới được tạo bằng **image edits với chính JPEG tranh gốc làm input**, không dùng ảnh AI text-to-image trước đó làm reference. Giữ bố cục và chất hội họa của nguồn; thêm các biểu tượng nhỏ Zcash, monogram **Z2Z dự thảo**, Ethereum và Solana vào kiến trúc/con dấu/chi tiết đồ vật. Đây là **tranh gốc được biến đổi bằng AI**, không phải ảnh nguyên bản của bảo tàng hay tác phẩm lịch sử được nghệ sĩ vẽ logo crypto.

| Ảnh biến đổi | Tranh đầu vào trực tiếp | Kích thước actual / vai trò |
| --- | --- | --- |
| [Open markets](../public/art/generated/z2z-open-markets-hero-painting-edit.png) | [Attributed to Bellotto, Piazza San Marco](../public/art/bellotto-piazza-san-marco.jpg), source record #1, CC0 | 1660×947; hero/plaza |
| [P2P exchange](../public/art/generated/z2z-p2p-exchange-painting-edit.png) | [Canaletto, Piazza San Marco](../public/art/canaletto-piazza-san-marco.jpg), #3, Met Open Access | 1598×984; P2P editorial |
| [Privacy on your terms](../public/art/generated/z2z-privacy-on-your-terms-painting-edit.png) | [The Ideal City](../public/art/ideal-city.jpg), #2, exact-image CC0 | 2061×763; primary Renaissance panorama/privacy narrative |
| [Owner-held recovery](../public/art/generated/z2z-owner-held-recovery-painting-edit.png) | [Turner, Venice](../public/art/turner-venice.jpg), #4, Met Open Access | 1452×1083; recovery/editorial |

**Transport:** Cockpit `/v1/images/edits`, multipart actual source image, requested model **`gpt-image-2.5`**; không đổi model. Cockpit `/models` có đúng ID; API ảnh không trả identity model, nên xác nhận được request selector và endpoint, không độc lập chứng thực routing bên trong provider. Native OMP `generate_image` chưa nhận model trong catalog; dùng endpoint trực tiếp đã test, không sửa config. Prompt đầy đủ, source/output hashes, kích thước và request metadata nằm trong [provenance.json](../public/art/generated/provenance.json); không credential/API token trong file.

Output giữ tỷ lệ gần nguồn dù request `1536x1024`; dùng **actual dimensions** trong bảng, không giả mọi ảnh cùng kích thước. Bốn file là research masters PNG, chưa responsive-optimized hoặc mount vào app. Các bản fantasy/text-to-image trước bị loại khỏi bộ asset vì không đáp ứng yêu cầu giữ tranh gốc.

**Logo caveats của đợt ảnh đầu:** lúc tạo bốn ảnh trên chưa có logo Z2Z được duyệt, chữ/medallion chỉ dự thảo. Bản logo không chữ có vòng coin được người dùng chọn sau đó; bộ ecosystem mới bên dưới dùng chính file logo này làm input riêng. Zcash/Ethereum/Solana và các third-party emblems do model vẽ lại có thể lệch nét; không dùng extracted details làm canonical wallet/asset logos. Hình biểu tượng không proof hỗ trợ chain, partnership, audit hoặc anonymity. Zcash trademark policy vẫn áp dụng; trước public marketing kiểm proper mark use, Z2Z prominence và explicit link tới Zcash ngoài ảnh, không implied endorsement. Không dùng logo/campaign Colosseum.

Caption đề xuất: **“AI-edited adaptation after [title], [artist/attribution], [museum]; source image CC0/Open Access. Contemporary blockchain motifs added for Z2Z; no affiliation implied.”** Giữ source title/period đúng: Bellotto/Canaletto thế kỷ XVIII và Turner thế kỷ XIX không thành Renaissance artwork; *The Ideal City* là Renaissance foundation. Không claim edits bảo toàn mọi pixel/95% hoặc trở thành “không phải AI”; đó là mục tiêu prompt, không phép đo. Mọi art chỉ ở landing/editorial, không sau financial controls.

## Logo Z2Z và bộ ecosystem sau duyệt — 2026-10-03

**Quy trình đã đổi theo yêu cầu người dùng:** tạo own-brand logo trước → bỏ wordmark → thêm vòng tròn coin → người dùng chọn hình → tạo light/dark và alpha exports → upload chính logo được chọn cùng tranh gốc và official emblem reference sheet vào từng image-edit request. Không dùng text “Z2Z” thay logo trong bộ mới. Logo gồm hai nét Z đối xứng, nối faceted amber ở giữa và vòng amber; cảm hứng sự tối giản/coin của Zcash/Bitcoin, không sao chép ký hiệu tiền của họ. AI raster logo đã được chọn về hình thức, **không SVG master hoặc trademark clearance**.

### Logo assets

| File | Dùng cho |
| --- | --- |
| [z2z-logo-light-transparent.png](../public/brand/z2z-logo-light-transparent.png) | Navy–gold, nền trong suốt; cropped 1011×995, padding24px, dành nền sáng |
| [z2z-logo-dark-transparent.png](../public/brand/z2z-logo-dark-transparent.png) | Ivory–gold, cùng silhouette/alpha; dành nền tối |
| [Light preview](../public/brand/z2z-logo-light-preview.png) / [Dark preview](../public/brand/z2z-logo-dark-preview.png) | Preview nền ngà/navy; **không** dùng thay alpha asset khi ghép |
| [Light full canvas](../public/brand/z2z-logo-light.png) / [Dark full canvas](../public/brand/z2z-logo-dark.png) | PNG1254×1254, alpha; Image3 reference dùng light full canvas |

Các theme được remap màu xác định từ approved raster, giữ nguyên alpha/silhouette thay vì regenerate model gây lệch hình. Alpha ngoài và trong coin được kiểm; PNG preview có nền chỉ để xem. Metadata/hashes: [coin](../public/brand/coin-provenance.json), [themes](../public/brand/theme-provenance.json), [transparent exports](../public/brand/transparent-provenance.json). Landing hiện mount derivatives128/256px tại `public/brand/landing/`, không background previews.

### Bộ tranh với logo đã duyệt

| Ảnh mới | Tranh gốc input / actual size | Motifs |
| --- | --- | --- |
| [Open markets ecosystem](../public/art/generated/z2z-open-markets-z2z-ecosystem.png) | Bellotto-attributed Piazza San Marco; 1660×947 | Z2Z symbol, Zcash, Ethereum, Solana, Hyperliquid, NEAR, Base |
| [P2P protocols ecosystem](../public/art/generated/z2z-p2p-protocols-z2z-ecosystem.png) | Canaletto Piazza San Marco; 1597×985 | Z2Z, Zcash, Solana, Raydium, USDC, Hyperliquid, Base |
| [Proof city ecosystem](../public/art/generated/z2z-proof-city-z2z-ecosystem.png) | The Ideal City; 2063×762 | Z2Z, Zcash, Ethereum, Solana, Succinct/SP1 tooling, NEAR, Base |
| [Recovery harbor ecosystem](../public/art/generated/z2z-recovery-harbor-z2z-ecosystem.png) | Turner Venice; 1452×1083 | Z2Z, Zcash, Ethereum, Solana, Succinct/SP1, NEAR Intents, Hyperliquid |

Ảnh mới vẫn **AI-edited adaptations**, không nguyên bản bảo tàng. Các bản trước người dùng đã thích được giữ; hai ecosystem drafts tạo trước logo được bỏ để không dùng nhầm. Full prompts, actual source/output/approved-logo hashes và URLs của reference assets: [ecosystem-provenance.json](../public/art/generated/ecosystem-provenance.json). Exact `gpt-image-2.5` requested tại Cockpit `/v1/images/edits`; mỗi request có ba input: actual source JPEG, official emblem sheet, own approved Z2Z PNG. Không model fallback. Response không trả identity nên không độc lập attestation nội bộ routing.

### Landing exports — 2026-10-04

Landing mount WebP derivatives của bốn ecosystem PNG ở trên, không các historical drafts. [`public/art/landing/manifest.json`](../public/art/landing/manifest.json) ghi exact source, dimensions, bytes và SHA-256; masters và provenance giữ nguyên. Hero800/1660, P2P640/1200, privacy640/1600 và recovery640/1200 được encode quality86, không upscale. Hero eager/high priority; card images lazy với srcSet/sizes. Header/footer dùng light/dark transparent logo128/256px; no remote image fetch. Footer “The art behind the exchange” có source titles, attribution qualifiers, periods, museum rights và official collection links; emblem disclaimer không claiming integrations/endorsements.

### Vì sao có các biểu tượng này?

Đọc lại [PRODUCT §6](../../ziquid-dex/docs/PRODUCT.md), [status](../../ziquid-dex/docs/NATIVE-IMPLEMENTATION-STATUS.md) và [ARCHITECTURE](../../ziquid-dex/docs/ARCHITECTURE.md), không lấy popular protocols thay real docs evidence:

- **Zcash/Solana:** source crypto/local public target work; không completed shielded network swap.
- **Ethereum:** motif EVM, không Ethereum mainnet support.
- **Hyperliquid:** limited HyperCore testnet `/info` reads; execution chưa tích hợp. HyperCore/HyperEVM không hai fictional chain logos.
- **Base:** conditional Base Sepolia staging, không deployed mainnet.
- **NEAR:** layout/research context, không selected native destination.
- **Raydium:** retained public Solana swap/LP lane **deferred** (ARCHITECTURE §§3,6), không private matching hoặc implemented adapter.
- **USDC:** candidate asset/pair (PRODUCT §2), không first native-EVM payout hoặc live ZEC/USDC listing; Circle corporate logo không được thêm như partner.
- **Succinct/SP1:** actual proof guest/base-verifier/toolchain code; không certified financial proof hoặc audit badge. Dùng authentic Succinct mark cho cùng tooling family, không invent SP1 logo.
- **NEAR Intents/1Click family:** public provider lane **deferred** (ARCHITECTURE §6.2), không native P/Q recovery. Motif ở boat ngoại vi tách khỏi owner tools; không claim provider bảo đảm refund.
- **Zoss:** actual limited source-acquisition dependency nhưng chưa có authentic logo được xác minh; không tự bịa logo. Jupiter/Orca chỉ comparator; Kamino chưa tìm thấy adoption evidence; UniswapX là design research, không đưa vào integration-themed palette.

### Official emblem sources và giới hạn

Retrieved2026-10-03; reference assets dùng làm silhouette inputs, không blanket commercial-use license:

| Mark | Official source / exact reference |
| --- | --- |
| Hyperliquid | [Brand kit](https://hyperliquid.gitbook.io/hyperliquid-docs/brand-kit), [official app PNG](https://app.hyperliquid.xyz/apple-touch-icon.png); asymmetric mint blob, không H/infinity |
| NEAR | [Developer docs](https://docs.near.org/), [icon PNG](https://docs.near.org/mintlify-assets/_mintlify/favicons/neardocs/jx3X3HW4FX2vbKtn/_generated/favicon/android-chrome-192x192.png); stylized N |
| Base | [Current guidelines](https://brand.base.org/core-identifiers), [official reference PNG](https://brand.base.org/document/apple-touch-icon.png); **current Square**, không legacy circle. Guidelines forbid custom square/effects/nonblue-white-black fills; prompt giữ flat blue Square, không gold relief. AI rendition vẫn phải review trước publish, không claim brand compliance từ prompt |
| Raydium | [Official docs](https://docs.raydium.io/), [logo PNG linked there](https://mintlify.s3.us-west-1.amazonaws.com/raydium/logo/raydium-r.png); angular R/broken hexagon |
| Succinct | [Official docs](https://docs.succinct.xyz/), [favicon SVG](https://docs.succinct.xyz/img/favicon.svg); interlocking angular emblem, không label certified SP1 |
| NEAR Intents | [Official site](https://near-intents.org/), [favicon PNG](https://near-intents.org/favicons/near-intents/apple-touch-icon.png); routing research family |
| Zcash | [Media kit](https://z.cash/press/), [official SVG](https://z.cash/wp-content/uploads/2023/03/zcash-logo.svg), [trademark policy](https://zfnd.org/zcash-trademark-policy/) |

USDC/Ethereum/Solana motifs được mô tả trong prompt; không có separate official image reference cho ba marks đó ở lượt này. Do model tái vẽ, fidelity không guaranteed. Không phân loại repainting thành canonical token icon. Không “partner wall”, badges supported routes, logo endorsement, hoặc graphics thay privacy/authority disclaimer. Các tranh chỉ editorial/landing, không financial-control backdrop. Caption bổ sung: **“Ecosystem motifs reference source chains, local tooling and documented candidate/deferred directions; not supported routes or endorsements.”**
