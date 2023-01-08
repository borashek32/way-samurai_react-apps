import React from 'react';
import css from './App.module.css';
import {Route, Routes} from "react-router-dom";
import SimpleCounter from "./components/counters/simpleCounter/SimpleCounter";
import {Telegram} from "./components/telegram/Telegram";
import {Nav} from "./components/Nav";
import {Main} from "./components/blocks/Main";

function App() {
  return (
    <div className={css.container}>
      <Nav/>
      <Routes>
        <Route
          path="/telegram"
          element={
            <Telegram name={"Telegram"}/>
          }
        />
        <Route
          path="/counters"
          element={
            <SimpleCounter name={"Simple counter"}/>
          }
        />
        <Route
          path="/"
          element={
            <Main name={"React-developer portfolio"}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
