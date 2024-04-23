import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from './styles/theme';
import GlobalStyle from './styles/Global';
import Routes from './routes';

const queryClient = new QueryClient();

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  </div>
);

export default App;
