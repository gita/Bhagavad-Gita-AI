import Request from "../utils/request";

export interface ChatGeneration {
  answer: string;
  chat_history: any;
}

export interface ChatInput {
  question: string;
  chat_history: any;
}

export const GenerateAnswer = ({
  question,
  chat_history,
}: ChatInput): Promise<ChatGeneration> => {
  return new Promise((resolve, reject) => {
    Request({
      url: `/api/generate`,
      method: "post",
      data: {
        question: question,
        chat_history: chat_history,
      },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {});
  });
};
