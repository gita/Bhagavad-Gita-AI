import React, { useState, SetStateAction, useEffect } from 'react'
import SuggestionBox from './SuggestionBox'
import { GenerateAnswer } from '@/apiFunctions/generate';
import { error } from 'console';

interface InputProps {
  showSuggestions: boolean
  setShowSuggestions: React.Dispatch<SetStateAction<boolean>>;
  input: string
  setInput: React.Dispatch<SetStateAction<string>>;
  chat?:Array<{sent:boolean,message:string}>;
  setChat:React.Dispatch<SetStateAction<Array<{sent:boolean,message:string}>|undefined>>;
}
const Input = (
  { showSuggestions, setShowSuggestions,setInput,input,setChat }: InputProps
) => {  
  
  const [loading,setLoading] = useState<boolean>(false);
  const [chatHistory,setChatHistory] = useState<Array<string>>([]);
 
  const handleGenerate = async ()=>{
    try{
      setLoading(true);
      const data = await GenerateAnswer({question:input,chat_history:chatHistory});
      let chatArray:Array<any> =[]; 
      setChatHistory(data.chat_history);
      data.chat_history.map((item:string)=>{
        item.split("\n")?.map((chat_message:string)=>{
          if(chat_message.startsWith("Human:")){
            chatArray.push({"sent":true,"message":chat_message.split("Human:")[1]})
          }
          else{
            chatArray.push({"sent":false,"message":chat_message.split("AI:")[1]})
          }
        })
        
      })
      setChat(chatArray);
      setShowSuggestions(false);
      setInput("");
      
    }
    catch (err){
        console.log(err)      
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div className='flex gap-2 items-end'>
        <div className='w-full'>
          {
            showSuggestions && (
              <SuggestionBox setInput={setInput}></SuggestionBox>
            )
          }
          <input
            value ={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            disabled={loading}
            type='text'
            placeholder='Type your message here'
            className='w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
          />
        </div>
        <button className={`bg-primary-500 rounded-full h-11 aspect-square grid place-items-center ${ loading ?"animate-spin" :""} `} onClick={handleGenerate}>
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
