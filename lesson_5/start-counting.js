function startCounting() {
  let count = 1;
  let id = setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000);

  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
setTimeout(() => stopCounting(id), 4000);