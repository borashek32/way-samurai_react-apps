import c from '../../Counter.module.css'
import {Button} from "../utils/Button";
import React, {ChangeEvent} from "react";
import {Input} from '../utils/Input';
import {DisabledType, ErrorType, SettingsType} from "../../simpleCounter/SimpleCounter";
import Card from "@mui/material/Card";
import {NavLink} from "react-router-dom";

type PropsType = {
  settings: SettingsType
  setValuesHandler: (newValue: { maxValue: number, startValue: number }) => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  error: ErrorType
  disabled?: DisabledType
  message: string
  value?: number
}

export const Settings = (props: PropsType) => {

  const onChangeMaxValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxValueHandler(e)
  const onChangeStartValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeStartValueHandler(e)
  const setValueCallback = () => props.setValuesHandler({
      maxValue: props.settings.maxValue,
      startValue: props.settings.startValue
    })

  const buttonClassName = c.button + (props.disabled?.setButton ? ' ' + c.disabledButton : '')

  const inputMaxClassName = c.input
    + (props.error?.maxStartValues || props.error?.maxValue ? ' ' + c.erroredInput : '')
  const inputStartClassName = c.input
    + (props.error?.startValue || props.error?.maxStartValues ? ' ' + c.erroredInput : '')

  const message = ((props.error.startValue || props.error.startValue || props.error.maxStartValues) ? c.error : c.message)

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
        <p className={message}>
          {props.message}
        </p>
        <div className={c.inputWrapper}>
          <label className={c.label}>max value</label>
          <Input
            class={inputMaxClassName}
            type="number"
            value={props.settings?.maxValue}
            onChangeCallback={onChangeMaxValueCallback}
          />
        </div>
        <div className={c.inputWrapper}>
          <label className={c.label}>start value</label>
          <Input
            class={inputStartClassName}
            type="number"
            value={props.settings?.startValue}
            onChangeCallback={onChangeStartValueCallback}
          />
        </div>
      </div>
      <div className={c.counterSubWrapper}>
        <NavLink to="/way-samurai_react-apps/counters">
          <Button
            disabled={props.disabled?.setButton}
            name={'set'}
            class={buttonClassName}
            callback={setValueCallback}
          />
        </NavLink>
      </div>
    </Card>
  )
}