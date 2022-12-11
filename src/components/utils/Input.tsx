import {ChangeEvent, KeyboardEvent} from "react";

type InputType = {
  title: string
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputType) => {
  const onChangeCallbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeCallback(e)
  }
  const onKeyPressCallbackHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyPressCallback(e)
  }

  return (
    <input
      value={props.title}
      onChange={onChangeCallbackHandler}
      onKeyPress={onKeyPressCallbackHandler}
      type="text"
    />
  )
}