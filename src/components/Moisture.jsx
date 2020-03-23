import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_MEASUREMENT_QUERY from '../queries/GetMeasurementQuery'
import { LineChartMinMax } from '../components'
import { CircularProgress } from '@material-ui/core'

const Moisture = ({ sensorHash, SensorConfig }) => {
	const lowValRaw = useQuery(GET_MEASUREMENT_QUERY, {
		variables: {
			sensorHash: sensorHash,
			sensorType: 'MOIST_CAL_LOW',
			last: 1
		},
		pollInterval: SensorConfig.pollInterval
	})

	const highValRaw = useQuery(GET_MEASUREMENT_QUERY, {
		variables: {
			sensorHash: sensorHash,
			sensorType: 'MOIST_CAL_HIGH',
			last: 1
		},
		pollInterval: SensorConfig.pollInterval
	})

	const { loading, data, error } = useQuery(GET_MEASUREMENT_QUERY, {
		variables: {
			sensorHash: sensorHash,
			sensorType: SensorConfig.type,
			last: SensorConfig.last
		},
		pollInterval: SensorConfig.pollInterval
	})

	if (error) return `Error! ${error.message}`
	if (lowValRaw.error) return `Error! ${lowValRaw.error.message}`
	if (highValRaw.error) return `Error! ${highValRaw.error.message}`

	return (
		<React.Fragment>
			<h5>Bodem vochtigheid</h5>

			{loading || lowValRaw.loading || highValRaw.loading ? (
				<CircularProgress />
			) : (
				<LineChartMinMax
					formattedData={data.allMeasurements.edges.map(({ node }) => node)}
					lowVal={lowValRaw.data.allMeasurements.edges.map(({ node }) => node)[0].data}
					highVal={highValRaw.data.allMeasurements.edges.map(({ node }) => node)[0].data}
					showDot={SensorConfig.showDot}
				/>
			)}
		</React.Fragment>
	)
}

export default Moisture
