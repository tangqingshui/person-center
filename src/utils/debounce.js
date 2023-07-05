export default function(callback, timer = 2000) {
  let timerId = null;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => { 
      callback(...args);
     },  timer)
  }
}