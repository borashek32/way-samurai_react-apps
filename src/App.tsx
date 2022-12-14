import React, {ChangeEvent, useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter"

function App() {
  const [settings, setSettings] = useState<{maxValue: number; startValue: number}>({maxValue: 5, startValue: 0})

  const [value, setValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)

  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const [erroredMaxValueInput, setErroredMaxValueInput] = useState<boolean>(false)
  const [erroredStartValueInput, setErroredStartValueInput] = useState<boolean>(false)

  const incHandler = () => {
    if (value < settings.maxValue) {
      setValue(prevState => ++prevState);
    }
  }
  const resetHandler = () => {
    setValue(settings.startValue);
  }

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber
    if (newMaxValue < 0) {
      setDisabledButton(true)
      setErroredMaxValueInput(true)
    } else {
      setMaxValue(newMaxValue)

      setDisabledButton(false)
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStart = e.currentTarget.valueAsNumber;

    if (newStart < 0) {
      setDisabledButton(true)
      setErroredStartValueInput(true)
    } else {
      setStartValue(newStart)
      setDisabledButton(false)
    }
  }
  const setValuesHandler = (newValues: {maxValue: number, startValue: number}) => {
    setSettings(newValues)
    setValue(newValues.startValue)
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
          erroredMaxValueInput={erroredMaxValueInput}
          erroredStartValueInput={erroredStartValueInput}
          disabledButton={disabledButton}
        />
      </header>
    </div>
  );
}

export default App;
