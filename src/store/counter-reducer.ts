export const MAX_VALUE_EVENTS = "MAX-VALUES-EVENTS" as const
export const MIN_VALUE_EVENTS = "MIN-VALUES-EVENTS" as const

import {ErrorType, SettingsType, DisabledType} from "../components/counters/simpleCounter/SimpleCounter";

type MaxValuesEventsTypeAT = {
  type: typeof MAX_VALUE_EVENTS
  maxValue: number
}
type MinValuesEventsTypeAT = {
  type: typeof MIN_VALUE_EVENTS
  minValue: number
}

type ActionType = MaxValuesEventsTypeAT | MinValuesEventsTypeAT

export const CounterReducer = (value: number | string, action: ActionType) => {
  switch (action.type) {
    case "MAX-VALUES-EVENTS":

  }
  return
}