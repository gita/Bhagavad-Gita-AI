import ChatBubble from '@/components/ChatBubble'
import { useState, useRef, useEffect } from 'react'
import Header from './Header'

interface ChatSectionProps {
  chat?: Array<{ sent: boolean; message: string }>
}

const ChatSection = ({ chat }: ChatSectionProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [firstResponseGenerated, setFirstResponseGenerated] = useState(false)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (chat && chat.length > 0 && !firstResponseGenerated) {
      scrollToBottom()
      setFirstResponseGenerated(true)
    }
  }, [chat, firstResponseGenerated])

  return (
    <section className="overflow-auto scrollbar-none pr-2">
      {firstResponseGenerated ? (
        <h1 className="text-4xl md:text-3xl flex items-center justify-center text-center bg-clip-text h-10 md:h-16 text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-extrabold mb-1">
          BhagavadGita.ai
        </h1>
      ) : (
        <Header />
      )}
      <ChatBubble
        message="Radhey Radhey, I am Gita AI, a repository of knowledge and wisdom. Allow me to assist you by answering any inquiries you may have. Ask me anything."
        sent={false}
      />
      {chat?.map((item, index) => (
        <div key={index}>
          <ChatBubble message={item.message} sent={item.sent} />
          <div ref={messagesEndRef} />
        </div>
      ))}
    </section>
  )
}

export default ChatSection
