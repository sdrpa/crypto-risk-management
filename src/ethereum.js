// https://etherscan.io/chart/etherprice
// https://www.csvjson.com/csv2json

import React from 'react';
import _ from 'lodash';

import _data from './ethereum-data';
import { sma, normalize } from './lib';
import Graph from './graph';

export default () => {
   const generateData1 = () => {
      const dateDescription = date => `${date.getFullYear()}/${date.getMonth() + 1}`;
      return _data.map(o => {
         return { date: dateDescription(new Date(o["Date(UTC)"])), V: o["Value"] };
      })
   }
   const generateData2 = () => {
      let xs0 = generateData1()
      // Calculate R
      const xs1 = xs0.map((o, i) => {
         let ma50 = sma(xs0.map(o => o.V), 50);
         let ma350 = sma(xs0.map(o => o.V), 350);
         let R = ma50[i]/ma350[i];
         return { ...o, R }; //R: isNaN(R) ? 0 : R
      })
      // Normalize R
      let minR = _.min(xs1.map(o => o.R));
      let maxR = _.max(xs1.map(o => o.R));

      return xs1.map((o, i) => {
         return { ...o, R: normalize(o.R, minR, maxR, 0, 1) };
      })
   }
   const data = generateData2();
   //console.log(data)
   //console.log(data.map(o => o.V))

   return <Graph title="Ethereum" data={data} />;
};
