//ReactJS framework
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Theme and Styling
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

//Project Components
import RentalApp from './App';

//Initialize theme colors 
//and pushes it down the component tree
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[800],
      dark: grey[900],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[800],
    },
  },
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	<CssBaseline />
		<RentalApp />
	</MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
