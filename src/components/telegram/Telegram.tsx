import React, {useState} from "react";
import s from "./Telegram.module.css";
import css from "../../App.module.css";
import {RightSide} from "./items/RightSide";
import { v1 } from "uuid";
import {LeftSide} from "./items/LeftSide";

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
  const [messages, setMessages] = useState<MessageType[]>([
    {_id: v1(), userName: "Nataly", time: "10:30", text: "Hello:)"},
    {_id: v1(), userName: "Igor", time: "10:30", text: "Hi!!"},
    {_id: v1(), userName: "Nataly", time: "10:30", text: "How are you?"}
  ])

  const addMessage = (value: string, userName: string) => {
    setMessages([...messages, {_id: v1(), userName: userName, time: "10:30", text: value}])
  }

  const onChangeTextArea = (value: string, userName: string) => {
    addMessage(value.trim(), userName)
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
            onChangeTextArea={onChangeTextArea}
          />
        </div>
      </header>
    </div>
  )
}