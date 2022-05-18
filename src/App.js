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
import TailwindComponents from './components/tailwind-components';
import Users from './components/users';
import Jsontoproduct from './components/Jsontoproduct';
import RemoveSpaces from './components/remove-spaces';
import AddKeyword from './components/AddKeyword'


export default function App() {
  return (

    <Router>
      <Header />
      <Switch>
      <Route path="/addkeyword">
          <AddKeyword />
        </Route>
      <Route path="/removespaces">
          <RemoveSpaces />
        </Route>
      <Route path="/jsontoproduct">
          <Jsontoproduct />
        </Route>
        <Route path="/tailwind-components">
          <TailwindComponents />
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

