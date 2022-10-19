export function addMinutes(numOfMinutes, date = new Date()) {
    date.setMinutes(date.getMinutes() + numOfMinutes);
  
    return date;
  }


export const formatDate = (d) => {
    if (!(d instanceof Date)) {
        d = new Date(d)
    }
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
}


