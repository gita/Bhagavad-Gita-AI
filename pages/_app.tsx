import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
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
      <PlausibleProvider domain="bhagavadgita.ai" customDomain="https://analytics.bhagavadgita.io" trackLocalhost selfHosted trackOutboundLinks taggedEvents>
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  )
}
