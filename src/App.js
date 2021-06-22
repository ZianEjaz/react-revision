import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// components
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import Jsontoproduct from './components/Jsontoproduct';
import RemoveSpaces from './components/remove-spaces';


export default function App() {
  return (

    <Router>
      <Header />
      <Switch>
      <Route path="/removespaces">
          <RemoveSpaces />
        </Route>
      <Route path="/jsontoproduct">
          <Jsontoproduct />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

