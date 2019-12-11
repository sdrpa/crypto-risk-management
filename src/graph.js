import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Label, Tooltip, CartesianGrid } from 'recharts';
import _ from 'lodash'

import './graph.css';

export default ({ title, data }) => {
   return (
      <div className="container">
         <h1>{title}</h1>
         <ResponsiveContainer width="80%" height="60%">
            <LineChart data={data}
               margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
               <XAxis dataKey="date">
                  <Label value="Time" position="bottom" offset={5} />
               </XAxis>
               <YAxis scale="log" domain={[0.01, _.max(data.map(o => o.V))]} allowDataOverflow yAxisId={0}>
                  <Label value="Price" position="left" />
               </YAxis>
               <YAxis orientation='right' yAxisId={1}>
                  <Label value="Risk" position="right" />
               </YAxis>
               <Tooltip isAnimationActive={false} />
               <CartesianGrid stroke="#f5f5f5" />
               <Line isAnimationActive={false} type="linear" stroke="#ff7300" dot={false} dataKey="V" yAxisId={0} />
               <Line isAnimationActive={false} type="linear" stroke="#387908" dot={false} dataKey="R" yAxisId={1} />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};
