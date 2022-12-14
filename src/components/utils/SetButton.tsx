type SetButtonType = {
  name: string
  class: string
  disabled?: boolean
  type: ButtonType
  callback: () => void
}
type ButtonType = "button" | "submit" | "reset"

export const SetButton = (props: SetButtonType) => {
  const onClickCallback = () => {
    props.callback()
  }

  return (
    <button
      type={props.type}
      className={props.class}
      onClick={onClickCallback}
    >
      {props.name}
    </button>
  )
}