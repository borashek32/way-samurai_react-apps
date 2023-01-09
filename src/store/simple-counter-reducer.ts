export const MAX_VALUE_EVENTS = "MAX-VALUES-EVENTS" as const
export const MIN_VALUE_EVENTS = "MIN-VALUES-EVENTS" as const
export const INC_HANDLER = "INC-HANDLER" as const
export const RESET_HANDLER = "RESET-HANDLER" as const

import {ErrorType, SettingsType, DisabledType} from "../components/counters/simpleCounter/SimpleCounter";

type MaxValuesEventsTypeAT = {
  type: typeof MAX_VALUE_EVENTS
  settings: SettingsType
  error: ErrorType
  disabled: DisabledType
}
type MinValuesEventsTypeAT = {
  type: typeof MIN_VALUE_EVENTS
  settings: SettingsType
  error: ErrorType
  disabled: DisabledType
}
type IncHandlerType = {
  type: typeof INC_HANDLER
  value: number
  settings: SettingsType
  disabled: DisabledType
}
type ResetHandlerType = {
  type: typeof RESET_HANDLER
  settings: SettingsType
  disabled: DisabledType
}

type ActionType = MaxValuesEventsTypeAT | MinValuesEventsTypeAT | IncHandlerType | ResetHandlerType

export const SimpleCounterReducer = (value: number | string, action: ActionType) => {
  switch (action.type) {
    case MAX_VALUE_EVENTS:

    case MIN_VALUE_EVENTS:

    case INC_HANDLER:

    case RESET_HANDLER:

    default:
      return;
  }
  return
}