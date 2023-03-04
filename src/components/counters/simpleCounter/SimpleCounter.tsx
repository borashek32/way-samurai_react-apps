import React, {ChangeEvent, useEffect, useState} from 'react'
import css from '../../../App.module.sass'
import c from '../Counter.module.sass'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
  IncHandlerAC,
  ResHandlerAC,
  SetDisabledAC,
  SetFinalSettingsAC,
  SetMessageAC,
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

export const messages: Array<string> = [
  "max and start values should be positive", // 0
  "start value should be positive", // 1
  "start value should be positive", // 2
  "max value can't be equal 0", // 3
  "max and start values should be positive", // 4
  "max value should be greater than start value", // 5
  "max and start values shouldn't be greater or equal 255", // 6
  "max value shouldn't be greater or equal 255", // 7
  "set values and press 'set'", // 8 // to set values
  "max value should be of type 'number'", // 9
  "start value shouldn't be equal max value", // 10
  "start value should be of type 'number'" // 11
]

const SimpleCounter = (props: SimpleCounterType) => {

  console.log("simple counter")

  const value = useSelector<AppRootStateType, number>(state => state.simpleCounter.value)
  const settings = useSelector<AppRootStateType, SettingsType>(state => state.simpleCounter.settings)
  const disabled = useSelector<AppRootStateType, DisabledType>(state => state.simpleCounter.disabled)
  const message = useSelector<AppRootStateType, string>(state => state.simpleCounter.message)

  const [counting, setCounting] = useState(false)

  const dispatch = useDispatch()


  const incHandler = () => {
    if (value < settings.maxValue) dispatch(IncHandlerAC())
    if (+value + 1 >= settings.startValue) dispatch(SetDisabledAC({...disabled, resButton: false, setButton: false}))
    if (+value + 1 === settings.maxValue) dispatch(SetDisabledAC({
      ...disabled,
      resButton: false,
      setButton: false,
      incButton: true,
      timerButton: false
    }))
  }
  const resetHandler = () => {
    dispatch(ResHandlerAC())
    dispatch(SetDisabledAC({...disabled, resButton: true, incButton: false, setButton: true, timerButton: false}))
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber

    if ((!isNaN(newMaxValue) && settings.startValue > 0) || (!isNaN(newMaxValue) && !isNaN(settings.startValue))) {
      if (newMaxValue < 0 && settings.startValue > 0) {
        dispatch(SetMessageAC(messages[0]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(SetMessageAC(messages[1]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        dispatch(SetMessageAC(messages[2]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue === 0) {
        dispatch(SetMessageAC(messages[3]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue < 0 && settings.startValue < 0) {
        dispatch(SetMessageAC(messages[4]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
        dispatch(SetMessageAC(messages[5]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue === 255) {
        dispatch(SetMessageAC(messages[6]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newMaxValue >= 255 && settings.startValue < 255) {
        dispatch(SetMessageAC(messages[7]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
// set values case
      } else if (Number.isInteger(newMaxValue)) {
        dispatch(SetMessageAC(messages[8]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true}))

      } else {
        dispatch(SetMessageAC(messages[9]))
        dispatch(SetSettingsAC({...settings, maxValue: newMaxValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
      }
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;

    if ((!isNaN(newStartValue) && settings.maxValue) || (!isNaN(newStartValue) && !isNaN(settings.maxValue))) {
      if (newStartValue < 0 && settings.maxValue < 0) {
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetMessageAC(messages[0]))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue < 0) {
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetMessageAC(messages[1]))
        console.log(messages[1])
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue > settings.maxValue) {
        dispatch(SetMessageAC(messages[5]))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue === settings.maxValue) {
        dispatch(SetMessageAC(messages[6]))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))

      } else if (newStartValue >= 255 && settings.maxValue === 255) {
        dispatch(SetMessageAC(messages[6]))
        dispatch(SetSettingsAC({...settings, maxValue: newStartValue}))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
// set values case
      } else if (Number.isInteger(newStartValue)) {
        dispatch(SetMessageAC(messages[8]))
        dispatch(SetDisabledAC({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true}))
        dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
      }
    } else {
      dispatch(SetMessageAC(messages[11]))
      dispatch(SetSettingsAC({...settings, startValue: newStartValue}))
      dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
    }
  }

  const setFinalSettings = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0 && newValues.maxValue > newValues.startValue) {
      dispatch(SetFinalSettingsAC(newValues))
      dispatch(ResHandlerAC())
      dispatch(SetMessageAC(""))
      dispatch(SetMessageAC(""))
      dispatch(SetDisabledAC({resButton: true, setButton: true, incButton: false, timerButton: false}))
      localStorage.setItem('settings-values', JSON.stringify(newValues))
      localStorage.setItem('inc-value', JSON.stringify(newValues.startValue))
    }
  }

  // const timerHandler = () => {
  //   dispatch(SetDisabledAC({resButton: true, setButton: true, incButton: true, timerButton: true}))
  //   setCounting(true)
  // }

  // useEffect(() => {
  //   let prevSettings = localStorage.getItem('settings-values')
  //   if (prevSettings) {
  //     let newSettings = JSON.parse(prevSettings)
  //     dispatch(SetSettingsAC(newSettings))
  //     dispatch(ResHandlerAC())
  //   }
  //   let prevValue = localStorage.getItem('inc-value')
  //   if (prevValue) {
  //
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   if (counting) {
  //     let timer = setTimeout(() => {
  //       incHandler()
  //       localStorage.setItem('count-value', JSON.stringify(+value + 1))
  //     }, 1000)
  //     dispatch(SetDisabledAC({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true}))
  //
  //     setTimeout(() => {
  //       clearInterval(timer)
  //       setCounting(false)
  //     }, (settings.maxValue - settings.startValue) * 1000);
  //   }
  // })

  return (
    <div className={css.app}>
      <h1 className={c.title}>{props.name}</h1>
      <div className={c.counterWrapperColumns}>
        <ChangeCounter
          value={value}
          settings={settings}
          incCallback={incHandler}
          resetCallback={resetHandler}
          // timerCallback={timerHandler}
          disabled={disabled}
          message={message}
        />
        <Settings
          settings={settings}
          setValuesHandler={setFinalSettings}
          onChangeMaxValueHandler={onChangeMaxValueHandler}
          onChangeStartValueHandler={onChangeStartValueHandler}
          disabled={disabled}
          // message={message}
        />
      </div>
    </div>
  );
}

export default SimpleCounter;
