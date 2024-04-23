import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import theme from './styles/theme';
import GlobalStyle from './styles/Global';
import Routes from './routes';

import ErrorMessage from './components/layout/ErrorMessage';

const queryClient = new QueryClient();

function fallbackRender({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: any }) {
  return <ErrorMessage message={error.message} resetErrorBoundary={resetErrorBoundary} />;
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
