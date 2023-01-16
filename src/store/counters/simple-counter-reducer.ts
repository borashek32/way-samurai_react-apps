import {DisabledType, SettingsType} from "../../components/counters/simpleCounter/SimpleCounter";

export const INC_HANDLER = "INC-HANDLER"
export const RES_HANDLER = "RES-HANDLER"
export const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE"
export const SET_SETTINGS = "SET-SETTINGS"
export const SET_ERROR = "SET-ERROR"
export const SET_DISABLED = "SET-DISABLED"

const initialState = {
  value: 0,
  error: "",
  disabled: {incButton: false, resButton: true, setButton: true, timerButton: false},
  settings: {maxValue: 5, startValue: 0}
}
type InitialStateType = typeof initialState

type IncHandlerAT = ReturnType<typeof IncHandlerAC>
type ResHandlerAT = ReturnType<typeof ResHandlerAC>
type ChangeMaxValueAT = ReturnType<typeof ChangeMaxValueAC>
type SetSettingsAT = ReturnType<typeof SetSettingsAC>
type SetErrorAT = ReturnType<typeof SetErrorAC>
type SetDisabledAT = ReturnType<typeof SetDisabledAC>

type ActionType = IncHandlerAT | ResHandlerAT | ChangeMaxValueAT | SetSettingsAT | SetErrorAT | SetDisabledAT


export const simpleCounterReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INC_HANDLER:
      console.log("inc")
      return {
        ...state,
        value: +state.value + 1,
        disabled: {incButton: false, resButton: false, setButton: true, timerButton: false}
      }
    case RES_HANDLER:
      console.log("res")
      return {
        ...state,
        value: state.settings.startValue,
        disabled: {resButton: true, incButton: false, setButton: true, timerButton: false}
      }
    case SET_SETTINGS:
      console.log("settings")
      return {
        ...state,
        settings: action.payload
      }
    case CHANGE_MAX_VALUE:
      console.log("max")
      return {
        ...state,
        settings: {maxValue: action.payload, startValue: state.settings.startValue}
      }
    case SET_ERROR:
      console.log("error")
      return {
        ...state,
        error: action.payload
      }
    case SET_DISABLED:
      console.log("disabled")
      return {
        ...state,
        disabled: action.payload
      }
    default:
      return state;
  }
}

export const IncHandlerAC = () => {
  return { type: INC_HANDLER } as const
}
export const ResHandlerAC = () => {
  return { type: RES_HANDLER } as const
}
export const ChangeMaxValueAC = (payload: number) => {
  return { type: CHANGE_MAX_VALUE, payload } as const
}
export const SetSettingsAC = (payload: SettingsType) => {
  return { type: SET_SETTINGS, payload } as const
}
export const SetErrorAC = (payload: string) => {
  return { type: SET_ERROR, payload } as const
}
export const SetDisabledAC = (payload: DisabledType) => {
  return { type: SET_DISABLED, payload } as const
}