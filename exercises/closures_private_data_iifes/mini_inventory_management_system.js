let ItemCreator = (function () {
  return function(itemName, category, quantity) {
    let item = {
      notValid: true
    }

    if (itemName.replaceAll(' ', '').length < 5) {
      return item;
    }

    if (category.split(' ').length > 1 || category.length < 5) {
      return item;
    }

    if (quantity === undefined) {
      return item;
    }

    let skuFirstPart = '';
    let currLetterIdx = 0;
    while (skuFirstPart.length < 3) {
      let letter = itemName.slice(currLetterIdx, currLetterIdx + 1);
      skuFirstPart += letter;
      currLetterIdx += 1;
    }

    let skuSecondPart = category.slice(0, 2);
    let skuCode = (skuFirstPart + skuSecondPart).toUpperCase();

    item = {
      skuCode,
      itemName,
      category,
      quantity
    };

    return item;
  }
})();

let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item['notValid']) {
      return false;
    }
    this.items.push(item);
  },
  update(skuCode, updateObj) {
    let item = this.items.filter(item => item.skuCode === skuCode)[0];
    for (let [key, value] of Object.entries(updateObj)) {
      item[key] = value;
    }
  },
  delete(skuCode) {
    let itemIdx = this.items.findIndex(item => item.skuCode === skuCode);
    this.items.splice(itemIdx, 1);
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0).map(item => item.itemName);
  },
  itemsInCategory(category) {
    return this.items.filter(item => item.category === category).map(item => item.itemName);
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  createReporter(skuCode) {
    let innerItems = this.items;
    return {
      itemInfo() {
        let item = innerItems.items.filter(item => item.skuCode === skuCode)[0];
        for (let [key, value] of Object.entries(item)) {
          console.log(`${key}: ${value}`);
        }
      }
    }
  },
  reportInStock() {
    let inStockItems = this.items.inStock();
    console.log(inStockItems.join(','));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10