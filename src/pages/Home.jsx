import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { FormControl, Button, NativeSelect, FormHelperText, Grid } from '@material-ui/core'
import GET_SENSOR_QUERY from '../queries/GetSensorQuery'
import { useQuery } from '@apollo/react-hooks'

const Home = () => {
	const history = useHistory()

	const formik = useFormik({
		initialValues: {
			username: ''
		},
		onSubmit: (values) => {
			history.push('/sensor/' + values.username)
		}
	})

	const { loading, data, error } = useQuery(GET_SENSOR_QUERY, {
		pollInterval: 1000
	})

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	const allSensors = data.allSensors.edges.map(({ node }) => node)

	return (
		<>
			<h2 style={{ marginBottom: '1rem' }}>Kies uw sensor</h2>

			<form onSubmit={formik.handleSubmit}>
				<Grid item container xs={12} style={{ marginBottom: '1rem' }}>
					<FormControl style={{ width: '100%' }}>
						<NativeSelect
							value={formik.values.username}
							name="username"
							onChange={formik.handleChange}
							inputProps={{ 'aria-label': 'username' }}
						>
							<option value="" disabled>
								Kies een sensor
							</option>
							{allSensors.map((sensor, idx) => (
								<option key={idx} value={sensor.sensorHash}>
									{sensor.sensorHash}
								</option>
							))}
						</NativeSelect>
						<FormHelperText>Sensor Code</FormHelperText>
					</FormControl>
				</Grid>

				<Grid item container xs={12}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						style={{ width: '100%' }}
					>
						SUBMIT
					</Button>
				</Grid>
			</form>
		</>
	)
}

export default Home
