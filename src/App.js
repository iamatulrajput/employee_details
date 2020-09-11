import React from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './Component/Home/Home';
import Create from './Component/Create/Create';
import Delete from './Component/Delete/Delete';
import Update from './Component/Delete/Delete';
import Employee from './Component/Employee/Employee';
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component ={Home}></Route>
        <Route path="/create"  component ={Create}></Route>
        <Route path="/update"  component ={Update}></Route>
        <Route path ="/delete" component={Delete}></Route>
        <Route path="/employee" component={Employee}></Route>
      
      </Switch>
      </BrowserRouter>
      
    </>   
  )
}
