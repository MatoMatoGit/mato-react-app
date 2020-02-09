import gql from 'graphql-tag'

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

export default GET_MEASUREMENT_QUERY
