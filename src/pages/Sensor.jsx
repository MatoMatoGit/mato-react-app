import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import { ValueChart } from '../components'
import GET_MEASUREMENT_QUERY from '../queries/GetMeasurementQuery'

const Sensor = () => {
	let { sensorHash } = useParams()

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
			<ValueChart formattedData={formattedData} />
		</React.Fragment>
	)
}

export default Sensor
