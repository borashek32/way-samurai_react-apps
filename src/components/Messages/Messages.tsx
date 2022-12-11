import css from './Messages.module.css'
import {Button} from "../utils/Button"
import {ChangeEvent, KeyboardEvent, useState} from "react"
import {Input} from "../utils/Input"
import {messagesLimit} from '../../state/state'
import {Message, MessageType} from "./Message";

export type MessagesType = {
  messages: Array<MessageType>
  title: string
  callback: (title: string) => void
  deleteOneMessage: (id: string) => void
  deleteLastMessage: (messages: Array<MessageType>) => void
}

export const Messages = (props: MessagesType) => {
  const sendClassName = css.button
  let [title, setTitle] = useState("")
  let [error, setError] = useState(false)
  let [limitError, setLimitError] = useState(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setError(false)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      sendMessageHandler()
    }
  }
  const sendMessageHandler = () => {
    if (props.messages.length < messagesLimit) {
      if (title.trim() !== '') {
        props.callback(title.trim())
      } else {
        setError(true)
      }
      setTitle("")
    } else {
      setLimitError(true)
    }
  }
  const deleteLastMessageHandler = () => {
    props.deleteLastMessage(props.messages)
  }
  const mappedMessages = props.messages.map((m) => {
    return (
      <Message
        message={m}
        deleteOneMessage={props.deleteOneMessage}
      />
    )
  })

  return (
    <div>
      <h1>{props.title}</h1>
      {limitError && <p className={css.errorMessage}>Limit of messages is exceeded</p>}
      <div className={css.messagesWrapper}>
        <Input
          title={title}
          onChangeCallback={onChangeHandler}
          onKeyPressCallback={onKeyPressHandler}
        />
        <Button
          name={"Send"}
          class={sendClassName}
          callback={sendMessageHandler}
        />
      </div>
      {error && <p className={css.errorMessage}>Title is required</p>}
      <div className={css.deleteLastMessageWrapper}>
        <Button
          name={'Delete the last message'}
          class={css.button}
          callback={deleteLastMessageHandler}
        />
      </div>
      {mappedMessages}
    </div>
  )
}