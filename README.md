# Z2Z

Contemporary exchange landing with historical artwork, built with TanStack Start, React, Vite, and Tailwind CSS. `/` has four beats: a painting-led product hero, an exact-terms explanation and source/destination illustration, three essential questions, and an oversized own-brand ending with functional links and discreet museum credits. This is not a trading app: no wallet connection, live orders, or real-money swaps.

The hero says “A peer-to-peer exchange, built around Zcash.” Supporting copy is “A DEX in development for trading directly with other people. Agree on the asset, amount and price before authorizing a trade.” It visibly states “In development. Trading is not available.” **View source** links to the verified public **web repository**, [build-onchain/z2z-protocol](https://github.com/build-onchain/z2z-protocol), not a complete trading protocol. **The idea** links to `#exchange`; navigation is Exchange / Questions / View source. Public copy stays short and concrete; financial notation remains in the financial specification, not the visitor-facing explanation.

Theme cycles **system → light → dark → system**; guarded local storage holds only `z2z-theme`. Root bootstrap owns initial/system behavior, and `Home` owns theme/menu actions and native FAQ/credits. The landing-only leaf [`ProtocolConcept`](src/components/ProtocolConcept.tsx) owns the illustration; its internal default export is not a public SDK API or chain-logo registry. Approved coin/art derivatives and **Instrument Serif regular / Manrope variable TTFs with their actual SIL OFL1.1 files** remain local and unchanged. The Bellotto hero and one Ideal City panorama remain the only displayed paintings. No Inspiration footer, trackers or runtime font fetch.

**Agreement landscape—current implementation:** SVG/CSS2.5D planes identify **Source / Shielded Zcash**, **Destination / Local EVM**, and separate **Trader / Solver** actors (Owner U / Solver S in financial docs). “How a trade would work” / “In development · Not live” frames one illustrative full-payment branch. Four always-visible captions explain destination prefunding and irrevocable commitment before source payment authorization, then complete valid finalized evidence before destination payout. Evidence is not funds; this is not BURN/MINT, a universal bridge or guaranteed recovery. Complete SSR/no-JS/reduced-motion/mobile meaning remains visible. One automatic **4800ms** native emphasis run begins on eligible viewport entry, with **no Play/Pause/Resume/Replay buttons**, no loop or restart. Offscreen, hidden-page, resize and reduced-motion changes cancel an active run to the complete still. Source/terms/destination stack at70rem, independently of52rem navigation; desktop shared rows and a positive `.75rem` plaque/plinth gap remove the overlap.

**Visible ecosystem context, not live settlement routes:** separate official links identify **Solana — Native adapter candidate**, **NEAR — Research context**, and **Hyperliquid — External venue · testnet reads**. Their unchanged first-party SVGs stay outside the payment/evidence planes; no partnership, endorsement or live payout claim. [Artwork provenance and terms](docs/artwork.md#functional-protocol-marks) records exact files, hashes and restrictive/conflicting guidance. Local-preview authorization and downloadable assets are **not trademark clearance**; human permission/terms review is required before public deployment. The official Zcash source link and neutral EVM glyph remain.

Canonical documentation: [`concept`](docs/concept.md) owns product framing; [`design`](docs/design.md#agreement-landscape) owns composition/storyboard/behavior; [`style`](docs/style.md#landing-tokens) owns actual tokens/fonts/geometry/focus/motion and unmeasured performance targets; [`artwork`](docs/artwork.md#functional-protocol-marks) owns sources/rights and truthful mark roles; [`design audit`](docs/design-audit.md) preserves **A1–A3** history and their bounded resolution, plus **A4** overlap resolution. No full accessibility, financial, trademark or deployment qualification is implied.

# Getting Started

Requires Node.js 22.12+ and pnpm 9+. Run the commands from the repository root.

To run this application:

```bash
pnpm install
pnpm dev
```

# Building For Production

To build this application for production:

```bash
pnpm build
```

To review the production build locally:

```bash
pnpm preview --port 4173
```

**Prior bounded redesign verification, 2026-10-04:** the integration owner passed `NITRO_PRESET=vercel pnpm build` and `pnpm exec tsc --noEmit`, then exercised the generated SSR preview. Widths320/390/768/1440 had no default page overflow;320/390 with200% root text reflowed. Simple menu Escape/outside/anchor focus, FAQ/credits, theme cycle/persistence/system/storage denial, no-JS, reduced-motion scrolling, local resources and public source HTTP200 were exercised. Hero contrast samples **only at390/1440** met the sampled heading/support/status thresholds; they were never all-crop/all-state certification. [Prior scope](docs/design.md#21-landing--giải-thích-trước-không-giả-một-sàn-live).

**Prior manual-illustration implementation evidence, 2026-10-04:** owner build/TypeScript passed (build7.39s), preview4183 supplied A1 support/status text-line contrast, A2 menu resize/focus and A3 footer spacing resolution. The former9s Play/Pause/Resume/Replay lifecycle was exercised then, but is **superseded**, not current behavior. Original2.21/2.83 tablet ratios, hidden-open menu and424px footer overflow remain in [audit](docs/design-audit.md).

**Latest automatic-illustration evidence,2026-10-04—reported by the integration owner:** `NITRO_PRESET=vercel pnpm build && pnpm exec tsc --noEmit` passed,7.79s(session artifact272). Node24 actual generated SSRHTTP200/plain captions/no playback UI;five new SVGURLsHTTP200. Preview4184:no overflow at320/390/640/768/832/833/900/1024/1119/1120/1121/1280/1440/1920 plus320/390200% text;declared spacing override320/390100%/200% document305/375 within viewports. Fresh offscreen idle→eligible entry12 native4800ms tracks→natural ended0animations→re-entry quiet;active offscreen/reduce change also canceled to ended0. No-JS retains4steps/3ecosystem anchors/controls0. Targeted visible nonabsolute child bounds found no collisions in inspected scene/headings/actors/plaque/evidence/ecosystem/header/footer;plaque/plinth gap12px100%,24px200%. Current menu resize/focus/Escape/FAQ keyboard passed;dark reload persisted/all3correct mark variants loaded,no broken hashes/pageerrors. New-copy Range-line hero support/status composite at390/640/768/1120/1121/1440 met≥4.5;[audit A1](docs/design-audit.md#a1) separates exact new ratios from prior numbers. Bounded evidence—not all pixels/full AT/real background-tab/error-support matrix/CWV/legal/funded-protocol/deployment certification.

**Additional current lifecycle proof:** active resize1440→1280 canceled to ended/0animations. A fresh playing run with simulated hidden `document.visibilityState` + `visibilitychange` canceled to ended/0;restoring the visible property/event did not restart. This is current handler-path evidence,**not real background-tab scheduling measurement**;error/unsupported-native API outcomes remain unexercised.

## Vercel deployment

This is a **TanStack Start SSR app**, not a static Vite SPA. `nitro()` in `vite.config.ts` generates the hosting adapter; `vercel.json` selects the `tanstack-start` framework. On Vercel the generated Build Output API directory is `.vercel/output`, including static assets, request routing, and the SSR function. Publishing `dist` or `dist/client` alone cannot serve the homepage: neither contains a static `index.html`.

Project Settings → Build and Deployment:

- Framework Preset: **TanStack Start**, not Vite. The committed `vercel.json` also selects this preset.
- Build Command: `pnpm build`.
- Install Command: `pnpm install --frozen-lockfile` (`pnpm install` also works).
- Output Directory: leave the override **off**; do not force `dist` or `dist/client`.
- Node.js: **24.x**, matching the verified local runtime.
- Root Directory: the directory containing this `package.json` and `vite.config.ts` (repository root).

The Nitro preset is auto-detected on Vercel. To inspect the Vercel artifacts locally without deploying:

```bash
NITRO_PRESET=vercel pnpm build
```

Ordinary `pnpm build` uses the local Node preset and writes `.output`; `pnpm preview --port 4173` remains the local preview command. Generated `.output` and `.vercel` files are ignored. After committing these configuration/dependency changes and pushing them yourself, deploy the updated source; redeploying an older commit cannot include the adapter. Verify `/` renders the landing and the referenced `/assets/`, `/art/`, and `/brand/` resources load. No deployment is performed by these local checks.

Sources (retrieved 2026-10-04): [Vercel TanStack Start setup](https://vercel.com/docs/frameworks/full-stack/tanstack-start), [Vercel deployment and framework detection guide](https://vercel.com/kb/guide/deploy-a-tanstack-start-app-to-vercel).

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Remove `@tailwindcss/vite` and `tailwindcss` from `package.json`

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The following scripts are available:


```bash
pnpm lint
pnpm format
pnpm check
```


## Shadcn

Add components using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpm dlx shadcn@latest add button
```


# Paraglide i18n

This add-on wires up ParaglideJS for localized routing and message formatting.

- Messages live in `project.inlang/messages`.
- URLs are localized through the Paraglide Vite plugin and router `rewrite` hooks.
- Run the dev server or build to regenerate the `src/paraglide` outputs.


# Apollo Client Integration

This add-on integrates Apollo Client with TanStack Start to provide modern streaming SSR support for GraphQL data fetching.

## Dependencies

The following packages are automatically installed:

- `@apollo/client` - Apollo Client core
- `@apollo/client-integration-tanstack-start` - TanStack Start integration
- `graphql` - GraphQL implementation

## Configuration

### 1. GraphQL Endpoint

Configure your GraphQL API endpoint in `src/router.tsx`:

```tsx
// Configure Apollo Client
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://your-graphql-api.example.com/graphql', // Update this!
  }),
})
```

You can use environment variables by creating a `.env.local` file:

```bash
VITE_GRAPHQL_ENDPOINT=https://your-api.com/graphql
```

The default configuration already uses this pattern:

```tsx
uri: import.meta.env.VITE_GRAPHQL_ENDPOINT ||
  'https://your-graphql-api.example.com/graphql'
```

## Usage Patterns

### Pattern 1: Loader with preloadQuery (Recommended for SSR)

Use `preloadQuery` in route loaders for optimal streaming SSR performance:

```tsx
import { gql, TypedDocumentNode } from '@apollo/client'
import { useReadQuery } from '@apollo/client/react'
import { createFileRoute } from '@tanstack/react-router'

const MY_QUERY: TypedDocumentNode<{
  posts: { id: string; title: string; content: string }[]
}> = gql`
  query GetData {
    posts {
      id
      title
      content
    }
  }
`

export const Route = createFileRoute('/my-route')({
  component: RouteComponent,
  loader: ({ context: { preloadQuery } }) => {
    const queryRef = preloadQuery(MY_QUERY, {
      variables: {},
    })
    return { queryRef }
  },
})

function RouteComponent() {
  const { queryRef } = Route.useLoaderData()
  const { data } = useReadQuery(queryRef)

  return <div>{/* render your data */}</div>
}
```

### Pattern 2: useSuspenseQuery

Use `useSuspenseQuery` directly in components with automatic suspense support:

```tsx
import { gql, TypedDocumentNode } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/client/react'
import { createFileRoute } from '@tanstack/react-router'

const MY_QUERY: TypedDocumentNode<{
  posts: { id: string; title: string }[]
}> = gql`
  query GetData {
    posts {
      id
      title
    }
  }
`

export const Route = createFileRoute('/my-route')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery(MY_QUERY)

  return <div>{/* render your data */}</div>
}
```

### Pattern 3: Manual Refetching

```tsx
import { useQueryRefHandlers, useReadQuery } from '@apollo/client/react'

function MyComponent() {
  const { queryRef } = Route.useLoaderData()
  const { refetch } = useQueryRefHandlers(queryRef)
  const { data } = useReadQuery(queryRef)

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      {/* render data */}
    </div>
  )
}
```

## Important Notes

### SSR Optimization

The integration automatically handles:

- Query deduplication across server and client
- Streaming SSR with `@defer` directive support
- Proper cache hydration

## Learn More

- [Apollo Client Documentation](https://www.apollographql.com/docs/react)
- [@apollo/client-integration-tanstack-start](https://www.npmjs.com/package/@apollo/client-integration-tanstack-start)

## Demo

Visit `/demo/apollo-client` in your application to see a working example of Apollo Client integration.



## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
})
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})

// Use in a component
function MyComponent() {
  const [time, setTime] = useState('')
  
  useEffect(() => {
    getServerTime().then(setTime)
  }, [])
  
  return <div>Server time: {time}</div>
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).



# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).
