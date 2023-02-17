import {Input} from "@mui/material";
import * as React from "react";


type InputDefaultType = {
  placeholder: string
}


export const InputDefault: React.FC<InputDefaultType> = ({
                                                           placeholder
                                                         }) => {
  return (
    <Input
      placeholder={placeholder}
      size="small"
      rows="1"
      margin="none"
      sx={{
        width: "100%",
        input: {
          color: "#fff",
          "&::placeholder": {
            color: "#fff"
          }
        }
      }}
    />
  )
}