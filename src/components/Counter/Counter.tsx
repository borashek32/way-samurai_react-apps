import css from './Counter.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {ChangeEvent} from "react";
import {DisabledType, ErrorType, SettingsType} from "../../App";

export type CounterType = {
  value: number | string
  settings: SettingsType
  incHandler: () => void
  resetHandler: () => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  setValuesHandler: (newValue: {maxValue: number, startValue: number}) => void
  error: ErrorType
  disabled: DisabledType
}

export const Counter = (props: CounterType) => {

  return (
    <>
      <h1>Counter</h1>
      <div className={css.app}>
        <ChangeCounter
          value={props.value}
          settings={props.settings}
          incCallback={props.incHandler}
          resetCallback={props.resetHandler}
          disabled={props.disabled}
          error={props.error}
        />
        <Settings
          settings={props.settings}
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