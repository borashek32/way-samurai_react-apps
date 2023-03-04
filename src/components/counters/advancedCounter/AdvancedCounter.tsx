import React, {ChangeEvent, useEffect} from 'react'
import c from '../Counter.module.sass'
import {Route, Routes} from "react-router-dom";
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {
  AdvIncHandlerAC,
  AdvSetDisabledAC,
  AdvSetErrorAC,
  AdvSetMessageAC,
  AdvResHandlerAC,
  AdvSetCountingAC,
  AdvSetSettingsAC
} from "../../../store/counters/advanced-counter-reducer";
import css from "../../../App.module.sass";

export type ErrorType = {
  maxValue: boolean
  startValue: boolean
  maxStartValues: boolean
  message: boolean
}
export type DisabledType = {
  incButton: boolean
  resButton: boolean
  setButton: boolean
  timerButton: boolean
}
export type SettingsType = {
  maxValue: number;
  startValue: number
}
export type AdvancedCounterType = {
  name: string
}

function AdvancedCounter(props: AdvancedCounterType) {

  const value = useSelector<AppRootStateType, number>(state => state.advancedCounter.valueAdv)
  const error = useSelector<AppRootStateType, ErrorType>(state => state.advancedCounter.error)
  const settings = useSelector<AppRootStateType, SettingsType>(state => state.advancedCounter.settings)
  const disabled = useSelector<AppRootStateType, DisabledType>(state => state.advancedCounter.disabled)
  const counting = useSelector<AppRootStateType, boolean>(state => state.advancedCounter.counting)
  const message = useSelector<AppRootStateType, string>(state => state.advancedCounter.message)

  const dispatch = useDispatch()

  const incHandler = () => {
    if (value < settings.maxValue) {
      dispatch(AdvIncHandlerAC())
      dispatch(AdvSetDisabledAC({...disabled, resButton: false, setButton: false}))
      dispatch(AdvSetMessageAC("counting..."))
    }
    if (value + 1 === settings.maxValue) {
      dispatch(AdvSetDisabledAC({...disabled, setButton: false, incButton: true, timerButton: true, resButton: false}))
      dispatch(AdvSetMessageAC('you reached the max value'))
    }
  }
  const resetHandler = () => {
    dispatch(AdvResHandlerAC())
    dispatch(AdvSetMessageAC("press 'inc' or 'timer' to increment the value"))
    dispatch(AdvSetDisabledAC({...disabled, resButton: true, incButton: false, setButton: false, timerButton: false}))
  }
  const timerHandler = () => {
    dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
    dispatch(AdvSetCountingAC(true))
  }
  const onOpenSetHandler = () => dispatch(AdvSetMessageAC("enter values and press 'set'"))


  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber

    if ((!isNaN(newMaxValue) && settings.startValue > 0)
      || (!isNaN(newMaxValue) && !isNaN(settings.startValue))
      || Number.isInteger(newMaxValue)) {

      if (newMaxValue < 0 && settings.startValue > 0) {
        dispatch(AdvSetMessageAC("max value should be positive"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(AdvSetMessageAC("start value should be positive"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, startValue: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(AdvSetMessageAC("start value should be positive"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, startValue: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue === 0 && settings.startValue < 0 || newMaxValue === 0 && settings.startValue > 0) {
        dispatch(AdvSetMessageAC("max value shouldn't be equal 0"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, startValue: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue < 0 && settings.startValue < 0) {
        dispatch(AdvSetMessageAC("max and start values should be positive"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, startValue: true, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
        dispatch(AdvSetMessageAC("max value should be greater than start value"))
        dispatch(AdvSetSettingsAC(({...settings, maxValue: newMaxValue})))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue === 255) {
        dispatch(AdvSetMessageAC("max and start values shouldn't be greater or equal 255"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue < 255) {
        dispatch(AdvSetMessageAC("max value shouldn't be greater or equal 255"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, maxValue: true}))
        dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (Number.isInteger(newMaxValue) && newMaxValue < 255 && settings.startValue < 255) {
        dispatch(AdvSetMessageAC("enter values and press 'set'"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: false, startValue: false, maxValue: false, message: true}))
        dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true}))

      }
    } else {
      dispatch(AdvSetMessageAC("max value should be of type 'number'"))
      dispatch(AdvSetSettingsAC({...settings, maxValue: newMaxValue}))
      dispatch(AdvSetErrorAC({...error, maxValue: true}))
      dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
    }
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;

    if ((!isNaN(newStartValue) && settings.maxValue)
      || (!isNaN(newStartValue) && !isNaN(settings.maxValue))) {

      if (newStartValue < 0 && settings.maxValue < 0) {
        dispatch(AdvSetMessageAC("max and start values should be positive"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newStartValue < 0) {
        dispatch(AdvSetMessageAC("start value should be equal 0 or positive"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, startValue: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newStartValue === 0 && settings.maxValue === 5) {
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, startValue: false, maxValue: false}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: false}))

      } else if (newStartValue > settings.maxValue) {
        dispatch(AdvSetMessageAC("start value shouldn't be greater than max value"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newStartValue === settings.maxValue) {
        dispatch(AdvSetMessageAC("start value shouldn't be equal max value"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: true}))

      } else if (newStartValue === settings.maxValue) {
        dispatch(AdvSetMessageAC("start value shouldn't be equal max value"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue >= 255 && settings.maxValue === 255) {
        dispatch(AdvSetMessageAC("max and start values shouldn't be greater or equal 255"))
        dispatch(AdvSetSettingsAC({...settings, maxValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: true}))
        dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (Number.isInteger(newStartValue) && newStartValue < 255 && settings.maxValue < 255) {
        dispatch(AdvSetMessageAC("enter values and press 'set'"))
        dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(AdvSetErrorAC({...error, maxStartValues: false, startValue: false, maxValue: false, message: true}))
        dispatch(AdvSetDisabledAC({...disabled, setButton: false}))
      }
    } else {
      dispatch(AdvSetMessageAC("start value should be of type 'number'"))
      dispatch(AdvSetSettingsAC({...settings, startValue: newStartValue}))
      dispatch(AdvSetErrorAC({...error, startValue: true}))
      dispatch(AdvSetDisabledAC({...disabled, setButton: true}))
    }
  }

  const setValuesHandler = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0 && newValues.maxValue > newValues.startValue) {
      dispatch(AdvSetSettingsAC(newValues))
      dispatch(AdvSetMessageAC("press 'inc' to increment the value"))
      dispatch(AdvResHandlerAC())
      dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: false, timerButton: false}))
      // localStorage.setItem('settings-values-1', JSON.stringify(newValues))
      // localStorage.setItem('inc-value-1', JSON.stringify(newValues.startValue))
    }
  }


  // useEffect(() => {
  //   let prevValue = localStorage.getItem('inc-value-1')
  //   if (prevValue) {
  //     incHandler()
  //   }
  // })
  //
  // useEffect(() => {
  //   let prevSettings = localStorage.getItem('settings-values-1')
  //   if (prevSettings) {
  //     let newSettings = JSON.parse(prevSettings)
  //     dispatch(SetSettingsAC(newSettings))
  //   }
  // }, [])

  // useEffect(() => {
  //   if (counting) {
  //     let timer = setTimeout(() => {
  //       incHandler()
  //       dispatch(AdvSetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
  //       // localStorage.setItem('count-value-1', JSON.stringify(+value + 1))
  //     }, 1000)
  //
  //     setTimeout(() => {
  //       clearInterval(timer)
  //       dispatch(AdvSetCountingAC(false))
  //       dispatch(AdvSetDisabledAC({...disabled, resButton: false, setButton: false, incButton: true, timerButton: true}))
  //     }, (settings.maxValue - settings.startValue) * 1000);
  //   }
  // })

  return (
    <div className={css.app}>
      <h1 className={c.title}>{props.name}</h1>
      <div className={c.counterWrapperColumns}>
        <div className={c.app}>
          <Routes>
            <Route
              path="/counters"
              element={
                <ChangeCounter
                  value={value}
                  settings={settings}
                  incCallback={incHandler}
                  resetCallback={resetHandler}
                  timerCallback={timerHandler}
                  onOpenSetCallback={onOpenSetHandler}
                  disabled={disabled}
                  message={message}
                  error={error}
                />
              }
            />
            <Route
              path="/counters/advanced-counter/settings"
              element={
                <Settings
                  settings={settings}
                  setValuesHandler={setValuesHandler}
                  onChangeMaxValueHandler={onChangeMaxValueHandler}
                  onChangeStartValueHandler={onChangeStartValueHandler}
                  error={error}
                  disabled={disabled}
                  value={value}
                  message={message}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdvancedCounter;
