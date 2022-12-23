import React, {ChangeEvent, useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter"
import {saveState} from "./localStorage/localStorage";

function App() {
  const [value, setValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [settings, setSettings] = useState<{maxValue: number; startValue: number}>({maxValue: 5, startValue: 0})

  const [message, setMessage] = useState<boolean>(false)

  const [disabledButton, setDisabledButton] = useState<boolean>(true)

  const [erroredMaxValueInput, setErroredMaxValueInput] = useState<boolean>(false)
  const [erroredStartValueInput, setErroredStartValueInput] = useState<boolean>(false)
  const [erroredMaxStart, setErroredMaxStart] = useState<boolean>(false)

  const incHandler = () => {
    if (value < settings.maxValue) {
      setValue(prevState => ++prevState);
      saveState<number>('advanced-counter-inc-value', value)
    }
  }
  const resetHandler = () => {
    setValue(settings.startValue);
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber
    if (newMaxValue <= 0) {
      setDisabledButton(true)
      setErroredMaxValueInput(true)
      setMaxValue(newMaxValue)
    } else if (newMaxValue === 5 && startValue === 0) {
      setDisabledButton(true)
      setMaxValue(newMaxValue)
      setMessage(false)
    } else if (newMaxValue <= startValue) {
      setDisabledButton(true)
      setErroredMaxStart(true)
      setMaxValue(newMaxValue)
    } else {
      setMaxValue(newMaxValue)
      setMessage(true)
      setDisabledButton(false)
      setErroredMaxValueInput(false)
      setErroredStartValueInput(false)
      setErroredMaxStart(false)
      saveState<number>('advanced-counter-max-value', newMaxValue)
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber;
    if (newStartValue < 0) {
      setDisabledButton(true)
      setErroredStartValueInput(true)
      setStartValue(newStartValue)
    } else if (newStartValue === 0 && maxValue) {
      setDisabledButton(true)
      setStartValue(newStartValue)
      setMessage(false)
    } else if (newStartValue >= maxValue) {
      setDisabledButton(true)
      setErroredMaxStart(true)
      setStartValue(newStartValue)
    } else {
      setStartValue(newStartValue)
      setMessage(true)
      setDisabledButton(false)
      setErroredStartValueInput(false)
      setErroredMaxValueInput(false)
      setErroredMaxStart(false)
      saveState<number>('advanced-counter-start-value', newStartValue)
    }
  }

  const setValuesHandler = (newValues: {maxValue: number, startValue: number}) => {
      setSettings(newValues)
      setValue(newValues.startValue)
      setMessage(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={value}
          startValue={startValue}
          maxValue={maxValue}

          incHandler={incHandler}
          resetHandler={resetHandler}
          setValuesHandler={setValuesHandler}

          onChangeMaxValueHandler={onChangeMaxValueHandler}
          onChangeStartValueHandler={onChangeStartValueHandler}

          disabledButton={disabledButton}

          message={message}

          erroredMaxValueInput={erroredMaxValueInput}
          erroredStartValueInput={erroredStartValueInput}
          erroredMaxStart={erroredMaxStart}
        />
      </header>
    </div>
  );
}

export default App;
