import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

// 2
// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'TRACK-ADDED':
//       return {
//         ...state,
//         [action.trackId]: {
//           id: action.trackId, likesCount: 0
//         }
//       }
//     default:
//       return state
//   }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
// const state = {
//   12: {id: 12, likesCount: 10},
//   14: {id: 14, likesCount: 2},
//   100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, {type: 'TRACK-ADDED', trackId: 300}) // xxx
// console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?

// 3
// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'TRACK-ADDED':
//       return {
//         ...state,
//         [action.trackId]: {
//           id: action.trackId, likesCount: 0
//         }
//       }
//     default:
//       return state
//   }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId}) // (xxx)
//
// const state = {
//   12: {id: 12, likesCount: 10},
//   14: {id: 14, likesCount: 2},
//   100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, addTrackAC(300))
// console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?



// 4
// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'USER-NAME-UPDATED':
//       return {...state, user: {...state.user, name: action.name}} // xxx
//
//     default:
//       return state
//   }
// }
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
// const state = {
//   count: 10,
//   user: {
//     name: 'Dimych',
//     age: 18,
//     isMarried: true,
//     status: "offline"
//   },
//   books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?
