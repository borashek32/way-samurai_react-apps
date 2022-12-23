import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";

type ChangeCounterType = {
  value?: number
  class: string
  maxValue?: number
  startValue?: number
  incCallback: () => void
  resetCallback: (value?: number) => void
  erroredMaxValueInput?: boolean
  erroredStartValueInput?: boolean
  erroredMaxStart: boolean
  message?: boolean
  disabledButton?: boolean
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const plusClassName = css.button
    + ((props.value === props.maxValue) ? ' ' + css.disabledButton : '')
  const resetClassName = css.button
    + ((props.value === props.startValue) ? ' ' + css.disabledButton : '')

  const error = props.erroredMaxValueInput
    ? <p className={css.error}>max value should be positive</p>
    : props.erroredStartValueInput
      ? <p className={css.error}>start value should be positive</p>
      : props.erroredMaxStart
        ? <p className={css.error}>max value should be greater than start value</p>
        : props.message
          ? <p className={css.message}>enter values and press set</p>
          :<h1 className={props.class}>{props.value}</h1>

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        {error}
      </div>
      <div className={css.counterSubWrapper}>
        <div className={css.buttonsWrapper}>
          <Button
            name={"inc"}
            class={plusClassName}
            callback={props.incCallback}
            value={props.value}
            type={"button"}
          />
          <Button
            type={"button"}
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