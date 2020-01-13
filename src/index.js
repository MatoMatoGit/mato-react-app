import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ValueChart from './components/ValueChart';

const client = new ApolloClient({
    uri: 'http://192.168.2.7:5000/graphql',
    link: new HttpLink({
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id
});

const Root = () => {
    return (
        <MuiThemeProvider>
            <ApolloProvider client={client}>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={ValueChart}/>
                    </div>
                </HashRouter>
            </ApolloProvider>
        </MuiThemeProvider>
    );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
