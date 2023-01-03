import React, {useReducer} from "react";
import s from "./Telegram.module.css";
import css from "../../App.module.css";
import {RightSide} from "./items/RightSide";
import { v1 } from "uuid";
import {LeftSide} from "./items/LeftSide";
import {telegramReducer} from "../../store/telegram-reducer";

export type TelegramType = {
  name: string
}
export type MessageType = {
  _id: string
  userName: string
  time: string
  text: string
}

export const Telegram: React.FC<TelegramType> = ({
                                                   name,
                                                 }) => {
  const [messages, dispatch] = useReducer(telegramReducer,[
    {_id: v1(), userName: "Nataly", time: "10:30", text: "Hello:)"},
    {_id: v1(), userName: "Igor", time: "10:30", text: "Hi!!"},
    {_id: v1(), userName: "Nataly", time: "10:30", text: "How are you?"}
  ])

  const onChangeTextArea = (value: string, userName: string) => {
    addMessage(value.trim(), userName)
  }
  const addMessage = (value: string, userName: string) => {
    dispatch({
      type: "ADD-MESSAGE",
      message: {
        _id: v1(),
        userName: userName,
        time: "10:30",
        text: value
      }
    })
  }
  const deleteMessage = (m: MessageType, userName: string) => {
    if (userName === m.userName) {
      dispatch({
        type: "DELETE-MESSAGE",
        message: m
      })
    } else {

    }
  }

  return (
    <div className={css.wrapper}>
      <header className={css.app}>
        <h1 className={css.title}>{name}</h1>
        <div className={s.telegramWrapper}>
          <LeftSide
            userName={"Nataly"}
            messages={messages}
            addMessage={addMessage}
            onChangeTextArea={onChangeTextArea}
          />
          <RightSide
            userName={"Igor"}
            messages={messages}
            addMessage={addMessage}
            deleteMessage={deleteMessage}
            onChangeTextArea={onChangeTextArea}
          />
        </div>
      </header>
    </div>
  )
}