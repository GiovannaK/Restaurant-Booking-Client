/* eslint-disable import/named */
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { Routes } from './routes/index';
import { Header } from './components/Header/index';
import lightTheme from './themes/lightTheme';
import history from './routes/history';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router history={history}>
        <CssBaseline />
        <Header />
        <Container styles={{ minHeight: '100vh' }}>
          <Routes />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
