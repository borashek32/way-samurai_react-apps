import css from "../Counter.module.css";
import {Button} from "../../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../../../App";

type ChangeCounterType = {
  value?: number | string
  settings?: SettingsType
  incCallback: () => void
  resetCallback: () => void
  disabled: DisabledType
  error?: ErrorType
  disableInc?: boolean
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const counterClassName = css.counter
    + (props.value === props.settings?.maxValue || props.error?.maxStartValues || props.error?.startValue || props.error?.maxValue
      ? ' ' + css.disabledCounter : '')

  const buttonIncClassName = css.button
    + (props.disableInc ? ' ' + css.disabledButton : '')
  const buttonResClassName = css.button
    + (props.disableInc ? '' : ' ' + css.disabledButton)

  return (
    <div className={css.counterWrapper}>
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
    </div>
  )
}