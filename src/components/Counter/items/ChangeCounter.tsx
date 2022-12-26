import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../../../App";
import Card from '@mui/material/Card';

type ChangeCounterType = {
  value?: number | string
  settings: SettingsType
  incCallback: () => void
  resetCallback: () => void
  timerCallback: () => void
  disabled: DisabledType
  error?: ErrorType
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const counterClassName = css.counter
    + (props.error?.maxStartValues
      || props.error?.maxValue
      || props.error?.startValue
        ? ' ' + css.disabledCounter : '')
    + ' ' + (typeof props.value  === 'number' ? css.counterBold : '')

  const buttonIncClassName = css.button
    + (props.disabled.incButton ? ' ' + css.disabledButton : '')

  const buttonResClassName = css.button
    + (props.disabled.resButton ? ' ' + css.disabledButton : '')

  const timerCallback = () => props.timerCallback()

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
              disabled={props.disabled.resButton}
            />
            <Button
              name={"timer"}
              class={buttonIncClassName}
              callback={timerCallback}
              value={props.value}
              disabled={props.disabled.timerButton}
            />
          </div>
        </div>
    </Card>
  )
}