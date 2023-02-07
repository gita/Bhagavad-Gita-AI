import UserDetails from './UserDetails'

interface ChatBubbleProps {
  time: string
  message: string
  sent: boolean
}

const ChatBubble = ({ time, message, sent }: ChatBubbleProps) => {
  return (
    <>
      <div
        className={`w-full flex items-start my-6 ${
          sent ? 'justify-end' : 'justify-start'
        }`}>
        <div
          className={`flex flex-col space-y-2 ${
            sent ? 'justify-end items-end' : 'items-start justify-start'
          }`}>
          {/* User Details */}
          <UserDetails time={time} sent={sent} />
          {/* Text */}
          <div
            className={`flex flex-col items-start justify-start p-4 rounded-xl  max-w-xl ${
              sent
                ? 'mr-6 rounded-tr-none bg-primary-500'
                : 'ml-6 rounded-tl-none bg-yellow-100'
            }`}>
            <p className='text-base leading-normal text-gray-900'>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBubble
