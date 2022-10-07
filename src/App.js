import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Route from './components/route';


const theme = createMuiTheme({
  typography: {
    fontFamily:'Roboto',
  },
});


export default class extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          <Route/>
        </ThemeProvider>
      </div>
    );

  }
}


