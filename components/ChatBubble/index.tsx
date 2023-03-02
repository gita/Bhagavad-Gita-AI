import UserDetails from "./UserDetails";

interface ChatBubbleProps {
  // time: string
  message: string;
  sent: boolean;
}

const ChatBubble = ({ message, sent }: ChatBubbleProps) => {
  return (
    <>
      <div
        className={`w-full flex items-start my-6 ${
          sent ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex flex-col space-y-2 ${
            sent ? "justify-end items-end" : "items-start justify-start"
          }`}
        >
          {/* User Details */}
          <UserDetails sent={sent} />
          {/* Text */}
          <div
            className={`flex flex-col items-start justify-start p-3 md:p-4 rounded-xl  max-w-xl ${
              sent
                ? "md:mr-6 rounded-tr-none bg-primary-500"
                : "md:ml-6 rounded-tl-none bg-primary-100"
            }`}
          >
            <p
              className="text-sm md:text-base leading-normal text-gray-900"
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
