import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental-project">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Global styles={GlobalStyles} />
          <App />{' '}
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
