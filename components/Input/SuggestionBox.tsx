import React, { SetStateAction } from 'react'


interface SuggestionBoxProps {
  setInput: React.Dispatch<SetStateAction<string>>;
}

const SuggestionBox = ({setInput}:SuggestionBoxProps) => {

  const handleSuggestionClick = (e:any) => {
    setInput(e.target.innerText)
  }
  return (
    <div className='w-full flex flex-col space-y-4 items-start justify-start px-6 py-4 bg-primary-300 border rounded-tl-lg rounded-tr-lg border-gray-300'>
      <p className='text-xs tracking-wide leading-none text-gray-600'>
        Suggestions:
      </p>
      <div className='flex flex-col space-y-2 items-start justify-start'>
        <div className='flex flex-col sm:flex-row gap-2 items-start justify-start'>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}>
              How to be more productive?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}>
              How to attain peace?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}>
              How to be polite to all?
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 items-start justify-start'>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}>
              How to do more work in less time?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}>
              How to be more productive?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-sm leading-normal text-gray-900 cursor-pointer' onClick={handleSuggestionClick}> 
              What is the motive of life?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestionBox
