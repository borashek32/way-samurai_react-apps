import s from './../Main.module.css'
import {createTheme, Input, TextField, ThemeProvider} from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";

type ContactType = {
  name: string
}

export const Contact: React.FC<ContactType> = ({
                                                 name
                                               }) => {

  return (
      <div className={s.block}>
        <h1 className={s.blockTitle}>{name}</h1>
        <form action="#" className={s.blockWrapperContact}>
          <div className={s.formSize}>
            <Input
              placeholder={"Enter Your Name"}
              size="small"
              rows="1"
              margin="none"
              sx={{
                width: "100%",
                // input: {
                //   color: error ? '#e91e63' : '#1565c0',
                // },
                // label: {
                //   color: error ? '#e91e63' : '#1565c0',
                //   "&::focus": {color: '#76ecfa'},
                // }
              }}
            />
            <Input
              placeholder={"Enter Your Email"}
              size="small"
              rows="1"
              margin="none"
              sx={{
                width: "100%",
                // input: {
                //   color: error ? '#e91e63' : '#1565c0',
                // },
                // label: {
                //   color: error ? '#e91e63' : '#1565c0',
                //   "&::focus": {color: '#76ecfa'},
                // }
              }}
            />
            <TextField
              variant={"standard"}
              placeholder={"Enter Your Message"}
              size="small"
              rows="3"
              margin="none"
              sx={{
                width: "100%",
                // input: {
                //   color: error ? '#e91e63' : '#1565c0',
                // },
                // label: {
                //   color: error ? '#e91e63' : '#1565c0',
                //   "&::focus": {color: '#76ecfa'},
                // }
              }}
            />
            <Button
              sx={{
                color: "#0A1929FF",
                border: "1px solid #0A1929FF",
                "&:hover": {color: "#1769aa", border: "1px solid #1769aa"}
              }}
              variant="outlined"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
  )
}