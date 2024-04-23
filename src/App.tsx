import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import theme from './styles/theme';
import GlobalStyle from './styles/Global';
import Routes from './routes';

import { Button } from './components/button/Button';

const queryClient = new QueryClient();

function fallbackRender({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: any }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <Button label="Try again" onClick={() => resetErrorBoundary()} />
    </div>
  );
}

const App = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
            <Routes />
          </ErrorBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
