import React, {ChangeEvent, useEffect, useState} from 'react'
import '../App.css'
import {Counter} from "./Counter/Counter"
import {BrowserRouter} from "react-router-dom";

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

function App1() {
  const [value, setValue] = useState<number>(0)
  const [message, setMessage] = useState<string>("enter values and press 'set'")
  const [settings, setSettings] = useState<SettingsType>({maxValue: 5, startValue: 0})
  const [error, setError] = useState<ErrorType>
    ({startValue: false, maxStartValues: false, maxValue: false, message: true})
  const [disabled, setDisabled] = useState<DisabledType>
    ({incButton: false, resButton: true, setButton: false, timerButton: false})
  const [counting, setCounting] = useState(false)

  const incHandler = () => {
    if (value < settings.maxValue) setValue(+value + 1)
    if (+value + 1 > settings.startValue) setDisabled({...disabled, resButton: false})
  }

  const resetHandler = () => {
    setValue(settings.startValue);
    setDisabled({...disabled, resButton: true, incButton: false, setButton: false, timerButton: false})
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber

    if (!isNaN(newMaxValue) && settings.startValue > 0 || !isNaN(newMaxValue) && !isNaN(settings.startValue)) {
      if (newMaxValue < 0 && settings.startValue > 0) {
        setMessage("max value should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      // } else if (newMaxValue === 5 && settings.startValue === 0) {
      //   setMessage("enter values and press 'set'")
      //   setSettings({...settings, maxValue: newMaxValue})
      //   setError({...error, maxValue: false, startValue: false, maxStartValues: false})
      //   setDisabled({...disabled, setButton: false})

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        setMessage("start values should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, startValue: true})
        setDisabled({...disabled, setButton: true})

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        setMessage("start value should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, startValue: true})
        setDisabled({...disabled, setButton: true})
// common case
      } else if (newMaxValue === 0 && settings.startValue < 0 || newMaxValue === 0 && settings.startValue > 0) {
        setMessage("max value shouldn't be equal 0")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, startValue: true})
        setDisabled({...disabled, setButton: true})

      } else if (newMaxValue < 0 && settings.startValue < 0) {
        setMessage("max and start values should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, startValue: true, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
        setMessage("max value should be greater than start value")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      } else {
        setMessage("enter values and press 'set'")
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, maxStartValues: false, startValue: false, maxValue: false, message: true})
        setDisabled({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true})
      }
    } else {
      setMessage("max value should be of type 'number'")
      setSettings({...settings, maxValue: newMaxValue})
      setError({...error, maxValue: true})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})
    }
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;

    if (!isNaN(newStartValue) && settings.maxValue || !isNaN(newStartValue) && !isNaN(settings.maxValue)) {
      if (newStartValue < 0 && settings.maxValue < 0) {
        setMessage("max and start values should be positive")
        setSettings({...settings, startValue: newStartValue})
        setError({...error, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      } else if (newStartValue < 0) {
        setMessage("start value should be equal 0 or positive")
        setSettings({...settings, startValue: newStartValue})
        setError({...error, startValue: true})
        setDisabled({...disabled, setButton: true})

      } else if (newStartValue === 0 && settings.maxValue === 5) {
        setSettings({...settings, startValue: newStartValue})
        setError({...error, startValue: false, maxValue: false})
        setDisabled({...disabled, setButton: false})

      } else if (newStartValue > settings.maxValue) {
        setMessage("start value shouldn't be greater than max value")
        setSettings({...settings, startValue: newStartValue})
        setError({...error, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      } else if (newStartValue === settings.maxValue) {
        setMessage("start value shouldn't be equal max value")
        setSettings({...settings, startValue: newStartValue})
        setError({...error, maxStartValues: true})
        setDisabled({...disabled, setButton: true})

      } else {
        setMessage("enter values and press 'set'")
        setDisabled({...disabled, setButton: false})
        setError({...error, maxStartValues: false, startValue: false, maxValue: false, message: true})
        setSettings({...settings, startValue: newStartValue})
      }
    } else {
      setMessage("start value should be of type 'number'")
      setSettings({...settings, startValue: newStartValue})
      setError({...error, startValue: true})
      setDisabled({...disabled, setButton: true})
    }
  }

  const setValuesHandler = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0 && newValues.maxValue > newValues.startValue) {
      setSettings(newValues)
      setValue(newValues.startValue)
      setDisabled({...disabled, resButton: true, setButton: true, incButton: false, timerButton: false})
      localStorage.setItem('settings-values', JSON.stringify(newValues))
      localStorage.setItem('inc-value', JSON.stringify(newValues.startValue))
    }
  }
// timer
  const timerHandler = () => {
    setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})
    setCounting(true)
  }

  useEffect(() => {
    let prevValue = localStorage.getItem('inc-value')
    if (prevValue) {
      let newValue = JSON.parse(prevValue)
      setValue(newValue)
    }
  }, [])

  useEffect(() => {
    let prevSettings = localStorage.getItem('settings-values')
    if (prevSettings) {
      let newSettings = JSON.parse(prevSettings)
      setSettings(newSettings)
    }
  }, [])

  useEffect(() => {
    if (counting) {
      let timer = setTimeout(() => {
        incHandler()
        localStorage.setItem('count-value', JSON.stringify(+value + 1))
      }, 1000)

      setTimeout(() => {
        clearInterval(timer)
        setCounting(false)
        setDisabled({...disabled, resButton: false, setButton: false, incButton: true, timerButton: true})
      }, (settings.maxValue - settings.startValue) * 1000);
    }
  })

  return (
    <BrowserRouter>
      <div className="">
        <header className="App-header">
          <Counter
            value={value}
            settings={settings}
            incHandler={incHandler}
            resetHandler={resetHandler}
            setValuesHandler={setValuesHandler}
            onChangeMaxValueHandler={onChangeMaxValueHandler}
            onChangeStartValueHandler={onChangeStartValueHandler}
            timerHandler={timerHandler}
            disabled={disabled}
            error={error}
            message={message}
          />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App1;
