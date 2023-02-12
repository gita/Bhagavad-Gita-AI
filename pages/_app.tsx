import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import Script from 'next/script'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { CookiesProvider } from 'react-cookie';


export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <CookiesProvider>
      <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <PlausibleProvider domain="bhagavadgita.ai" trackOutboundLinks>
        <Component {...pageProps} />
      </PlausibleProvider>
      </SessionContextProvider>
      </CookiesProvider>
    </>
  )
}
