import gql from 'graphql-tag'

const GET_SENSOR_QUERY = gql`
	query {
		allSensors {
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
