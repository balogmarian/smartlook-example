import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Global from './styles';
import Pages from './pages';
import { Header, Footer } from './components';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Global />
    <ApolloProvider client={client}>
      <Header />
      <Pages />
      <Footer />
    </ApolloProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
