/** @format */

import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Women from "./components/women";
import Men from "./components/men";
import kids from "./components/kids";
import NoFound from "./components/NoFound";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar paths={["/", "women", "men", "kids"]} />
      <br />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/women' component={Women} />
        <Route path='/men' component={Men} />
        <Route path='/kids' component={kids} />
        <Route path='*' component={NoFound} />
      </Switch>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
