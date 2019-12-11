// http://recharts.org/en-US/api/YAxis

import React, { useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import _ from 'lodash'

import { randomDate, randomNumber } from './lib-random'

export default () => {
   const generateData = () => {
      let xs = new Array(45).fill(0).map(n => {
         let date = randomDate(new Date('01-01-2014'), new Date('01-01-2019'))
         return { date, v: randomNumber(0, 10000) }
      })
      return _.sortBy(xs, ["date"])
   }
   const data = generateData().map(o => {
      const dateDescription = date => `${date.getFullYear()}/${date.getMonth() + 1}`
      return { date: dateDescription(o.date), v: o.v }
   })
   //console.log(data)

   return (
      <ResponsiveContainer width="80%" height="60%">
         <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis scale="log" domain={['auto', 'auto']} yAxisId={0} />
            <Tooltip isAnimationActive={false} />
            <CartesianGrid stroke="#f5f5f5" />
            <Line isAnimationActive={false} stroke="#ff7300" type="linear" dot={false} dataKey="v" yAxisId={0} />
         </LineChart>
      </ResponsiveContainer>
   );
};
