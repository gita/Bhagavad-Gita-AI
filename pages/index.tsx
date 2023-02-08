import ChatSection from '@/components/ChatSection'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
import {useState} from 'react'



export default function Home() {

  const [showSuggestions, setShowSuggestions] = useState<boolean>(true)
  const [input,setInput] = useState<string>('');
  const [chat,setChat] = useState<Array<{sent:boolean,message:string}>>();
  return (
    <>
    <Navbar></Navbar>
      <main className='max-w-4xl pt-5 pb-2 mx-auto h-[90vh] grid grid-rows-layout gap-2 px-4'>
        
        <Header />
        <ChatSection 
         showSuggestions = {showSuggestions}
         setShowSuggestions= {setShowSuggestions}
         chat={chat}
         />

        <Input 
        showSuggestions = {showSuggestions}
        setShowSuggestions= {setShowSuggestions}
        input= {input}
        setInput={setInput} 
        chat={chat}
        setChat={setChat}/>
      </main>
    </>
  )
}
