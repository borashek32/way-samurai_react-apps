import {MessageType} from "../components/telegram/Telegram";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE" as const

type AddMessageAT = {
  type: typeof ADD_MESSAGE
  message: MessageType
}
type ActionType = AddMessageAT

export const telegramReducer = (messages: MessageType[], action: ActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, {
        _id: v1(),
        userName: action.message.userName,
        time: "10:30",
        text: action.message.text
      }];
    default:
      return messages
  }
}