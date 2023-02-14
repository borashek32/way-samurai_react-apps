import c from "../../Counter.module.css";
import {Button} from "../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../SimpleCounter";
import Card from '@mui/material/Card';

type ChangeCounterType = {
  value?: number
  // error?: string
  message?: string
  settings: SettingsType
  disabled: DisabledType
  incCallback: () => void
  resetCallback: () => void
  // timerCallback: () => void
}

export const ChangeCounter = (props: ChangeCounterType) => {
  console.log(props.message)
  const counterClassName = c.counter
    + ' ' + (props.message === "set values and press 'set'" ? c.counterSetMessage : '')
    + ' ' + (props.value || props.value === 0 ? c.disabledCounter : '')
    + ' ' + (props.message ? c.disabledCounterRed : '')
    + ' ' + (props.value === props.settings.maxValue ? c.disabledCounterRed : '')

  const buttonIncClassName = c.button
    + (props.disabled.incButton ? ' ' + c.disabledButton : '')

  const buttonResClassName = c.button
    + (props.disabled.resButton ? ' ' + c.disabledButton : '')

  // const timerCallback = () => props.timerCallback()

  return (
    <Card sx={{
      backgroundColor: '#0A1929',
      border: '2px solid #61dafb',
      padding: 0.5,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 0.1,
      width: 300,
      height: 220
    }}>
      <div className={c.counterSubWrapper}>
        <p className={counterClassName}>
          {
            props.message ? props.message : props.value
          }
        </p>
      </div>
        <div className={c.counterSubWrapper}>
          <div className={c.buttonsWrapper}>
            <Button
              name={"inc"}
              class={buttonIncClassName}
              callback={props.incCallback}
              value={props.value}
              disabled={props.disabled.incButton}
            />
            <Button
              name={"res"}
              class={buttonResClassName}
              callback={props.resetCallback}
              value={props.value}
              disabled={props.disabled.resButton}
            />
            {/*<Button*/}
            {/*  name={"timer"}*/}
            {/*  class={buttonIncClassName}*/}
            {/*  callback={timerCallback}*/}
            {/*  value={props.value}*/}
            {/*  disabled={props.disabled.timerButton}*/}
            {/*/>*/}
          </div>
        </div>
    </Card>
  )
}