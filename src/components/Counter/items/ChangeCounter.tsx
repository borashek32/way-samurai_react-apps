import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../../../App";
import Card from '@mui/material/Card';

type ChangeCounterType = {
  value?: number | string
  settings?: SettingsType
  incCallback: () => void
  resetCallback: () => void
  disabled: DisabledType
  error?: ErrorType
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const counterClassName = css.counter
    + (props.value === props.settings?.maxValue
      || props.error?.maxStartValues
      || props.error?.maxValue
      || props.error?.startValue
        ? ' ' + css.disabledCounter : '')

  const buttonIncClassName = css.button
    + (props.disabled.incButton || props.value === props.settings?.maxValue ? ' ' + css.disabledButton : '')
  const buttonResClassName = css.button
    + (props.disabled.resButton ? ' ' + css.disabledButton : '')

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
        <p className={counterClassName}>{props.value}</p>
      </div>
        <div className={css.counterSubWrapper}>
          <div className={css.buttonsWrapper}>
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
              disabled={props.settings?.startValue === props.value}
            />
          </div>
        </div>
    </Card>
  )
}