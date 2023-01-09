import React from 'react';
import css from './App.module.css';
import {Route, Routes} from "react-router-dom";
import SimpleCounter from "./components/counters/simpleCounter/SimpleCounter";
import {Telegram} from "./components/telegram/Telegram";
import {Nav} from "./components/Nav";
import {Main} from "./components/blocks/Main";

function App() {
  return (
      <Routes>
        <Route
          path="/way-samurai_react-apps/telegram"
          element={
            <Telegram name={"Telegram"}/>
          }
        />
        <Route
          path="/way-samurai_react-apps/counters"
          element={
            <SimpleCounter name={"Simple counter"}/>
          }
        />
        <Route
          path="/way-samurai_react-apps/"
          element={
            <Main name={"React-developer portfolio"}/>
          }
        />
      </Routes>
  );
}

export default App;
