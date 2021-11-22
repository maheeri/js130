function makeList() {
  let items = [];
  return {
    add: function(item) {
      let itemIdx = items.indexOf(item);
      if (itemIdx === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove: function(item) {
      let itemIdx = items.indexOf(item);
      if (itemIdx !== -1) {
        items.splice(itemIdx, 1);
        console.log(`${item} removed!`);
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

console.log(list.items);