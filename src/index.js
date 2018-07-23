//ReactJS
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//State Management
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { isUserAuthorized, requestListings, userSettings } from './state/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Material-UI theme and style components
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

//Routing System
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { Router } from 'react-router'
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";

import RentalApp from "./views/App";

import "./assets/scss/material-kit-react.css?v=1.1.0";

//Initialize theme colors 
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: '#FFFFFF',
      dark: grey[900],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[800],
    },
  },
});

//Reducers
const rootReducers = combineReducers({ isUserAuthorized, requestListings, userSettings })
//Redux Middleware
const logger = createLogger();
//Initialize Redux Store
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));
//React Router history
const hist = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
  	<MuiThemeProvider theme={theme}>
      <CssBaseline/>
        <Router history={hist}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/rentals' component={RentalApp}/>
            <Route path='/login' component={LoginPage}/>
          </Switch>
        </Router>
  	</MuiThemeProvider>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();


