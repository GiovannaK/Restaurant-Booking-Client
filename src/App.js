/* eslint-disable import/named */
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Routes } from './routes/index';
import { Header } from './components/Header/index';
import 'react-toastify/dist/ReactToastify.css';
import lightTheme from './themes/lightTheme';
import history from './routes/history';
import { AuthProvider } from './context/AuthContext/authContext';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router history={history}>
        <AuthProvider>
          <CssBaseline />
          <Header />
          <Container styles={{ minHeight: '100vh' }}>
            <Routes />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              draggable
              pauseOnHover
            />
          </Container>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
