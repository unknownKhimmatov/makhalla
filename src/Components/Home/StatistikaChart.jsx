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
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 10,
                }}
            >
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                <XAxis dataKey="name" scale="band" />
                <Tooltip />
                <Bar dataKey="yangi" barSize={80} fill="#4E6E81" />
                <Line type="monotone" dataKey="Oldindan" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    );

}
