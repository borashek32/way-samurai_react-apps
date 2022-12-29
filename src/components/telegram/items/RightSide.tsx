import s from "../Telegram.module.css";
import {MessageType} from "../Telegram";
import {ChangeEvent, useState} from "react";
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";


export type RightSideType = {
  messages: MessageType[]
  addMessage: (value: string) => void
  onChangeTextArea: (value: string) => void
}

export const RightSide: React.FC<RightSideType> = ({
                                                     messages,
                                                     addMessage,
                                                     onChangeTextArea,
                                                   }) => {
  const [value, setValue] = useState('')
  const m = messages.map(m => {
    return (
      <div key={m._id}>
        <div className={s.messageWrapper}>
          <div className={s.messageUser}>
            {m.userName}
          </div>
          <div className={s.messageText}>
            {m.text}
          </div>
        </div>
        <p className={s.messageTime}>{m.time}</p>
      </div>
    )
  })

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onEnterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessageCallback()
    }
  }

  const addMessageCallback = () => {
    if (value.trim()) {
      addMessage(value.trim())
    }
    setValue("")
  }

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover': {
              color: "white",
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#1565c0',
                borderWidth: '.5px',
              }
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#1565c0',
              borderWidth: '.5px',
            },
            '&:placeholder': {
              color: "#ffffff"
            },
          },
        },
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={s.container}>
        <div className={s.sideContainer}>
          <h4 className={s.titleRight}>right user</h4>
          <div className={s.messages}>
            {m}
          </div>
          <div className={s.sendSection}>
            <TextField
              sx={{width: "100%", color: "white"}}
              size="small"
              rows="1"
              margin="none"
              value={value}
              onKeyDown={onEnterAddItem}
              onChange={onChangeCallback}
              // className={error ? "input-error" : ""}
              label="Message"
              // helperText={error && "Enter new title"}
            />

            <div className={s.sendSection}>
              <Button
                variant="outlined"
                onClick={addMessageCallback}
                value={value}
              >
                send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}