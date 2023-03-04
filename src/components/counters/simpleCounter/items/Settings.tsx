import c from "../../Counter.module.sass";
import {Button} from "../utils/Button";
import React, {ChangeEvent} from "react";
import {Input} from '../utils/Input';
import {DisabledType, SettingsType} from "../SimpleCounter";
import Card from "@mui/material/Card";

type PropsType = {
  // message?: string
  error?: string
  disabled?: DisabledType
  settings: SettingsType
  setValuesHandler: (newValue: { maxValue: number, startValue: number }) => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings = (props: PropsType) => {

  console.log("settings simple counter")

  const onChangeMaxValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxValueHandler(e)
  const onChangeStartValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeStartValueHandler(e)

  const buttonClassName = c.button + ' ' +  (props.disabled?.setButton ? c.disabledButton : '')
  const inputClassName = c.input + ' ' + (props.error ? c.erroredInput : '')
    // + ' ' + (props.message ? c.counterSetValues : '')

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
        <div className={c.inputWrapper}>
          <label className={c.label}>max value</label>
          <Input
            class={inputClassName}
            type="number"
            value={props.settings?.maxValue}
            onChangeCallback={onChangeMaxValueCallback}
            step={1}
          />
        </div>
        <div className={c.inputWrapper}>
          <label className={c.label}>start value</label>
          <Input
            class={inputClassName}
            type="number"
            value={props.settings?.startValue}
            onChangeCallback={onChangeStartValueCallback}
            step={1}
          />
        </div>
      </div>
      <div className={c.counterSubWrapper}>
        <Button
          disabled={props.disabled?.setButton}
          name={'set'}
          class={buttonClassName}
          callback={() =>
            props.setValuesHandler({maxValue: props.settings.maxValue, startValue: props.settings.startValue})}
        />
      </div>
    </Card>
  )
}