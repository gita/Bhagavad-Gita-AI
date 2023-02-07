import ChatSection from '@/components/ChatSection'
import Header from '@/components/Header'
import Input from '@/components/Input'

export default function Home() {
  return (
    <>
      <main className='max-w-4xl py-5 mx-auto h-screen grid grid-rows-layout gap-2'>
        <Header />
        <ChatSection />
        <Input />
      </main>
    </>
  )
}
