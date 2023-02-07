import ChatBubble from '@/components/ChatBubble'
import Data from '@/constants/sampleData.json'

const ChatSection = () => {
  return (
    <section className='overflow-auto scrollbar-thumb-primary-500 scrollbar-thin scrollbar-thumb-rounded-lg pr-2'>
      {Data.map((item, index) => {
        return (
          <ChatBubble
            key={index}
            time={item.time}
            message={item.message}
            sent={item.sent}
          />
        )
      })}

      <ChatBubble
        time='2011-08-12T20:17:46.384Z'
        message='Namaste, I am Krishna and I can answer any of your questions related to anything. Go ahead ask me something'
        sent={false}
      />
      <ChatBubble
        time='2011-08-12T20:17:46.384Z'
        message='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          sint deleniti odit non sequi explicabo asperiores dolorem porro nam
          fuga omnis veritatis ipsa debitis assumenda, saepe earum! Voluptate
          dolorum nihil exercitationem fugit tempore numquam perspiciatis. Ut,
          magni, neque numquam omnis ducimus eveniet, enim facilis magnam
          recusandae et temporibus vel tenetur consequuntur maiores fugiat
          voluptas. Facilis aliquid nostrum quaerat consequatur voluptatum sint
          quo. Impedit similique incidunt aliquam illo, sed minus officiis, est,
          cumque quo recusandae nostrum. Suscipit, sed nesciunt culpa corporis
          aliquam veritatis fugiat est vel, ea repellendus dolor quidem
          repudiandae ex, sunt quas natus molestiae odit assumenda saepe
          sapiente nihil?'
        sent={true}
      />
    </section>
  )
}

export default ChatSection
