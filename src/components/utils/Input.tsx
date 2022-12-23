import {ChangeEvent} from "react";

type InputType = {
  value: number
  type: string
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  erroredInput?: boolean
  class: string
}

export const Input = (props: InputType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeCallback(e)
  }

  return (
    <input
      className={props.class}
      onChange={onChangeCallback}
      value={props.value}
      type={props.type}
    />
  )
}