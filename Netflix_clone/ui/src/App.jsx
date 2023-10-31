import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Loginn";
import Signup from "./pages/Signupp";
import Netflix from "./pages/Netflix";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
        <Route exact path="/" Component={Netflix} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
