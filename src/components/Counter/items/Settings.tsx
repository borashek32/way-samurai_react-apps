import css from '../Counter.module.css'
import {Button} from "../../utils/Button";
import React, {ChangeEvent} from "react";
import {Input} from '../../utils/Input';
import {DisabledType, ErrorType} from "../../../App";

type PropsType = {
  maxValue: number
  startValue: number
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
    + (props.disabled?.setButton || props.error?.maxStartValues ? ' ' + css.disabledButton : '')

  const inputMaxClassName = css.input
    + (props.error?.maxValue || props.error?.maxStartValues ? ' ' + css.erroredInput : '')
  const inputStartClassName = css.input
    + (props.error?.startValue || props.error?.maxStartValues ? ' ' + css.erroredInput : '')


  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        <div className={css.inputWrapper}>
          <label className={css.label}>max value</label>
          <Input
            class={inputMaxClassName}
            type="number"
            value={props.maxValue}
            onChangeCallback={onChangeMaxValueCallback}
          />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label}>start value</label>
          <Input
            class={inputStartClassName}
            type="number"
            value={props.startValue}
            onChangeCallback={onChangeStartValueCallback}
          />
        </div>
      </div>
      <div className={css.counterSubWrapper}>
        <Button
          type={"submit"}
          name={'set'}
          class={buttonClassName}
          callback={() => props.setValuesHandler({maxValue: props.maxValue, startValue: props.startValue})}
          disabled={props.disabled}
        />
      </div>
    </div>
  )
}