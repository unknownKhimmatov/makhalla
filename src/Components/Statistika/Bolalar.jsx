import React, { PureComponent } from 'react';
import { data } from '../Chart/Data'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart1() {

    return (
        <div className="chart1">
            <div className="top-title-chart">
                <h3>
                    Umumiy bolalar soni
                </h3>
            </div>
            <ResponsiveContainer width="100%" aspect={4}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="blue" fill="rgba(131, 131, 193, 0.447)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

