import SuggestionBox from './SuggestionBox'

const Input = () => {
  return (
    <>
      <div className='flex gap-2 items-end'>
        <div className='w-full'>
          {/* <SuggestionBox></SuggestionBox> */}
          <input
            type='text'
            placeholder='Type your message here'
            className='w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
          />
        </div>
        <button className='bg-primary-500 rounded-full h-11 aspect-square grid place-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 text-white'>
            <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Input
