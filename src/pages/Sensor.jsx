import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useParams } from 'react-router-dom'

// import GET_MEASUREMENT_QUERY from '../queries/GetMeasurementQuery'

const GET_MEASUREMENT_QUERY = gql`
	query GetMeasurement($sensorHash: String!) {
		allMeasurements(filters: { sensorHash: $sensorHash }) {
			edges {
				node {
					id
					sensorHash
					sensorType
					data
					createdOnModule
					createdOnServer
				}
			}
		}
	}
`

const Sensor = () => {
	let { sensorHash } = useParams()

	console.log(sensorHash)

	// debugger

	const { loading, error, data } = useQuery(GET_MEASUREMENT_QUERY, {
		variables: { sensorHash },
		skip: !sensorHash,
		pollInterval: 10000
	})

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	const formattedData = data.allMeasurements.edges.map(({ node }) => node)

	return (
		<React.Fragment>
			<h1>BIEM</h1>
			{console.log(formattedData)}
		</React.Fragment>
	)
}

export default Sensor
