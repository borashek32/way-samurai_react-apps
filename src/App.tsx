import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter"

export type ErrorType = {
  startValue: boolean
  maxStartValues: boolean
}
export type DisabledType = {
  incButton: boolean
  resButton: boolean
  setButton: boolean
}
export type SettingsType = {
  maxValue: number;
  startValue: number
}

function App() {
  const [value, setValue] = useState<number | string>(0)
  const [settings, setSettings] = useState<SettingsType>({maxValue: 5, startValue: 0})
  const [error, setError] = useState<ErrorType>({startValue: false, maxStartValues: false})
  const [disabled, setDisabled] = useState<DisabledType>({incButton: false, resButton: true, setButton: true})

  const incHandler = () => {
    if (value < settings.maxValue) {
      setValue(+value + 1);
    }
    if (+value + 1 > settings.startValue) {
      setDisabled({...disabled, resButton: false})
    }
  }

  const resetHandler = () => {
    setValue(settings.startValue);
    setDisabled({...disabled, resButton: true, incButton: false})
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber
    if (newMaxValue < 0 && settings.startValue > 0) {
      setError({...error, maxStartValues: true})
      setValue("max value should be positive")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newMaxValue === 5 && settings.startValue === 0) {
      setSettings({...settings, maxValue: newMaxValue})
      setValue(value)
      setDisabled({...disabled, resButton: true, setButton: false, incButton: true})

    } else if (newMaxValue > 0 && settings.startValue < 0) {
      setError({...error, startValue: true})
      setValue("start values should be positive")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newMaxValue > 0 && settings.startValue < 0) {
      setError({...error, startValue: true})
      setValue("start value should be positive")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})
// common case
    } else if (newMaxValue === 0 && settings.startValue < 0 || newMaxValue === 0 && settings.startValue > 0) {
      setError({...error, startValue: true})
      setValue("max value can't be equal 0")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newMaxValue < 0 && settings.startValue < 0) {
      setError({...error, startValue: true, maxStartValues: true})
      setValue("max and start values should be positive")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
      setError({...error, maxStartValues: true})
      setValue("max value should be greater than start value")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else {
      setDisabled({...disabled, resButton: true, setButton: false, incButton: true})
      setSettings({...settings, maxValue: newMaxValue})
      setError({...error, maxStartValues: false, startValue: false})
      setValue("enter values and press 'set'")
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;
    if (newStartValue < 0 && settings.maxValue < 0) {
      setSettings({...settings, startValue: newStartValue})
      setError({...error, maxStartValues: true})
      setValue("max and start values should be positive")
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newStartValue < 0) {
      setSettings({...settings, startValue: newStartValue})
      setError({...error, startValue: true})
      setValue("start value should be equal 0 or positive")
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newStartValue === 0 && settings.maxValue === 5) {
      setSettings({...settings, startValue: newStartValue})
      setValue(newStartValue)
      setError({...error, startValue: false})
      setDisabled({...disabled, resButton: true, setButton: false, incButton: true})

    } else if (newStartValue > settings.maxValue) {
      setError({...error, maxStartValues: true})
      setValue("start value shouldn't be greater than max value")
      setSettings({...settings, startValue: newStartValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else if (newStartValue === settings.maxValue) {
      setError({...error, maxStartValues: true})
      setValue("start value shouldn't be equal max value")
      setSettings({...settings, startValue: newStartValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true})

    } else {
      setDisabled({...disabled, resButton: true, setButton: false, incButton: true})
      setError({...error, maxStartValues: false, startValue: false})
      setSettings({...settings, startValue: newStartValue})
      setValue("enter values and press 'set'")
    }
  }

  const setValuesHandler = (newValues: { maxValue: number, startValue: number }) => {
    if (newValues.maxValue > 0 && newValues.startValue >= 0 && newValues.maxValue > newValues.startValue) {
      setSettings(newValues)
      setValue(newValues.startValue)
      setDisabled({...disabled, resButton: true, setButton: true, incButton: false})
      localStorage.setItem('settings-values', JSON.stringify(newValues))
      localStorage.setItem('inc-value', JSON.stringify(newValues.startValue))
    }
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

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={value}
          settings={settings}
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
