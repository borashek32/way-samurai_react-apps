import css from "../../../../App.module.css";
import c from '../../Counter.module.css'
import {Button} from "../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../../simpleCounter/SimpleCounter";
import Card from '@mui/material/Card';
import {NavLink} from "react-router-dom";

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

  const counterClassName = c.counter
    + (props.error?.maxStartValues
    || props.error?.maxValue
    || props.error?.startValue
    || props.settings.maxValue === props.value
      ? ' ' + c.disabledCounter : '')
    + ' ' + (typeof props.value === 'number' ? c.counterBold : '')

  const buttonIncClassName = c.button
    + (props.disabled.incButton ? ' ' + c.disabledButton : '')

  const buttonResClassName = c.button
    + (props.disabled.resButton ? ' ' + c.disabledButton : '')

  const buttonSetClassName = c.button + (props.disabled?.setButton ? ' ' + c.disabledButton : '')

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
      <div className={c.counterSubWrapper}>
        <p className={counterClassName}>{props.value as number}</p>
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
          <Button
            name={"timer"}
            class={buttonIncClassName}
            callback={timerCallback}
            value={props.value}
            disabled={props.disabled.timerButton}
          />
          <NavLink
            style={{
              padding: '0.3px 4px 0.3px 4px',
              fontSize: '20px',
              textDecoration: 'none',
              fontWeight: '700'
            }}
            className={buttonSetClassName}
            to="/way-samurai_apps/advanced-counter/settings"
          >
            set
          </NavLink>
        </div>
      </div>
    </Card>
  )
}