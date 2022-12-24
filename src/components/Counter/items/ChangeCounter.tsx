import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";
import {DisabledType} from "../../../App";

type ChangeCounterType = {
  value?: number
  class: string
  maxValue?: number
  startValue?: number
  incCallback: () => void
  resetCallback: (value?: number) => void
  disabled?: DisabledType
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const buttonsClassName = css.button
    + (props.disabled?.incButton || props.disabled?.resButton ? ' ' + css.disabledButton : '')

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        <p className={props.class}>{props.value}</p>
      </div>
      <div className={css.counterSubWrapper}>
        <div className={css.buttonsWrapper}>
          <Button
            name={"inc"}
            class={buttonsClassName}
            callback={props.incCallback}
            value={props.value}
            type={"button"}
            disabled={props.disabled}
          />
          <Button
            type={"button"}
            name={"res"}
            class={buttonsClassName}
            callback={(value) => {props.resetCallback(value)}}
            value={props.value}
            disabled={props.disabled}
          />
        </div>
      </div>
    </div>
  )
}