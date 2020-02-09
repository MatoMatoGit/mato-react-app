import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Sensor } from './pages'

const client = new ApolloClient({
	uri: 'http://127.0.0.1:5000/graphql',
	link: new HttpLink({
		credentials: 'same-origin'
	}),
	cache: new InMemoryCache(),
	dataIdFromObject: (o) => o.id
})

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Switch>
						<Route path="/sensor/:sensorHash">
							<Sensor />
						</Route>

						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	)
}

ReactDOM.render(<Root />, document.querySelector('#root'))
