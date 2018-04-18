import React from 'react';
import ReactDOM from 'react-dom';
import RentalApp from './App';
import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <RentalApp />
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
