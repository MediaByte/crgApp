//ReactJS
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Material-UI theme and style components
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

//Routing System
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "./routes/index.jsx";

//State Management
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setCity } from './state/reducers';

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


var hist = createBrowserHistory();

ReactDOM.render(
  	<MuiThemeProvider theme={theme}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route exact path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
        </Router>
  	</MuiThemeProvider>
,
document.getElementById('root'));
registerServiceWorker();


