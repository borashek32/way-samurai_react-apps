import React from "react";
import s from "./Telegram.module.sass";
import css from "../../App.module.sass";
import {RightSide} from "./items/RightSide";
import {LeftSide} from "./items/LeftSide";

export type TelegramType = {
  name: string
}
export type MessageType = {
  _id: string
  userName: string
  value: string
}

export const Telegram: React.FC<TelegramType> = ({name}) => {

  return (
    <div className={s.mainContainer}>
      <div className={css.wrapper}>
        <div className={css.app}>
          <h1 className={css.title}>{name}</h1>
          <div className={s.telegramWrapper}>
            <LeftSide
              userName={"Nataly"}
            />
            <RightSide
              userName={"Igor"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}