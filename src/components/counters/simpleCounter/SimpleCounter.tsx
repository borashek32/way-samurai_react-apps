import React, {ChangeEvent, useEffect, useState} from 'react'
import css from '../../../App.module.css'
import c from '../Counter.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import AdvancedCounter from "../advancedCounter/AdvancedCounter";
import {blue} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {
  IncHandlerAC,
  ResHandlerAC,
  SetDisabledAC,
  SetErrorAC, SetFinalSettingsAC,
  SetSettingsAC
} from "../../../store/counters/simple-counter-reducer";
import {AppRootStateType} from "../../../store/store";

export type ErrorType = {
  maxValue: boolean
  startValue: boolean
  maxStartValues: boolean
}
export type DisabledType = {
  incButton: boolean
  resButton: boolean
  setButton: boolean
  timerButton: boolean
}
export type SettingsType = {
  maxValue: number
  startValue: number
}
export type SimpleCounterType = {
  name: string
}

function SimpleCounter(props: SimpleCounterType) {

  const value = useSelector<AppRootStateType, number>(state => state.simpleCounter.value)
  const error = useSelector<AppRootStateType, string>(state => state.simpleCounter.error)
  const settings = useSelector<AppRootStateType, SettingsType>(state => state.simpleCounter.settings)
  const disabled = useSelector<AppRootStateType, DisabledType>(state => state.simpleCounter.disabled)
  // const counting = useSelector<AppRootStateType, boolean>(state => state.simpleCounter.counter)

  const [counting, setCounting] = useState(false)

  const dispatch = useDispatch()

  const incHandler = () => {
    if (value < settings.maxValue) dispatch(IncHandlerAC())
    if (+value + 1 >= settings.startValue) dispatch(SetDisabledAC({...disabled, resButton: false, setButton: false}))
    if (+value + 1 === settings.maxValue) dispatch(SetDisabledAC({...disabled, resButton: false, setButton: false, incButton: true, timerButton: false}))
  }
  const resetHandler = () => {
    dispatch(ResHandlerAC())
    dispatch(SetDisabledAC({...disabled, resButton: true, incButton: false, setButton: true, timerButton: false}))
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber

    if ((!isNaN(newMaxValue) && settings.startValue > 0) || (!isNaN(newMaxValue) && !isNaN(settings.startValue))) {
      if (newMaxValue < 0 && settings.startValue > 0) {
        dispatch(SetErrorAC("max value should be positive"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(SetErrorAC("start values should be positive"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(SetErrorAC("start value should be positive"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue === 0) {
        dispatch(SetErrorAC("max value can't be equal 0"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue < 0 && settings.startValue < 0) {
        dispatch(SetErrorAC("max and start values should be positive"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
        dispatch(SetErrorAC("max value should be greater than start value"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue === 255) {
        dispatch(SetErrorAC("max and start values shouldn't be greater or equal 255"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue < 255) {
        dispatch(SetErrorAC("max value shouldn't be greater or equal 255"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (Number.isInteger(newMaxValue)) {
        dispatch(SetErrorAC("enter values and press 'set'"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true}))

      } else {
        dispatch(SetErrorAC("max value should be of type 'number'"))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
      }
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;

    if (!isNaN(newStartValue) && settings.maxValue || !isNaN(newStartValue) && !isNaN(settings.maxValue)) {
      if (newStartValue < 0 && settings.maxValue < 0) {
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetErrorAC("max and start values should be positive"))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue < 0) {
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetErrorAC("start value should be equal 0 or positive"))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue > settings.maxValue) {
        dispatch(SetErrorAC("start value shouldn't be greater than max value"))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue === settings.maxValue) {
        dispatch(SetErrorAC("start value shouldn't be equal max value"))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue >= 255 && settings.maxValue === 255) {
        dispatch(SetErrorAC("max and start values shouldn't be greater or equal 255"))
        dispatch(SetSettingsAC({...settings, maxValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (Number.isInteger(newStartValue)) {
        dispatch(SetErrorAC("enter values and press 'set'"))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true}))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
      }
    } else {
      dispatch(SetErrorAC("start value should be of type 'number'"))
      dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
      dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
    }
  }

  const setFinalSettings = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0 && newValues.maxValue > newValues.startValue) {
      dispatch(SetFinalSettingsAC(newValues))
      dispatch(ResHandlerAC())
      dispatch(SetErrorAC(""))
      dispatch(SetDisabledAC({resButton: true, setButton: true, incButton: false, timerButton: false}))
      localStorage.setItem('settings-values', JSON.stringify(newValues))
      localStorage.setItem('inc-value', JSON.stringify(newValues.startValue))
    }
  }

  const timerHandler = () => {
    dispatch(SetDisabledAC({resButton: true, setButton: true, incButton: true, timerButton: true}))
    setCounting(true)
  }

  useEffect(() => {
    let prevSettings = localStorage.getItem('settings-values')
    if (prevSettings) {
      let newSettings = JSON.parse(prevSettings)
      dispatch(SetSettingsAC(newSettings))
      dispatch(ResHandlerAC())
    }
    let prevValue = localStorage.getItem('inc-value')
    if (prevValue) {

    }
  }, [])

  useEffect(() => {
    if (counting) {
      let timer = setTimeout(() => {
        incHandler()
        localStorage.setItem('count-value', JSON.stringify(+value + 1))
      }, 1000)
      dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      setTimeout(() => {
        clearInterval(timer)
        setCounting(false)
      }, (settings.maxValue - settings.startValue) * 1000);
    }
  })

  return (

    <div className={css.container} style={{backgroundColor: blue[100]}}>
      <div className={css.wrapper}>
        <div className={css.app}>
          <h1 className={c.title}>{props.name}</h1>
          <div className={c.counterWrapperColumns}>
            <ChangeCounter
              value={value}
              settings={settings}
              incCallback={incHandler}
              resetCallback={resetHandler}
              timerCallback={timerHandler}
              disabled={disabled}
              error={error}
            />
            <Settings
              settings={settings}
              setValuesHandler={setFinalSettings}
              onChangeMaxValueHandler={onChangeMaxValueHandler}
              onChangeStartValueHandler={onChangeStartValueHandler}
              error={error}
              disabled={disabled}
            />
          </div>
          <AdvancedCounter name={"Advanced counter"}/>
        </div>
      </div>
    </div>
  );
}

export default SimpleCounter;
