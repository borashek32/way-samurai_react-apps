import css from "../Counter.module.css";
import {Button} from "../../utils/Button";

type ChangeCounterType = {
  value: number
  class: string
  maxValue?: number
  startValue?: number
  incCallback: () => void
  resetCallback: (value: number) => void
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const plusClassName = css.button
    + ((props.value === props.maxValue) ? ' ' + css.disabledButton : '')
  const resetClassName = css.button
    + ((props.value === props.startValue) ? ' ' + css.disabledButton : '')

  const resetCallback = (value: number) => {
    props.resetCallback(value)
  }

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        <h1 className={props.class}>{props.value}</h1>
      </div>
      <div className={css.counterSubWrapper}>
        <div className={css.buttonsWrapper}>
          <Button name={"inc"} class={plusClassName} callback={props.incCallback} value={props.value} />
          <Button name={"reset"} class={resetClassName} callback={resetCallback} value={props.value} />
        </div>
      </div>
    </div>
  )
}