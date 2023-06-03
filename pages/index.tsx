import ChatSection from "@/components/ChatSection";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [chat, setChat] = useState<Array<{ sent: boolean; message: string }>>();
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const router = useRouter();

  useEffect(() => {
    const pathName = router.asPath;
    const access_token = pathName.match(/\#(?:access_token)\=([\S\s]*?)\&/);

    if (access_token && access_token.length > 1) {
      setCookie("Token", access_token[1]);
    }
  }, [router.query]);

  function addJsonLd() {
    return {
      __html: `{
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "Bhagavad Gita AI",
          "url": "https://bhagavadgita.ai",
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
        <title>
          Bhagavad Gita AI - Gita GPT - Ask Krishna
        </title>
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

        <meta
          property="og:title"
          content="Bhagavad Gita AI - Gita GPT - Ask Krishna"
        />
        <meta
          property="og:description"
          content="GitaGPT is a free Bhagavad Gita AI chatbot that uses the wisdom of the Bhagavad Gita to help answer your day-to-day questions. It's simple, insightful, and powered by ChatGPT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhagavadgita.ai" />
        <meta
          property="og:image"
          content="https://sanskriti-ai.s3.ap-south-1.amazonaws.com/bhagavad-gita-ai.jpeg"
        />
        <meta property="og:site_name" content="Bhagavad Gita AI" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Bhagavad Gita AI - Gita GPT - Ask Krishna"
        />
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
      <main className="max-w-4xl pt-5 pb-2 mx-auto h-[90vh] grid grid-rows-layout gap-2 px-4">
        <Header />
        <ChatSection chat={chat} />

        <Input
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          input={input}
          setInput={setInput}
          chat={chat}
          setChat={setChat}
        />
      </main>
    </>
  );
}
