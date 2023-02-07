import React from 'react'

const SuggestionBox = () => {
  return (
    <div className='w-full flex flex-col space-y-4 items-start justify-start px-6 py-4 bg-yellow-50 border rounded-tl-lg rounded-tr-lg border-gray-300'>
      <p className='text-xs tracking-wide leading-none text-gray-600'>
        Suggestions:
      </p>
      <div className='flex flex-col space-y-2 items-start justify-start'>
        <div className='flex space-x-2 items-start justify-start'>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to be more productive?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to do more work in less time?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to be polite to all?
            </p>
          </div>
        </div>
        <div className='flex space-x-2 items-start justify-start'>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to do more work in less time?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to be more productive?
            </p>
          </div>
          <div className='flex items-start justify-start px-4 py-1 bg-primary-500 rounded-full'>
            <p className='text-base leading-normal text-gray-900'>
              How to be polite to all?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestionBox
