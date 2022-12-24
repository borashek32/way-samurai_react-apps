type ButtonType = {
  name: string
  class: string
  callback: (value?: number | string) => void
  value?: number | string
  disabled?: boolean
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    (props.value) ? props.callback(props.value) : props.callback()
  }

  return (
    <button
      onClick={onClickHandler}
      className={props.class}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  )
}