import React, {useState} from "react";
import s from "./Telegram.module.css";
import css from "../../App.module.css";
import {RightSide} from "./items/RightSide";
import {LeftSide} from "./items/LeftSide";
import {AddMessageAC, DeleteMessageAC} from "../../store/telegram/messages-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/telegram/store";

export type TelegramType = {
  name: string
}
export type MessageType = {
  _id: string
  userName: string
  value: string
}

export const Telegram: React.FC<TelegramType> = ({
                                                   name,
                                                 }) => {

  return (
    <div className={s.mainContainer}>
      <div className={css.wrapper}>
        <div className={css.app}>
          <h1 className={css.title}>{name}</h1>
          <div className={s.telegramWrapper}>
            {/*<LeftSide*/}
            {/*  userName={"Nataly"}*/}
            {/*  messages={messages}*/}
            {/*  addMessage={addMessage}*/}
            {/*/>*/}
            <RightSide
              userName={"Igor"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}