import React from 'react'

const Header = () => {
  return (
    <header>
      <h1 className='text-4xl md:text-5xl flex items-center justify-center text-center bg-clip-text h-10 md:h-16 text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-extrabold mb-1'>
        BhagavadGita.ai
      </h1>
      <p className='text-base leading-normal text-center text-gray-500'>
        Unlock the Wisdom of Krishna with ChatSonic
      </p>
      <div className='flex items-start justify-start px-4 py-2 bg-gray-500 rounded-full mx-auto w-fit mt-3'>
        <p className='text-xs font-medium tracking-wide leading-none text-center text-white'>
          + 12,0000 people guided so far
        </p>
      </div>
    </header>
  )
}

export default Header
