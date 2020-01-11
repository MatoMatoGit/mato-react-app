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
        <LineChart width={600} height={300} data={formattedData}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="uuid"/>
            <YAxis dataKey="data"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
    );
};

export default ValueChart;
