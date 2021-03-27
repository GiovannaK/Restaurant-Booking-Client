import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Header } from './components/Header/index';
import lightTheme from './themes/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
