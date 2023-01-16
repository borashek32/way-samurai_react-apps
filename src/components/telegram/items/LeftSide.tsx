import s from "../Telegram.module.css";
import {MessageType} from "../Telegram";
import {useState} from "react";
import {Avatar, Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteOutlined';
import * as React from "react";
import {green, pink} from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import {AddMessageAC, DeleteMessageAC} from "../../../store/telegram/messages-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/telegram/store";


export type RightSideType = {
  userName: string
}

export const LeftSide: React.FC<RightSideType> = ({
                                                     userName,
                                                   }) => {

  const messages = useSelector<AppRootStateType, MessageType[]>(state => state.messages)
  const dispatch = useDispatch()

  const addMessage = (value: string, userName: string) => dispatch(AddMessageAC(value, userName))
  const deleteMessage = (message: MessageType, userName: string) => dispatch(DeleteMessageAC(message, userName))

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const onChangeHandler = (value: string) => {
    setValue(value)
    setError('')
  }
  const onFocusHandler = () => setError('')
  const addMessageHandler = (value: string, userName: string) => {
    if (value.trim() === '') {
      setError("Text field is empty")
    } else {
      addMessage(value.trim(), userName)
    }
    setValue("")
  }

  const addMessageCallback = (value: string, userName: string) => {
    addMessageHandler(value, userName)
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
            {
              m.userName === "Nataly"
                ? <DeleteRoundedIcon
                  sx={{color: green[700], fontSize: 14, cursor: 'pointer'}}
                  onClick={() => deleteMessage(m, userName)}
                />
                : ""
            }
          </div>
        </div>
        <p className={s.messageTime + ' '
          + (m.userName === 'Nataly' ? s.messageTimeEnd : '')}>
          10:30
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
              onChange={(e) => onChangeHandler(e.currentTarget.value)}
              onFocus={onFocusHandler}
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