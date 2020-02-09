import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

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
	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				id="username"
				name="username"
				type="username"
				onChange={formik.handleChange}
				value={formik.values.username}
				label="Sensor hash"
				variant="outlined"
			/>
			<Button variant="contained" ntype="submit">
				Login
			</Button>
		</form>
	)
}

export default Home
