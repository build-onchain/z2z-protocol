import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import { getLocale } from '#/paraglide/runtime'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

const themeBootstrap = `(() => {
  const root = document.documentElement;
  let preference;
  try { preference = localStorage.getItem('z2z-theme'); } catch {}
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const apply = (dark) => {
    root.classList.toggle('dark', dark);
    root.classList.toggle('light', !dark);
  };
  root.dataset.theme = preference === 'light' || preference === 'dark' ? preference : 'system';
  apply(preference === 'dark' || (preference !== 'light' && system.matches));
  system.addEventListener('change', (event) => {
    if (root.dataset.theme === 'system') apply(event.matches);
  });
})();`

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Z2Z — Peer-to-peer exchange, built around Zcash',
      },
      {
        name: 'description',
        content:
          'A peer-to-peer DEX in development, built around Zcash. Agree on the asset, amount and price before authorizing a trade. Trading is not available.'
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <HeadContent />
      </head>
      <body>
        {children}
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
