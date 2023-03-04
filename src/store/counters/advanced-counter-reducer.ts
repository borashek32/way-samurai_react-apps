import {DisabledType, SettingsType} from "../../components/counters/advancedCounter/AdvancedCounter";
import {ErrorType} from "../../components/counters/advancedCounter/AdvancedCounter";

export const ADV_INC_HANDLER = "Advanced/INC-HANDLER"
export const ADV_RES_HANDLER = "Advanced/RES-HANDLER"
export const ADV_CHANGE_MAX_VALUE = "Advanced/CHANGE-MAX-VALUE"
export const ADV_SET_SETTINGS = "Advanced/SET-SETTINGS"
export const ADV_SET_DISABLED = "Advanced/SET-DISABLED"
export const ADV_SET_MESSAGE = "Advanced/ADV-SET-MESSAGE"
export const ADV_SET_ERROR = "Advanced/SET-ERROR"
export const ADV_SET_COUNTING = "Advanced/SET-COUNTING"

const initialState = {
  valueAdv: 0,
  disabled: {incButton: false, resButton: true, setButton: false, timerButton: false},
  settings: {maxValue: 5, startValue: 0},
  message: "press 'inc' or 'timer' to increment the value",
  error: {startValue: false, maxStartValues: false, maxValue: false, message: true},
  counting: false
}
type InitialStateType = typeof initialState

type AdvIncHandlerAT = ReturnType<typeof AdvIncHandlerAC>
type AdvResHandlerAT = ReturnType<typeof AdvResHandlerAC>
type AdvChangeMaxValueAT = ReturnType<typeof AdvChangeMaxValueAC>
type AdvSetSettingsAT = ReturnType<typeof AdvSetSettingsAC>
type AdvSetDisabledAT = ReturnType<typeof AdvSetDisabledAC>
type AdvSetMessageAT = ReturnType<typeof AdvSetMessageAC>
type AdvSetErrorAT = ReturnType<typeof AdvSetErrorAC>
type AdvSetCountingAT = ReturnType<typeof AdvSetCountingAC>

type ActionType = AdvIncHandlerAT
  | AdvResHandlerAT
  | AdvChangeMaxValueAT
  | AdvSetSettingsAT
  | AdvSetDisabledAT
  | AdvSetMessageAT
  | AdvSetErrorAT
  | AdvSetCountingAT


export const advancedCounterReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ADV_INC_HANDLER:
      // console.log("inc from adv counter")
      return {
        ...state,
        valueAdv: +state.valueAdv + 1
      }
    case ADV_RES_HANDLER:
      // console.log("res from simple counter")
      return {
        ...state,
        valueAdv: state.settings.startValue
      }
    case ADV_SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case ADV_SET_SETTINGS:
      // console.log("settings")
      return {
        ...state,
        settings: action.payload
      }
    case ADV_CHANGE_MAX_VALUE:
      // console.log("max")
      return {
        ...state,
        settings: {maxValue: action.payload, startValue: state.settings.startValue}
      }
    case ADV_SET_DISABLED:
      // console.log("disabled")
      return {
        ...state,
        disabled: action.payload
      }
    case ADV_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ADV_SET_COUNTING:
      return {
        ...state,
        counting: action.payload
      }
    default:
      return state;
  }
}

export const AdvIncHandlerAC = () => {
  return { type: ADV_INC_HANDLER } as const
}
export const AdvResHandlerAC = () => {
  return { type: ADV_RES_HANDLER } as const
}
export const AdvChangeMaxValueAC = (payload: number) => {
  return { type: ADV_CHANGE_MAX_VALUE, payload } as const
}
export const AdvSetSettingsAC = (payload: SettingsType) => {
  return { type: ADV_SET_SETTINGS, payload } as const
}
export const AdvSetDisabledAC = (payload: DisabledType) => {
  return { type: ADV_SET_DISABLED, payload } as const
}
export const AdvSetMessageAC = (payload: string) => {
  return { type: ADV_SET_MESSAGE, payload } as const
}
export const AdvSetErrorAC = (payload: ErrorType) => {
  return { type: ADV_SET_ERROR, payload } as const
}
export const AdvSetCountingAC = (payload: boolean) => {
  return { type: ADV_SET_COUNTING, payload} as const
}