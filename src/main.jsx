import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import '../src/index.css';
import CombinedContextProvider from './providers/CombinedContextProvider.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CombinedContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CombinedContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
