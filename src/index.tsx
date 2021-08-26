import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Content } from './components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content >
      <div>Hello world!</div>
    </ Content>
  </ ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
