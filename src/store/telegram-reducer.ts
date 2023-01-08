import {MessageType} from "../components/telegram/Telegram";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE" as const
const DELETE_MESSAGE = "DELETE-MESSAGE" as const

type AddMessageAT = {
  type: typeof ADD_MESSAGE
  message: MessageType
}
type DeleteMessageAT = {
  type: typeof DELETE_MESSAGE
  message: MessageType
}
type ActionType = AddMessageAT | DeleteMessageAT

export const telegramReducer = (messages: MessageType[], action: ActionType): MessageType[] => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, {
        _id: v1(),
        userName: action.message.userName,
        time: action.message.time,
        text: action.message.text
      }]
    case DELETE_MESSAGE:
      return messages.filter(m => m._id !== action.message._id)
    default:
      return messages
  }
}