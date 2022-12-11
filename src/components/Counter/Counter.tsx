import css from './Counter.module.css'
import {useState} from "react";
import {Button} from "../utils/Button";
import {ChangeCounter} from "./ChangeCounter";

type CounterType = {
  counter: number
}

export const Counter = (props: CounterType) => {
  let [counter, setCounter] = useState(0);

  const incHandler = () => {
    if (counter < 5) {
      setCounter(++counter);
      console.log(counter);
    }
  }
  const resetHandler = () => {
    setCounter(0);
  }

  const plusClassName = css.button
    + ((counter === 5) ? ' ' + css.disabledButton : '')
  const resetClassName = css.button
    + ((counter === 0) ? ' ' + css.disabledButton : '')
  const counterClassName = css.counter
    + ((counter === 5) ? ' ' + css.disabledCounter : '')

  return (
    <div>
      <h1>Counter</h1>
      <div className={css.counterWrapper}>
        <ChangeCounter counter={counter} class={counterClassName}/>
        <div className={css.buttonsWrapper}>
          <Button name={"plus 1"} class={plusClassName} callback={incHandler} />
          <Button name={"reset"} class={resetClassName} callback={resetHandler} />
        </div>
      </div>
    </div>
  )
}