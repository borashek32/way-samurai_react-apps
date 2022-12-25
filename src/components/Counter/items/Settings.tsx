import css from '../Counter.module.css'
import {Button} from "../../utils/Button";
import React, {ChangeEvent} from "react";
import {Input} from '../../utils/Input';
import {DisabledType, ErrorType, SettingsType} from "../../../App";
import Card from "@mui/material/Card";

type PropsType = {
  settings: SettingsType
  setValuesHandler: (newValue: { maxValue: number, startValue: number }) => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  error?: ErrorType
  disabled?: DisabledType
}

export const Settings = (props: PropsType) => {

  const onChangeMaxValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxValueHandler(e)
  const onChangeStartValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeStartValueHandler(e)

  const buttonClassName = css.button
    + (props.error?.startValue
      || props.error?.maxValue
      || props.error?.maxStartValues
      || props.disabled?.setButton
        ? ' ' + css.disabledButton : '')

  const inputMaxClassName = css.input
    + (props.error?.maxStartValues || props.error?.maxValue ? ' ' + css.erroredInput : '')
  const inputStartClassName = css.input
    + (props.error?.startValue || props.error?.maxStartValues ? ' ' + css.erroredInput : '')

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
      height: 200
    }}>
      <div className={css.counterSubWrapper}>
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
        <Button
          name={'set'}
          class={buttonClassName}
          callback={() =>
            props.setValuesHandler({maxValue: props.settings.maxValue, startValue: props.settings.startValue})}
        />
      </div>
    </Card>
  )
}