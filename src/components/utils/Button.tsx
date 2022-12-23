type ButtonType = {
  name: string
  class: string
  callback: (value: number) => void
  disabled?: boolean
  value?: number
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.value ? props.callback(props.value) : ''
  }

  return (
    <button onClick={onClickHandler} className={props.class}>
      {props.name}
    </button>
  )
}