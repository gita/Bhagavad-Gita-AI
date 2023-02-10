import ChatBubble from '@/components/ChatBubble'
import Data from '@/constants/sampleData.json'
import { SetStateAction } from 'react'

interface ChatSectionProps {
  showSuggestions: boolean
  setShowSuggestions: React.Dispatch<SetStateAction<boolean>>;
  chat?:Array<{sent:boolean,message:string}>;

}
const ChatSection = ({showSuggestions,setShowSuggestions,chat}:ChatSectionProps) => {
  return (
    <section className='overflow-auto scrollbar-none pr-2'>
     

      <ChatBubble
        message='Radhey Radhey, I am GitaGPT, a repository of knowledge and wisdom. Allow me to assist you by answering any inquiries you may have. Ask me anything.'
        sent={false}
      />
      {
        chat?.map((item:{sent:boolean,message:string},index:number)=>{

          return <ChatBubble key={index} message={item.message} sent={item.sent} />
        })
        }

      
    </section>
  )
}

export default ChatSection
