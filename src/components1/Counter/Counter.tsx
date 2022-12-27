import css from './Counter1.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {ChangeEvent} from "react";
import {DisabledType, ErrorType, SettingsType} from "../../App";
import {Route, Routes} from "react-router-dom";

export type CounterType = {
  value: number
  settings: SettingsType
  incHandler: () => void
  resetHandler: () => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  timerHandler: () => void
  setValuesHandler: (newValue: { maxValue: number, startValue: number }) => void
  error: ErrorType
  disabled: DisabledType
  disableInc?: boolean
  message: string
}

export const Counter = (props: CounterType) => {

  return (
    <>
      <h1>Counter 1</h1>
      <div className={css.app}>
        <Routes>
          <Route
            path="/"
            element={
              <ChangeCounter
                value={props.value}
                settings={props.settings}
                incCallback={props.incHandler}
                resetCallback={props.resetHandler}
                timerCallback={props.timerHandler}
                disabled={props.disabled}
                error={props.error}
              />
            }
          />
          <Route
            path="/counter-settings"
            element={
              <Settings
                settings={props.settings}
                setValuesHandler={props.setValuesHandler}
                onChangeMaxValueHandler={props.onChangeMaxValueHandler}
                onChangeStartValueHandler={props.onChangeStartValueHandler}
                error={props.error}
                disabled={props.disabled}
                value={props.value}
                message={props.message}
              />
            }
          />
        </Routes>
      </div>
    </>
  )
}