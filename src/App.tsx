import React from 'react';
import css from './App.module.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import SimpleCounter from "./components/counters/simpleCounter/SimpleCounter";
import AdvancedCounter from "./components/counters/advancedCounter/AdvancedCounter";
import {Telegram} from "./components/telegram/Telegram";
import {Nav} from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className={css.container}>
        <Nav />
        <Routes>
          <Route
            path="/way-samurai_apps/telegram"
            element={
              <Telegram name={"Telegram"}/>
            }
          />
          <Route
            path="/way-samurai_apps/simple-counter"
            element={
              <SimpleCounter name={"Simple counter"}/>
            }
          />
          <Route
            path="/way-samurai_apps/advanced-counter/*"
            element={
              <AdvancedCounter name={"Advanced counter"}/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
