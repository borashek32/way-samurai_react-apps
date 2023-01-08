import s from "../Main.module.css";
import Button from '@mui/material/Button';
import * as React from "react";

type HireMeType = {
  name: string
}

export const HireMe: React.FC<HireMeType> = ({
                                              name
                                            }) => {
  return (
    <div className={s.blockBorder}>
      <h1 className={s.blockTitle}>{name}</h1>
      <div className={s.blockHireMe}>
        <Button
          sx={{
            color: "#76ecfa",
            border: "1px solid #76ecfa",
            "&:hover": {color: "#1769aa", border: "1px solid #1769aa"}
          }}
          variant="outlined"
        >
          Hire Me
        </Button>
      </div>
    </div>
  )
}