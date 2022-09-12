import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// Styles
import './styles/index.css';

// GQL
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// MUI
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

// React-router-DOM
import { BrowserRouter } from 'react-router-dom';

// Apolo client
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHCMS_URI,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </BrowserRouter>
);