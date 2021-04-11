/* eslint-disable import/named */
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import moment from 'moment-timezone';
import { Routes } from './routes/index';
import { Header } from './components/Header/index';
import 'react-toastify/dist/ReactToastify.css';
import lightTheme from './themes/lightTheme';
import history from './routes/history';
import { AuthProvider } from './context/AuthContext/authContext';
import { ProfileProvider } from './context/ProfileContext/profileContext';
import { RestaurantProvider } from './context/RestaurantContext/restaurantContext';

function App() {
  moment.tz.setDefault('America/Sao_Paulo');
  return (
    <ThemeProvider theme={lightTheme}>
      <Router history={history}>
        <AuthProvider>
          <ProfileProvider>
            <RestaurantProvider>
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
            </RestaurantProvider>
          </ProfileProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
