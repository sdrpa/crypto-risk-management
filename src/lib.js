export const MA = (d, t) => {
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
