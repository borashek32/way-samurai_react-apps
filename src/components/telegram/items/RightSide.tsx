import s from "../Telegram.module.css";
import {MessageType} from "../Telegram";
import {ChangeEvent, FocusEvent} from "react";
import {Avatar, Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteOutlined';
import * as React from "react";
import {green, pink} from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";


export type RightSideType = {
  error: string
  value: string
  messages: MessageType[]
  onChangeHandler: (value: string) => void
  onFocusHandler: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  addMessageHandler: (value: string, userName: string, time: Date) => void
  deleteMessage: (m: MessageType, userName: string) => void
  userName: string
}

export const RightSide: React.FC<RightSideType> = ({
                                                     value,
                                                     error,
                                                     messages,
                                                     onChangeHandler,
                                                     onFocusHandler,
                                                     addMessageHandler,
                                                     deleteMessage,
                                                     userName,
                                                   }) => {


  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e.currentTarget.value)

  const onFocusCallback = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => onFocusHandler(e)

  const deleteMessageCallback = (m: MessageType, userName: string) => deleteMessage(m, userName)

  const addMessageCallback = (value: string, userName: string) => {
    let date = new Date
    addMessageHandler(value, userName, date)
  }

  const onEnterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessageCallback(value, userName)
    }
  }

  const m = messages.map(m => {
    return (
      <div key={m._id}>
        <div className={s.messageWrapper + ' '
          + (m.userName === 'Igor' ? s.messageWrapperEnd : '')}>
          <div className={s.messageUser}>
            {m.userName === 'Igor' ?
              <Avatar
                sx={{bgcolor: green[500]}}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                IZ
              </Avatar> :
              <Avatar
                sx={{bgcolor: pink[500]}}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                NB
              </Avatar>
            }
          </div>
          <div className={s.messageText}>
            {m.text}
            <DeleteRoundedIcon
              sx={{ color: green[700], fontSize: 14, cursor: 'pointer' }}
              onClick={() => deleteMessageCallback(m, userName)}
            />
          </div>
        </div>
        <p className={s.messageTime + ' '
          + (m.userName === 'Igor' ? s.messageTimeEnd : '')}>
          {m.time}
        </p>
      </div>
    )
  })

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
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={s.container}>
        <div className={s.sideContainer}>
          <p className={s.titleRight}>{userName}</p>
          <div className={s.messages}>
            {m}
          </div>
          <div className={s.sendSection}>
            <Avatar
              sx={{bgcolor: green[500]}}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              IZ
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
              onClick={() => addMessageCallback(value, userName)}
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