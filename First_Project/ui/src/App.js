import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const user = JSON.parse(localStorage.getItem("profle"));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route
            path="/auth"
            exact
            component={()=>(!user ? <Auth /> : <Redirect to="/posts" />)}
            // component={Auth}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
