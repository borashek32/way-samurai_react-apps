import React, {useState} from "react";
import s from "./Telegram.module.css";
import css from "../../App.module.css";
import {RightSide} from "./items/RightSide";
import { v1 } from "uuid";

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
    {_id: v1(), userName: "Nataly", time: "10:30", text: "lorem ipsulum dolor"},
    {_id: v1(), userName: "Igor", time: "10:30", text: "lorem ipsulum dolor"},
    {_id: v1(), userName: "Nataly", time: "10:30", text: "lorem ipsulum dolor"},
    {_id: v1(), userName: "Nataly", time: "10:30", text: "lorem ipsulum dolor"}
  ])

  const addMessage = (value: string) => {
    setMessages([...messages, {_id: v1(), userName: "Igor", time: "10:30", text: value}])
  }

  const onChangeTextArea = (value: string) => {
    addMessage(value.trim())
  }

  return (
    <div className={css.wrapper}>
      <header className={css.app}>
        <h1 className={css.title}>{name}</h1>
        <div className={s.telegramWrapper}>
          <RightSide
            messages={messages}
            addMessage={addMessage}
            onChangeTextArea={onChangeTextArea}
          />
          <RightSide
            messages={messages}
            addMessage={addMessage}
            onChangeTextArea={onChangeTextArea}
          />
        </div>
      </header>
    </div>
  )
}