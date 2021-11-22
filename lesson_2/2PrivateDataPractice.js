function makeList() {
  let list = [];
  return function(arg) {
    if (arg === undefined) {
      if (list.length == 0) {
        console.log("list is empty");
      } else {
        list.forEach(item => console.log(item));
      }
      return;
    } 

    let argIdx = list.indexOf(arg);
    if (argIdx === -1) {
      list.push(arg);
      console.log(`${arg} added!`);
    } else {
      list.splice(argIdx, 1);
      console.log(`${arg} removed!`);
    }
  }
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book