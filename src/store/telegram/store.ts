import {combineReducers, legacy_createStore} from 'redux'
import {messagesReducer} from "./messages-reducer";

const rootReducer = combineReducers({
  messages: messagesReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
