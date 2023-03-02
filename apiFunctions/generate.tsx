import Request from "../utils/request";

export interface ChatGeneration {
  answer: string;
  chat_history: any;
}

export interface ChatInput {
  question: string;
  chat_history: any;
  token: string;
}

export const GenerateAnswer = ({
  question,
  chat_history,
  token,
}: ChatInput): Promise<ChatGeneration> => {
  return new Promise((resolve, reject) => {
    Request({
      url: `/api/generate`,
      method: "post",
      data: {
        question: question,
        chat_history: chat_history,
      },
      headers: {
        token: token,
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
