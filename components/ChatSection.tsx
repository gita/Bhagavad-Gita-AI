import ChatBubble from '@/components/ChatBubble'
import Data from '@/constants/sampleData.json'
import { SetStateAction } from 'react'
import React from 'react'

interface ChatSectionProps {
  showSuggestions: boolean
  setShowSuggestions: React.Dispatch<SetStateAction<boolean>>
  chat?: Array<{ sent: boolean; message: string }>
}

const ChatSection = ({
  showSuggestions,
  setShowSuggestions,
  chat,
}: ChatSectionProps) => {
  // useEffect added to trigger on every new answer
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  // scroll function added
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  React.useEffect(scrollToBottom, [chat])

  return (
    <section className="overflow-auto scrollbar-none pr-2">
      <ChatBubble
        message="Namaste, I am Krishna and I can answer any of your questions related to anything. Go ahead ask me something"
        sent={false}
      />
      {chat?.map((item: { sent: boolean; message: string }, index: number) => {
        return (
          <div>
            <ChatBubble key={index} message={item.message} sent={item.sent} />
            {/* useEffect rendered here */}
            <div ref={messagesEndRef} />
          </div>
        )
      })}
    </section>
  )
}

export default ChatSection
