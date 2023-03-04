import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { data } from '../Statistika/Data'

export default function Chart() {


    return (
        <ResponsiveContainer width="100%" aspect={3} >
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                <XAxis dataKey="name" scale="band" />
                {/* <YAxis /> */}
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="uv" barSize={20} fill="#2E3840" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    );

}
