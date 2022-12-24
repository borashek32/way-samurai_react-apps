import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";
import {DisabledType} from "../../../App";

type ChangeCounterType = {
  value?: number | string
  class: string
  maxValue?: number
  startValue?: number
  incCallback: () => void
  resetCallback: () => void
  disabled: DisabledType
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const buttonIncClassName = css.button
    + (props.disabled.incButton ? ' ' + css.disabledButton : '')
  const buttonResClassName = css.button
    + (props.disabled.resButton ? ' ' + css.disabledButton : '')

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        <p className={props.class}>{props.value}</p>
      </div>
      <div className={css.counterSubWrapper}>
        <div className={css.buttonsWrapper}>
          <Button
            name={"inc"}
            class={buttonIncClassName}
            callback={props.incCallback}
            value={props.value}
            type={"button"}
          />
          <Button
            type={"button"}
            name={"res"}
            class={buttonResClassName}
            callback={props.resetCallback}
            value={props.value}
          />
        </div>
      </div>
    </div>
  )
}