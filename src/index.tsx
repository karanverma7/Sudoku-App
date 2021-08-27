import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from 'core';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Card, Content, Title, Grid } from 'components';

const App: React.FC = () => {
  return (
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card"><Grid /></Card>
    </ Content>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
