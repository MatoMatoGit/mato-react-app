import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import valueSpecific from '../queries/ValueSpecific';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const ValueChart = () => {
    const {loading, error, data} = useQuery(valueSpecific);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const formattedData = data.allMeasurements.edges.map(({node}) => (node));

    return (
        <>
            <div>
                <h1>Sensor: a4cf127d8b2c</h1>
            </div>

            <div>
                <h3>Bodemvochtigheid</h3>
                <h5>Meest actuele waarde: {formattedData[formattedData.length - 1].data}</h5>
            </div>

            <LineChart width={375} height={300} data={formattedData}
                       margin={{top: 5, right: 5, left: 0, bottom: 5}}>
                <XAxis dataKey="uuid"/>
                <YAxis dataKey="data"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </>
    );
};

export default ValueChart;
