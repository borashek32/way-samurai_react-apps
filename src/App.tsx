import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Telegram} from "./components/telegram/Telegram";
import {Main} from "./components/blocks/Main";
import {Counters} from "./components/counters/Counters";


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
          path="/way-samurai_react-apps/*"
          element={
            <Counters />
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
