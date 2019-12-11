export const randomDate = (start, end, startHour, endHour) => {
   var date = new Date(+start + Math.random() * (end - start));
   var hour = startHour + Math.random() * (endHour - startHour) | 0;
   date.setHours(hour);
   return date;
}

export const randomNumber = (min, max) => { // min and max included 
   return Math.floor(Math.random() * (max - min + 1) + min);
}
