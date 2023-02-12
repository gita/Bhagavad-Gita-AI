import ChatBubble from "@/components/ChatBubble";
import { useRef, useEffect } from "react";

interface ChatSectionProps {
  chat?: Array<{ sent: boolean; message: string }>;
}

const ChatSection = ({ chat }: ChatSectionProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [chat]);

  return (
    <section className="overflow-auto scrollbar-none pr-2">
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
  );
};

export default ChatSection;
