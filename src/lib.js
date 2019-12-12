export const sma = (d, t) => {
   if (d.length >= t && d.constructor === Array) {
      var r = [], s = 0, ma;
      for (var i = 0; i < d.length; ++i) {
         s += isNaN(d[i]) ? 0 : d[i];
         if (i < t - 1) {
            r.push(NaN);
         } else if (i + 1 === t) {
            ma = s / t;
            r.push(ma);
         } else {
            s -= isNaN(d[i - t]) ? 0 : d[i - t];
            ma = s / t;
            r.push(ma);
         }
      }
      return r;
   } else {
      throw new Error('[ERROR] Not enough data or data is not Array.');
   }
};

export const normalize = (val, minVal, maxVal, newMin, newMax) => {
   return newMin + (val - minVal) * (newMax - newMin) / (maxVal - minVal);
};

export const average = data => {
   const sum = data.reduce((sum, value) => sum + value, 0);
   const avg = sum / data.length;
   return avg;
};

export const std = xs => {
   let avg = average(xs);
   let squareDiffs = xs.map(v => {
      var diff = v - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
   });
   let avgSquareDiff = average(squareDiffs);
   let stdDev = Math.sqrt(avgSquareDiff);
   return stdDev;
}
