import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home";
import Navbar from "./Components/layout/Navbar";
import View from "./Components/pages/View";
import AddUser from "./Components/users/AddUser";
import {Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import EditUser from "./Components/users/EditUser";
import Users from "./Components/users/Users";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/view" component={View}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={Users}/>
          <Redirect to="/"/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
