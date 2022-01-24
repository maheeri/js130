function delayLog() {
  for (let delay = 1; delay <= 10; delay++) {
    setTimeout(function() {
      console.log(delay);
    }, delay * 1000);
  }
}

delayLog();