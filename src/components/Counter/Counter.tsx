import css from './Counter.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {ChangeEvent, useState} from "react";

export type CounterType = {
  value: number
  maxValue: number
  startValue: number
  incHandler: () => void
  resetHandler: (value: number) => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  setValuesHandler: (newValue: {maxValue: number, startValue: number}) => void
  erroredMaxValueInput: boolean
  erroredStartValueInput: boolean
  disabledButton: boolean
  erroredMaxStart: boolean
  message: boolean
}

export const Counter = (props: CounterType) => {

  const counterClassName = css.counter
    + ((props.value === props.maxValue) ? ' ' + css.disabledCounter : '')

  const resetCallback = () => {
    props.resetHandler(props.value)
  }

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
          resetCallback={resetCallback}
          erroredMaxValueInput={props.erroredMaxValueInput}
          erroredStartValueInput={props.erroredStartValueInput}
          erroredMaxStart={props.erroredMaxStart}
          disabledButton={props.disabledButton}
          message={props.message}
        />
        <Settings
          maxValue={props.maxValue}
          startValue={props.startValue}
          setValuesHandler={props.setValuesHandler}
          erroredMaxValueInput={props.erroredMaxValueInput}
          erroredStartValueInput={props.erroredStartValueInput}
          onChangeMaxValueHandler={props.onChangeMaxValueHandler}
          onChangeStartValueHandler={props.onChangeStartValueHandler}
          disabledButton={props.disabledButton}
          erroredMaxStart={props.erroredMaxStart}
        />
      </div>
    </>
  )
}