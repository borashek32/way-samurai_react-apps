import css from '../Counter.module.css'
import {SetButton} from "../../utils/SetButton";
import React, {ChangeEvent, useState} from "react";
import {Input} from '../../utils/Input';

type PropsType = {
  maxValue: number
  startValue: number
  setValuesHandler: (newValue: { maxValue: number, startValue: number }) => void
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  erroredStartValueInput?: boolean
  erroredMaxValueInput?: boolean
  disabledButton: boolean
}

export const Settings = (props: PropsType) => {

  const onChangeMaxValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxValueHandler(e)
  const onChangeStartValueCallback = (e: ChangeEvent<HTMLInputElement>) => props.onChangeStartValueHandler(e)

  const buttonClassName = css.button
    + ((props.disabledButton) ? css.disabledButton : '')
  const maxValueInputClassName = css.input
  const startValueInputClassName = css.input

  return (
    <div className={css.counterWrapper}>
      <div className={css.counterSubWrapper}>
        <div className={css.inputWrapper}>
          <label className={css.label}>max value</label>
          <Input
            class={maxValueInputClassName}
            type="number"
            value={props.maxValue}
            onChangeCallback={onChangeMaxValueCallback}
          />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label}>start value</label>
          <Input
            class={startValueInputClassName}
            type="number"
            value={props.startValue}
            onChangeCallback={onChangeStartValueCallback}
          />
        </div>
      </div>
      <div className={css.counterSubWrapper}>
        {props.erroredMaxValueInput && <p>max value should be positive</p>}
        {props.erroredStartValueInput && <p>start value should be positive</p>}
        <button onClick={() => props.setValuesHandler({maxValue: props.maxValue, startValue: props.startValue})} className={buttonClassName}>set</button>
      </div>
    </div>
  )
}