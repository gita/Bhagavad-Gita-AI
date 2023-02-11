import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="text-4xl md:text-3xl flex items-center justify-center text-center bg-clip-text h-10 md:h-16 text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-extrabold mb-1">
        BhagavadGita.ai
      </h1>
      <p className="text-md leading-normal text-center text-gray-500">
        Unlock Your Potential with GitaGPT - The AI-Powered Spiritual Companion.
        {/* </p> */}
        {/* <p className="text-sm leading-normal text-center"> */}
        <a
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ml-1"
          target="_blank"
          rel="noreferrer"
          href="https://writesonic.com/chat?utm_source=bhagavadgita.ai&utm_medium=banner&utm_campaign=bhagavadgita.ai"
        >
          Powered by ChatSonic.
        </a>
      </p>
      <div className="flex items-start justify-start px-4 py-2 bg-gray-200 rounded-full mx-auto w-fit mt-3">
        <p className="text-xs font-medium tracking-wide leading-none text-center text-black">
          300,000+ devotees guided so far
        </p>
      </div>
    </header>
  );
};

export default Header;
