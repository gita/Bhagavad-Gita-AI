import ChatSection from '@/components/ChatSection'
import Header from '@/components/Header'
import Input from '@/components/Input'

export default function Home() {
  return (
    <>
      <main className='max-w-4xl pt-5 pb-2 mx-auto h-screen grid grid-rows-layout gap-2 px-4'>
        <Header />
        <ChatSection />
        <Input />
      </main>
    </>
  )
}
