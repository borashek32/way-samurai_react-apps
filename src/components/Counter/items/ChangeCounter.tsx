import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";

type ChangeCounterType = {
  value: number
  class: string
  maxValue?: number
  startValue?: number
  incCallback: () => void
  resetCallback: (value: number) => void
  erroredMaxValueInput?: boolean
  erroredStartValueInput?: boolean
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const plusClassName = css.button
    + ((props.value === props.maxValue) ? ' ' + css.disabledButton : '')
  const resetClassName = css.button
    + ((props.value === props.startValue) ? ' ' + css.disabledButton : '')

  const displayedValue = props.erroredMaxValueInput
  ? <p>max value should be positive</p>
  : <h1 className={props.class}>{props.value}</h1>

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        {displayedValue}
      </div>
      <div className={css.counterSubWrapper}>
        <div className={css.buttonsWrapper}>
          <Button
            name={"inc"}
            class={plusClassName}
            callback={props.incCallback}
            value={props.value}
          />
          <Button
            name={"reset"}
            class={resetClassName}
            callback={(value) => {props.resetCallback(value)}}
            value={props.value}
          />
        </div>
      </div>
    </div>
  )
}