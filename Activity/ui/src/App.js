
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
