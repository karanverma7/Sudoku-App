import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals, configureStore } from 'core';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Card, Content, Title, Grid, Sudoku, NumbersInput } from 'components';
import { Provider } from 'react-redux';

const store = configureStore()

const App: React.FC = () => {
  return (
    <Content data-dy="content">
      <Sudoku data-cy="sudoku">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
          <NumbersInput />
        </Card>
      </ Sudoku>
    </Content>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </ ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
