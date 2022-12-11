type ButtonType = {
  name: string
  class: string
  callback: () => void
  disabled?: boolean
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }

  return (
    <button onClick={onClickHandler} className={props.class}>
      {props.name}
    </button>
  )
}