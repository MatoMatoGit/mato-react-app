import React from 'react'
import { useParams } from 'react-router-dom'
import { Moisture, Temperature, Light } from '../components'
import SensorConfig from '../config/SensorConfig'
import { useHistory } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'

const Sensor = () => {
	let { sensorHash } = useParams()
	const history = useHistory()

	return (
		<React.Fragment>
			<Grid item container xs={12} style={{ marginBottom: '1rem' }}>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					style={{ width: '100%' }}
					onClick={() => history.push('/')}
				>
					BACK
				</Button>
			</Grid>

			<Grid item container xs={12}>
				<h2 style={{ marginBottom: '1rem' }}>Sensor overzicht</h2>
			</Grid>

			<Grid item container xs={12}>
				<Moisture sensorHash={sensorHash} SensorConfig={SensorConfig.MOIST} />
				<Temperature sensorHash={sensorHash} SensorConfig={SensorConfig.TEMP} />
				<Light sensorHash={sensorHash} SensorConfig={SensorConfig.LIGHT} />
			</Grid>
		</React.Fragment>
	)
}

export default Sensor
