/* eslint-disable import/named */
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Header } from './components/Header/index';
import { Home } from './pages/Home';
import lightTheme from './themes/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <Container styles={{ minHeight: '100vh' }}>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
