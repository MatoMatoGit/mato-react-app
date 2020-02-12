import gql from 'graphql-tag'

const GET_MEASUREMENT_QUERY = gql`
	query GetMeasurement($sensorHash: String!, $sensorType: String!, $last: Int!) {
		allMeasurements(
			last: $last
			filters: { sensorHash: $sensorHash, sensorType: $sensorType }
		) {
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

export default GET_MEASUREMENT_QUERY
