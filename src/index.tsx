import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals, configureStore, register } from 'core';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Card, Content, Title, Grid, Sudoku, NumbersInput, NewGameButton } from 'components';
import { Provider } from 'react-redux';

const {store, persistor} = configureStore()

const App: React.FC = () => {
  return (
    <Content data-dy="content">
      <Sudoku data-cy="sudoku">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <NewGameButton />
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
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </ ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();

register();
