import s from "../Telegram.module.css";
import {MessageType} from "../Telegram";
import {ChangeEvent, useState, FocusEvent} from "react";
import {Avatar, Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import * as React from "react";
import {green, pink} from "@mui/material/colors";
import SendIcon from '@mui/icons-material/Send';


export type RightSideType = {
  messages: MessageType[]
  addMessage: (value: string, userName: string) => void
  onChangeTextArea: (value: string, userName: string) => void
  userName: string
}

export const LeftSide: React.FC<RightSideType> = ({
                                                    messages,
                                                    addMessage,
                                                    userName,
                                                  }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const m = messages.map(m => {
    return (
      <div key={m._id}>
        <div className={s.messageWrapper + ' '
          + (m.userName === 'Nataly' ? s.messageWrapperEnd : '')}>
          <div className={s.messageUser}>
            {m.userName === 'Nataly' ?
              <Avatar
                sx={{bgcolor: pink[500]}}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                NB
              </Avatar> :
              <Avatar
                sx={{bgcolor: green[500]}}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                IZ
              </Avatar>
            }
          </div>
          <div className={s.messageText}>
            {m.value}
          </div>
        </div>
        <p className={s.messageTime + ' '
          + (m.userName === 'Nataly' ? s.messageTimeEnd : '')}>
          10:30
        </p>
      </div>
    )
  })

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    setError('')
  }
  const onEnterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessageCallback()
    }
  }
  const onFocusCallback = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => setError('')
  const addMessageCallback = () => {
    if (value.trim() === '') {
      setError("Text field is empty")
    } else {
      addMessage(value.trim(), userName)
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
                borderColor: error ? '#e91e63' : '#1565c0',
                borderWidth: '.5px',
              }
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#e91e63' : '#1565c0',
              borderWidth: '.5px',
            }
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={s.container}>
        <div className={s.sideContainer}>
          <p className={s.titleLeft}>{userName}</p>
          <div className={s.messages}>
            {m}
          </div>
          <div className={s.sendSection}>
            <Avatar
              sx={{bgcolor: pink[500]}}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              NB
            </Avatar>
            <TextField
              size="small"
              rows="1"
              margin="none"
              value={value}
              onKeyDown={onEnterAddItem}
              onChange={onChangeCallback}
              onFocus={onFocusCallback}
              label="Message"
              sx={{
                width: "100%", color: "white",
                input: {
                  color: error ? '#e91e63' : '#1565c0',
                },
                label: {
                  color: error ? '#e91e63' : '#1565c0',
                  "&::focus": {color: '#1565c0'},
                }
              }}
            />
            <Button
              variant="outlined"
              onClick={addMessageCallback}
              value={value}
              sx={{
                minWidth: '40px',
                minHeight: '40px',
                borderRadius: '50%',
                padding: 0,
                margin: 0,
                backgroundColor: 'none',
                color: error ? '#e91e63' : '#1565c0',
                border: 'none',
                '&:hover': {
                  border: "none",
                },
                '&:active': {
                  border: "none",
                },
              }}
            >
              <SendIcon />
            </Button>
          </div>
          <p className={s.errorTelegramEmptyInput}>{error}</p>
        </div>
      </div>
    </ThemeProvider>
  )
}