import gql from 'graphql-tag'

export const GET_MEASUREMENT_QUERY = gql`
	query GetMeasurement($sensorHash: String!) {
		allMeasurements {
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
