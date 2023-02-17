import {pink} from "@mui/material/colors";
import Button from "@mui/material/Button";
import React from "react";


type ButtonDefaultType = {
  name: string
  type: "button" | "submit" | "reset" | undefined
}

export const ButtonDefault = (props: ButtonDefaultType) => {

  return (
    <Button
      type={props.type}
      sx={{
        color: "#76ecfa",
        border: "1px solid #76ecfa",
        "&:hover": {color: pink[500], borderColor: pink[500]},
        marginTop: ((props.type) === "submit" || props.name === "Hire Me" ? '' : '20%'),
        marginLeft: ((props.type) === "submit" || props.name === "Hire Me" ? '' : '30%')
      }}
      variant="outlined"
    >
      {props.name}
    </Button>
  )
}