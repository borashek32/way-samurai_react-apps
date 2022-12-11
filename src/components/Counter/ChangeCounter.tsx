import css from "./Counter.module.css";

type ChangeCounterType = {
  counter: number
  class: string
}

export const ChangeCounter = (props: ChangeCounterType) => {
  return (
    <h1 className={props.class}>{props.counter}</h1>
  )
}