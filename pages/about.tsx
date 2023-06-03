import Navbar from "@/components/Navbar";
import Head from "next/head";

import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "@/components/NotionPage";
import { rootNotionPageId, previewImagesEnabled } from "@/lib/config";
import * as notion from "@/lib/notion";

export const getStaticProps = async (context: any) => {
  const recordMap = await notion.getPage(rootNotionPageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function About({ recordMap }: { recordMap: ExtendedRecordMap }) {
  function addJsonLd() {
    return {
      __html: `{
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "About Us Bhagavad Gita AI",
          "url": "https://bhagavadgita.ai/about",
          "sameAs": [
            "https://twitter.com/ShriKrishna",
          ],
          "about": {
            "@type": "Thing",
            "name": "Bhagavad Gita"
          },
          "description": "GitaGPT is a free Bhagavad Gita AI chatbot that uses the wisdom of the Bhagavad Gita to help answer your day-to-day questions. It's simple, insightful, and powered by ChatGPT.",
          "publisher": {
            "@type": "Organization",
            "name": "Ved Vyas Foundation",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sanskriti-ai.s3.ap-south-1.amazonaws.com/bhagavad-gita-ai.jpeg"
            },
            "sameAs": [
              "https://twitter.com/ShriKrishna",
            ]
          },
        }
      `,
    };
  }

  return (
    <>
      <Head>
        <title>About Us - Bhagavad Gita AI</title>
        <link
          rel="icon"
          type="image/png"
          href="https://sanskriti-ai.s3.ap-south-1.amazonaws.com/krishna.png"
        />

        <meta
          name="description"
          content="GitaGPT is a free Bhagavad Gita AI chatbot that uses the wisdom of the Bhagavad Gita to help answer your day-to-day questions. It's simple, insightful, and powered by ChatGPT."
        />
        <meta
          name="keywords"
          content="Bhagavad Gita AI, ChatGPT, GPT, Krishna"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Ved Vyas Foundation" />

        <meta property="og:title" content="About Us - Bhagavad Gita AI" />
        <meta
          property="og:description"
          content="GitaGPT is a free Bhagavad Gita AI chatbot that uses the wisdom of the Bhagavad Gita to help answer your day-to-day questions. It's simple, insightful, and powered by ChatGPT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhagavadgita.ai/about" />
        <meta
          property="og:image"
          content="https://sanskriti-ai.s3.ap-south-1.amazonaws.com/bhagavad-gita-ai.jpeg"
        />
        <meta property="og:site_name" content="Bhagavad Gita AI" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us - Bhagavad Gita AI" />
        <meta
          name="twitter:description"
          content="GitaGPT is a free Bhagavad Gita AI chatbot that uses the wisdom of the Bhagavad Gita to help answer your day-to-day questions. It's simple, insightful, and powered by ChatGPT."
        />
        <meta
          name="twitter:image"
          content="https://sanskriti-ai.s3.ap-south-1.amazonaws.com/bhagavad-gita-ai.jpeg"
        />
        <meta name="twitter:site" content="@ShriKrishna" />
        <meta name="twitter:creator" content="@ShriKrishna" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="gita-jsonld"
        />
      </Head>
      <Navbar></Navbar>
      <main className="max-w-4xl pt-5 pb-2 mx-auto h-[100vh]">
        <NotionPage
          recordMap={recordMap}
          rootPageId={rootNotionPageId}
          previewImagesEnabled={previewImagesEnabled}
        />
      </main>
    </>
  );
}
