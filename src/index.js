// Require essential modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import User from './components/user_component';

// Require material-ui raisedbutton for "Submit" button
import {RaisedButton} from 'material-ui';


const App = () => (
  <MuiThemeProvider>
    <User />
  </MuiThemeProvider>
);

// Console.log to check if React is rendering correctly
ReactDOM.render(<App />,document.getElementById('app'),() => {
	console.log('React is rendering successfully!');
});

