import {MessageType} from "../../components/telegram/Telegram";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE"
const DELETE_MESSAGE = "DELETE-MESSAGE"

type AddMessageAT = {
  type: typeof ADD_MESSAGE
  value: string
  userName: string
}
type DeleteMessageAT = {
  type: typeof DELETE_MESSAGE
  userName: string
  message: MessageType
}
type ActionType = AddMessageAT | DeleteMessageAT


const initialState: MessageType[] = [
  {_id: v1(), userName: "Nataly", value: "Hello:)"},
  {_id: v1(), userName: "Igor", value: "Hi!!"},
  {_id: v1(), userName: "Nataly", value: "How are you?"}
]

export const messagesReducer = (state = initialState, action: ActionType): MessageType[] => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [
        ...state, {_id: v1(), userName: action.userName, value: action.value}
      ]
    }
    case DELETE_MESSAGE: {
      return state.filter(m => m._id !== action.message._id)
    }
    default:
      return state
  }
}

export const AddMessageAC = (value: string, userName: string): AddMessageAT => {
  return {type: ADD_MESSAGE, value, userName} as const
}
export const DeleteMessageAC = (message: MessageType, userName: string): DeleteMessageAT => {
  return {type: DELETE_MESSAGE, message, userName} as const
}