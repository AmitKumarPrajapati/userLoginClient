import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import {StyledTable} from './styles'
import { Dashboard } from './componets/Dashboard';

const client = new ApolloClient({
    uri: "http://localhost:8002/"
});



const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2 style={{marginLeft: '37%'}}>Welcome to notes section</h2>
            <Dashboard />
        </div>
    </ApolloProvider>
);

export default App;