import {DisabledType, SettingsType} from "../../components/counters/simpleCounter/SimpleCounter";

export const INC_HANDLER = "INC-HANDLER"
export const RES_HANDLER = "RES-HANDLER"
export const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE"
export const SET_SETTINGS = "SET-SETTINGS"
export const SET_DISABLED = "SET-DISABLED"
export const SET_FINAL_SETTINGS = "SET-FINAL-SETTINGS"
export const SET_MESSAGE = "SET-MESSAGE"

const initialState = {
  value: 0,
  disabled: {incButton: false, resButton: true, setButton: true, timerButton: false},
  settings: {maxValue: 5, startValue: 0},
  counting: false,
  message: "set values and press 'set'"
}
type InitialStateType = typeof initialState

type IncHandlerAT = ReturnType<typeof IncHandlerAC>
type ResHandlerAT = ReturnType<typeof ResHandlerAC>
type ChangeMaxValueAT = ReturnType<typeof ChangeMaxValueAC>
type SetSettingsAT = ReturnType<typeof SetSettingsAC>
type SetDisabledAT = ReturnType<typeof SetDisabledAC>
type SetFinalSettingsAT = ReturnType<typeof SetFinalSettingsAC>
type SetMessageAT = ReturnType<typeof SetMessageAC>

type ActionType = IncHandlerAT
  | ResHandlerAT
  | ChangeMaxValueAT
  | SetSettingsAT
  | SetDisabledAT
  | SetFinalSettingsAT
  | SetMessageAT


export const simpleCounterReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INC_HANDLER:
      console.log("inc from simple counter")
      return {
        ...state,
        value: +state.value + 1
      }
    case RES_HANDLER:
      console.log("res from simple counter")
      return {
        ...state,
        value: state.settings.startValue
      }
    case SET_SETTINGS:
      // console.log("settings")
      return {
        ...state,
        settings: action.payload
      }
    case CHANGE_MAX_VALUE:
      // console.log("max")
      return {
        ...state,
        settings: {maxValue: action.payload, startValue: state.settings.startValue}
      }
    case SET_DISABLED:
      // console.log("disabled")
      return {
        ...state,
        disabled: action.payload
      }
    case SET_FINAL_SETTINGS:
      return {
        ...state,
        settings: {maxValue: action.payload.maxValue, startValue: action.payload.startValue}
      }
    case SET_MESSAGE: {
      // console.log("message", state.message)
        return {
          ...state,
          message: action.payload
        }
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
export const SetDisabledAC = (payload: DisabledType) => {
  return { type: SET_DISABLED, payload } as const
}
export const SetFinalSettingsAC = (payload: SettingsType) => {
  return { type: SET_FINAL_SETTINGS, payload } as const
}
export const SetMessageAC = (payload: string) => {
  return { type: SET_MESSAGE, payload } as const
}