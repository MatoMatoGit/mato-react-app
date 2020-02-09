import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ValueChart = ({ formattedData }) => {
	return (
		<LineChart
			width={375}
			height={300}
			data={formattedData}
			margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
		>
			<XAxis dataKey="uuid" />
			<YAxis dataKey="data" />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{ r: 8 }} />
		</LineChart>
	)
}

export default ValueChart
