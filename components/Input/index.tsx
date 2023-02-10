import React, { useState, SetStateAction, useEffect } from 'react'
import SuggestionBox from './SuggestionBox'
import { GenerateAnswer } from '@/apiFunctions/generate'
import { usePlausible } from 'next-plausible'

interface InputProps {
  showSuggestions: boolean
  setShowSuggestions: React.Dispatch<SetStateAction<boolean>>
  input: string
  setInput: React.Dispatch<SetStateAction<string>>
  chat?: Array<{ sent: boolean; message: string }>
  setChat: React.Dispatch<
    SetStateAction<Array<{ sent: boolean; message: string }> | undefined>
  >
}
const Input = ({
  showSuggestions,
  setShowSuggestions,
  setInput,
  input,
  setChat,
  chat,
}: InputProps) => {
  const plausible = usePlausible()
  const [loading, setLoading] = useState<boolean>(false)
  const [chatHistory, setChatHistory] = useState<Array<string>>([])

  const handleGenerate = async () => {
    try {
      setLoading(true)
      const data = await GenerateAnswer({
        question: input,
        chat_history: chatHistory,
      })
      let chatArray: Array<any> = []
      setChatHistory(data.chat_history)
      data.chat_history.map((item: string) => {
        item.split('\n')?.map((chat_message: string) => {
          if (chat_message.startsWith('Human:')) {
            chatArray.push({
              sent: true,
              message: chat_message.split('Human:')[1],
            })
          } else {
            chatArray.push({
              sent: false,
              message: chat_message.split('AI:')[1],
            })
          }
        })
      })
      setChat(chatArray)
      setShowSuggestions(false)
      setInput('')
    } catch (err) {
      console.log(err?.response?.status)
      if (err?.response?.status === 429) {
        let history = chat
        history?.push({
          sent: false,
          message:
            'Oh devoted one, I apologize for not being able to attend to you in this moment. Please have patience and come back after a small while, as I am currently occupied.',
        })
        setChat(history)
        setInput('')
      }
    } finally {
      setLoading(false)
      // plausible('AskKrishna')(
      //   // sent event to Google Analytics 4 (gtag.js)
      //   window as any,
      // ).gtag('event', 'ask_krishna', {
      //   event_category: 'Generate',
      //   event_label: input,
      // })
    }
  }
  return (
    <div className="flex gap-2 items-end">
      {/* className made relative */}
      <div className="w-full relative">
        {showSuggestions && <SuggestionBox setInput={setInput}></SuggestionBox>}
        <input
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleGenerate()
            }
          }}
          disabled={loading}
          type="text"
          placeholder="Type your message here..."
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          className={`ask-krishna absolute right-0 bottom-0 bg-primary-500  h-12 aspect-square grid place-items-center`}
          onClick={handleGenerate}
          id="askKrishna"
        >
          {!loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          ) : (
            <svg
              className="animate-spin h-7 w-7 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default Input
