export default function(callback, timer = 2000) {
  let timerId = null;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => { 
      callback();
     },  timer)
  }
}