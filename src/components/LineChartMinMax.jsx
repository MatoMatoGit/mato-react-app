import React from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ResponsiveContainer
} from 'recharts'

const LineChartMinMax = ({ formattedData, lowVal, highVal, showDot }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={formattedData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
				<XAxis dataKey="uuid" />
				<YAxis dataKey="data" />
				{showDot ? <CartesianGrid strokeDasharray="3 3" /> : null}
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="data"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
					dot={showDot}
				/>

				<ReferenceLine y={lowVal} label="MIN" stroke="blue" strokeDasharray="3 3" />
				<ReferenceLine y={highVal} label="MAX" stroke="red" strokeDasharray="3 3" />
			</LineChart>
		</ResponsiveContainer>
	)
}

export default LineChartMinMax
