import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_MEASUREMENT_QUERY from '../queries/GetMeasurementQuery'
import { LineChartMinMax } from '../components'
import { CircularProgress } from '@material-ui/core'

const Moisture = ({ sensorHash, SensorConfig }) => {
	const lowValRaw = 0

	const highValRaw = 2100
	const { loading, data, error } = useQuery(GET_MEASUREMENT_QUERY, {
		variables: {
			sensorHash: sensorHash,
			sensorType: SensorConfig.type,
			last: SensorConfig.last
		},
		pollInterval: SensorConfig.pollInterval
	})

	if (error) return `Error! ${error.message}`

	return (
		<React.Fragment>
			<h5>Soil moisture</h5>

			{loading ? (
				<CircularProgress />
			) : (
				<LineChartMinMax
					formattedData={data.allMeasurements.edges.map(({ node }) => node)}
					showDot={SensorConfig.showDot}
				/>
			)}
		</React.Fragment>
	)
}

export default Moisture
