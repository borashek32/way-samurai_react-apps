type ButtonType = {
  name: string
  class: string
  callback: (value?: number | string) => void
  value?: number | string
  type: ButtonPropsType
}
type ButtonPropsType = "button" | "submit" | "reset"

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callback()
    // (props.value) ? props.callback(props.value) : props.callback()
  }

  return (
    <button
      onClick={onClickHandler}
      className={props.class}
      type={props.type}
    >
      {props.name}
    </button>
  )
}