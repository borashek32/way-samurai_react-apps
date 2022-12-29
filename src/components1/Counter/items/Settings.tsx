import css from '../Counter1.module.css'
import {Button} from "../../utils/Button";
import React, {ChangeEvent} from "react";
import {Input} from '../../utils/Input';
import {DisabledType, ErrorType, SettingsType} from "../../../App";
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

  const buttonClassName = css.button + (props.disabled?.setButton ? ' ' + css.disabledButton : '')

  const inputMaxClassName = css.input
    + (props.error?.maxStartValues || props.error?.maxValue ? ' ' + css.erroredInput : '')
  const inputStartClassName = css.input
    + (props.error?.startValue || props.error?.maxStartValues ? ' ' + css.erroredInput : '')

  const message = props.message

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
      <div className={css.counterSubWrapper}>
        <p className={css.displayError + ' '
          + (props.message === "enter values and press 'set'" ? css.message : '')}>
          {message}
        </p>
        <div className={css.inputWrapper}>
          <label className={css.label}>max value</label>
          <Input
            class={inputMaxClassName}
            type="number"
            value={props.settings?.maxValue}
            onChangeCallback={onChangeMaxValueCallback}
          />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label}>start value</label>
          <Input
            class={inputStartClassName}
            type="number"
            value={props.settings?.startValue}
            onChangeCallback={onChangeStartValueCallback}
          />
        </div>
      </div>
      <div className={css.counterSubWrapper}>
        <NavLink to="/way-samurai_advanced-counter/">
          <Button
            disabled={props.disabled?.setButton}
            name={'set'}
            class={buttonClassName}
            callback={() =>
              props.setValuesHandler({maxValue: props.settings.maxValue, startValue: props.settings.startValue})}
          />
        </NavLink>
      </div>
    </Card>
  )
}