import React, { useEffect } from 'react';
import {
	PieChart, Pie, Cell,
} from 'recharts';
import * as GraphicComponent from './StyleGraphicComponent';

const data = [
	{ name: 'Group A', value: 800 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
];

const COLORS = ['#002633', '#81DDC6', '#F45E58', '#EEC683'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx, cy, midAngle, innerRadius, outerRadius, percent, 
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const Graphic = (taskList) => {
	return (
		<GraphicComponent.Container>
			<PieChart width={600} height={600}>
				<Pie
					data={data}
					cx={300}
					cy={300}
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={180}
					fill="#8884d8"
					dataKey="value"
				>
					{
						data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
					}
				</Pie>
			</PieChart>
		</GraphicComponent.Container>
	);
}

export default Graphic;