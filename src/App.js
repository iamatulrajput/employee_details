import React from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './Component/Home/Home';
import Create from './Component/Create/Create';
import Update from './Component/Update/Update';
import Employee from './Component/Employee/Employee';
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component ={Home}></Route>
        <Route path="/create"  component ={Create}></Route>
        <Route path="/update/:id"  component ={Update}></Route>
        <Route path="/employee/:id" component={Employee}></Route>
      
      </Switch>
      </BrowserRouter>
      
    </>   
  )
}
