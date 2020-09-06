import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemsListContainer from "./container/ItemsListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import CurrentDate from "./components/CurrentDate";
import reducer from "./reducer/reducers";
import Error from "./components/Error";


//store

var store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const App = () => {
  return (
    <div className="container">
      <div id="header">
        <div class="box1">
          <h1> <i class="fas fa-tasks"></i>  ToDo LIST </h1>
        </div>
        <div class="box2">
          <h2><CurrentDate/></h2>
        </div>
      </div>
      
      <Provider store={store}>
      <BrowserRouter>
        <div class="nav">
          <NavLink className="nav1" to="/home" >|| HOME |</NavLink> 
          <NavLink className="nav1" to="/contact">| CONTACT PAGE ||</NavLink>
        </div>
      <Switch>
            <Redirect exact path="/" to="/home" />
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/home">
            <div class="todobox">
              <ItemsListContainer />
            </div>
            </Route>
            <Route component={Error} />
      </Switch>
      </BrowserRouter>
    </Provider>
  </div>
  );
};

export default App;
