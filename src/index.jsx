import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Sensor } from './pages'
import { Helmet } from 'react-helmet'
import { Container } from '@material-ui/core'
import { BrandBar } from './components'

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
			<Helmet>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossorigin="anonymous"
				/>
			</Helmet>

			<BrandBar />

			<Container>
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
			</Container>
		</ApolloProvider>
	)
}

ReactDOM.render(<Root />, document.querySelector('#root'))
