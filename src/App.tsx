import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter"

export type ErrorType = {
  maxValue: boolean
  startValue: boolean
  maxStartValues: boolean
}
export type DisabledType = {
  incButton: boolean
  resButton: boolean
  setButton: boolean
}

function App() {
  const [value, setValue] = useState<number | string>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [settings, setSettings] = useState<{ maxValue: number; startValue: number }>({maxValue: 5, startValue: 0})
  const [firstRendering, setFirstRendering] = useState(true) // это для localStorage
  const [error, setError] = useState<ErrorType>({
    maxValue: false,
    startValue: false,
    maxStartValues: false
  })
  const [disabled, setDisabled] = useState<DisabledType>({
    incButton: false,
    resButton: true,
    setButton: true
  })

  const incHandler = () => {
    if (value < settings.maxValue) {
      setValue(prevState => +prevState + 1);
      setDisabled({...disabled, resButton: false})
    }
  }
  const resetHandler = () => {
    setValue(settings.startValue);
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber
    if (newMaxValue < 0) {
      setError({...error, maxValue: true})
      setValue("max value should be positive")
      setMaxValue(newMaxValue)
    } else if (newMaxValue === 5 && startValue === 0) {
      setMaxValue(newMaxValue)
      setValue(value)
      setDisabled({...disabled, setButton: true})
    } else if (newMaxValue <= startValue) {
      setError({...error, maxStartValues: true})
      setValue("max value should be greater than start value")
      setMaxValue(newMaxValue)
    } else {
      setDisabled({...disabled, setButton: false})
      setMaxValue(newMaxValue)
      setError({...error, maxStartValues: false, maxValue: false, startValue: false})
      setValue("enter values and press set")
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;
    if (newStartValue < 0) {
      setStartValue(newStartValue)
      setError({...error, startValue: true})
      setValue("start value should be positive")
    } else if (newStartValue === 0 && maxValue === 5) {
      setStartValue(newStartValue)
      setValue(value)
      setDisabled({...disabled, setButton: true})
    } else if (newStartValue >= maxValue) {
      setError({...error, maxStartValues: true})
      setValue("max value should be greater than start value")
      setStartValue(newStartValue)
      setDisabled({...disabled, setButton: true})
    } else {
      setDisabled({...disabled, setButton: false})
      setError({...error, maxStartValues: false, maxValue: false, startValue: false})
      setStartValue(newStartValue)
      setValue("enter values and press set")
    }
  }

  const setValuesHandler = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0) {
      setSettings(newValues)
      setValue(newValues.startValue)
      setDisabled({...disabled, setButton: true})
    }
  }

  useEffect(() => {
    !firstRendering && localStorage.setItem('inc-value', JSON.stringify(value))
  }, [value])
  useEffect(() => {
    let prevValue = localStorage.getItem('inc-value')
    if (prevValue) {
      let newValue = JSON.parse(prevValue)
      setValue(newValue)
    }
    setFirstRendering(false)
  }, [])

  useEffect(() => {
    !firstRendering && localStorage.setItem('settings-values', JSON.stringify(settings))
  }, [settings])
  useEffect(() => {
    let prevSettings = localStorage.getItem('settings-values')
    if (prevSettings) {
      let newSettings = JSON.parse(prevSettings)
      setSettings(newSettings)
      setStartValue(newSettings.startValue)
    }
    setFirstRendering(false)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={value as number}
          startValue={startValue}
          maxValue={maxValue}
          incHandler={incHandler}
          resetHandler={resetHandler}
          setValuesHandler={setValuesHandler}
          onChangeMaxValueHandler={onChangeMaxValueHandler}
          onChangeStartValueHandler={onChangeStartValueHandler}
          disabled={disabled}
          error={error}
        />
      </header>
    </div>
  );
}

export default App;
