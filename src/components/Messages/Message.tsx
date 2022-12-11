import css from "./Messages.module.css";
import {Button} from "../utils/Button";

export type MessagePropType = {
  message: MessageType
  deleteOneMessage: (id: string) => void
}
export type MessageType = {
  id: string
  title: string
}

export const Message = (props: MessagePropType) => {
  const deleteMessageCallback = (id: string) => {
    props.deleteOneMessage(props.message.id)
  }

  return (
    <div key={props.message.id} className={css.messageWrapper}>
      <p>{props.message.title}</p>
      <Button
        name={"Delete"}
        class={css.button}
        callback={() => deleteMessageCallback(props.message.id)}
      />
    </div>
  )
}