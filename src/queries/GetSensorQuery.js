import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const GET_SENSOR_QUERY = gql`
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

export class GetSensorQuery extends Query {
	static defaultProps = {
		query: GET_SENSOR_QUERY
	}
}
