import "@/styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { CookiesProvider } from "react-cookie";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import Script from "next/script";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const GA_SCRIPT_TAG = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
  });
`;

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <PlausibleProvider domain="bhagavadgita.ai" trackOutboundLinks>
      <CookiesProvider>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </CookiesProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="lazyOnload"
        id="gtag"
        dangerouslySetInnerHTML={{ __html: GA_SCRIPT_TAG }}
      />
      <Script
        strategy="lazyOnload"
        src="https://apps.elfsight.com/p/platform.js"
        defer
      />
      <div className="elfsight-app-b47d1d91-1eee-4e69-8f4c-ad6e628fb66a" />
    </PlausibleProvider>
  );
}
