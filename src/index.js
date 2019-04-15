import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './Login'

ReactDOM.render((
    <BrowserRouter>
       <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));
