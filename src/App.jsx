import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemsListContainer from './components/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import CurrentDate from "./components/CurrentDate";

import reducer from './reducer/reducers';

//store
var store = createStore(reducer);

const App = () => {
  return (
    <div className="container">
      <div id="header">
        <div class="box1">
          <h1> <i class="fas fa-tasks"> ToDo List </i></h1>
        </div>
        <div class="box2">
        <h1><CurrentDate/></h1>
        </div>
      </div>
      <Provider store={store}>
      <BrowserRouter>
        <div class="nav">
          <NavLink to="/">| HOME |</NavLink>
          <NavLink to="/contact">| CONTACT PAGE |</NavLink>
        </div>
      <Switch>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/">
            <div class="todobox">
              <ItemsListContainer />
            </div>
            </Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  </div>
  );
};

export default App;
