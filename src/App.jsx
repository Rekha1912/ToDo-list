import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemsListContainer from './components/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reducer from './reducer/reducers';

//store
var store = createStore(reducer);

const App = () => {
  return (
    <div>
      <div className="container" id="header">
        <div class="box1">
          <h1> <i class="fas fa-tasks"> ToDos </i></h1>
        </div>
        <div class="box2">
        <h2>Date</h2>
        </div>
      </div>
      <Provider store={store}>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Switch>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/">
            <div>
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
