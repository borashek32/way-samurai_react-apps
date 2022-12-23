import css from "../../components/Counter/Counter.module.css";

type ButtonType = {
  name: string
  class: string
  callback: (value?: number) => void
  disabled?: boolean
  value?: number
  type: ButtonPropsType
}
type ButtonPropsType = "button" | "submit" | "reset"

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    (props.value) ? props.callback(props.value) : props.callback()
  }

  return (
    <button
      onClick={onClickHandler}
      className={props.disabled ? props.class + ' ' + css.disabledButton : props.class}
      type={props.type}
    >
      {props.name}
    </button>
  )
}