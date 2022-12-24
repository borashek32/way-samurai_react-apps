import css from './Counter.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {ChangeEvent} from "react";
import {DisabledType, ErrorType} from "../../App";

export type CounterType = {
  value: number | string
  maxValue: number
  startValue: number
  incHandler: () => void
  resetHandler: () => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  setValuesHandler: (newValue: {maxValue: number, startValue: number}) => void
  error: ErrorType
  disabled: DisabledType
}

export const Counter = (props: CounterType) => {

  const counterClassName = css.counter
    + ((props.value === props.maxValue) ? ' ' + css.disabledCounter : '')

  return (
    <>
      <h1>Counter</h1>
      <div className={css.app}>
        <ChangeCounter
          value={props.value}
          maxValue={props.maxValue}
          startValue={props.startValue}
          class={counterClassName}
          incCallback={props.incHandler}
          resetCallback={props.resetHandler}
          disabled={props.disabled}
        />
        <Settings
          maxValue={props.maxValue}
          startValue={props.startValue}
          setValuesHandler={props.setValuesHandler}
          onChangeMaxValueHandler={props.onChangeMaxValueHandler}
          onChangeStartValueHandler={props.onChangeStartValueHandler}
          error={props.error}
          disabled={props.disabled}
        />
      </div>
    </>
  )
}