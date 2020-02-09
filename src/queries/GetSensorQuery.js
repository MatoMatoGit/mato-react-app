import gql from 'graphql-tag'

const GET_SENSOR_QUERY = gql`
	query GetSensor($sensorHash: String!) {
		allSensors(filters: { sensorHash: $sensorHash }) {
			edges {
				node {
					id
					sensorHash
					createdOnModule
					createdOnServer
				}
			}
		}
	}
`

export default GET_SENSOR_QUERY
