import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/Global';
import Routes from './routes';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
