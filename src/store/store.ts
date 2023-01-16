import {combineReducers, legacy_createStore} from 'redux'
import {telegramReducer} from "./telegram/telegram-reducer";
import {simpleCounterReducer} from "./counters/simple-counter-reducer";


const rootReducer = combineReducers({
  telegram: telegramReducer,
  simpleCounter: simpleCounterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store