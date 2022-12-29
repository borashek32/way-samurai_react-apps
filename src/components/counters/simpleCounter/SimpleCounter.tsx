import React, {ChangeEvent, useEffect, useState} from 'react'
import css from '../../../App.module.css'
import c from '../Counter.module.css'
import {ChangeCounter} from "./items/ChangeCounter";
import {Settings} from "./items/Settings";

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
  maxValue: number;
  startValue: number
}
export type App0Type = {
  name: string
}

function SimpleCounter(props: App0Type) {
  const [value, setValue] = useState<number | string>(0)
  const [settings, setSettings] = useState<SettingsType>({maxValue: 5, startValue: 0})
  const [error, setError] = useState<ErrorType>({startValue: false, maxStartValues: false, maxValue: false})
  const [disabled, setDisabled] = useState<DisabledType>
  ({incButton: false, resButton: true, setButton: true, timerButton: false})
  const [counting, setCounting] = useState(false)

  const incHandler = () => {
    if (value < settings.maxValue) setValue(+value + 1)
    if (+value + 1 >= settings.startValue) setDisabled({...disabled, resButton: false, setButton: false})
    if (+value + 1 === settings.maxValue) setDisabled
    ({...disabled, resButton: false, setButton: false, incButton: true, timerButton: false})
  }

  const resetHandler = () => {
    setValue(settings.startValue);
    setDisabled({...disabled, resButton: true, incButton: false, setButton: true, timerButton: false})
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber

    if (!isNaN(newMaxValue) && settings.startValue > 0 || !isNaN(newMaxValue) && !isNaN(settings.startValue)) {
      if (newMaxValue < 0 && settings.startValue > 0) {
        setError({...error, maxStartValues: true})
        setValue("max value should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newMaxValue === 5 && settings.startValue === 0) {
        setSettings({...settings, maxValue: newMaxValue})
        setValue(value)
        setDisabled({...disabled, resButton: true, setButton: false, incButton: true, timerButton: false})

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        setError({...error, startValue: true})
        setValue("start values should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newMaxValue > 0 && settings.startValue < 0) {
        setError({...error, startValue: true})
        setValue("start value should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})
// common case
      } else if (newMaxValue === 0 && settings.startValue < 0 || newMaxValue === 0 && settings.startValue > 0) {
        setError({...error, startValue: true})
        setValue("max value can't be equal 0")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newMaxValue < 0 && settings.startValue < 0) {
        setError({...error, startValue: true, maxStartValues: true})
        setValue("max and start values should be positive")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newMaxValue <= settings.startValue || (newMaxValue < 0 && settings.startValue < 0)) {
        setError({...error, maxStartValues: true})
        setValue("max value should be greater than start value")
        setSettings({...settings, maxValue: newMaxValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else {
        setDisabled({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true})
        setSettings({...settings, maxValue: newMaxValue})
        setError({...error, maxStartValues: false, startValue: false, maxValue: false})
        setValue("enter values and press 'set'")
      }
    } else {
      setError({...error, maxValue: true})
      setValue("max value should be of type 'number'")
      setSettings({...settings, maxValue: newMaxValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;

    if (!isNaN(newStartValue) && settings.maxValue || !isNaN(newStartValue) && !isNaN(settings.maxValue)) {
      if (newStartValue < 0 && settings.maxValue < 0) {
        setSettings({...settings, startValue: newStartValue})
        setError({...error, maxStartValues: true})
        setValue("max and start values should be positive")
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newStartValue < 0) {
        setSettings({...settings, startValue: newStartValue})
        setError({...error, startValue: true})
        setValue("start value should be equal 0 or positive")
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newStartValue === 0 && settings.maxValue === 5) {
        setSettings({...settings, startValue: newStartValue})
        setValue(newStartValue)
        setError({...error, startValue: false})
        setDisabled({...disabled, resButton: true, setButton: false, incButton: true})

      } else if (newStartValue > settings.maxValue) {
        setError({...error, maxStartValues: true})
        setValue("start value shouldn't be greater than max value")
        setSettings({...settings, startValue: newStartValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else if (newStartValue === settings.maxValue) {
        setError({...error, maxStartValues: true})
        setValue("start value shouldn't be equal max value")
        setSettings({...settings, startValue: newStartValue})
        setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      } else {
        setDisabled({...disabled, resButton: true, setButton: false, incButton: true, timerButton: true})
        setError({...error, maxStartValues: false, startValue: false, maxValue: false})
        setSettings({...settings, startValue: newStartValue})
        setValue("enter values and press 'set'")
      }
    } else {
      setError({...error, startValue: true})
      setValue("start value should be of type 'number'")
      setSettings({...settings, startValue: newStartValue})
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})
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
      setDisabled({...disabled, resButton: true, setButton: true, incButton: true, timerButton: true})

      setTimeout(() => {
        clearInterval(timer)
        setCounting(false)
      }, (settings.maxValue - settings.startValue) * 1000);
    }
  })

  return (
    <div className={css.wrapper}>
      <header className={css.app}>
        <h1 className={css.title}>{props.name}</h1>
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
            setValuesHandler={setValuesHandler}
            onChangeMaxValueHandler={onChangeMaxValueHandler}
            onChangeStartValueHandler={onChangeStartValueHandler}
            error={error}
            disabled={disabled}
          />
        </div>
      </header>
    </div>
  );
}

export default SimpleCounter;
