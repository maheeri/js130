let ItemCreator = (function () {
  function validItemArguments(name, category, quantity) {
    const MINIMUM_NAME_LENGTH = 5;
    if (name.replaceAll(' ', '').length < MINIMUM_NAME_LENGTH) {
      return false;
    }

    const MINIMUM_CATEGORY_LENGTH = 5;
    if (category.split(' ').length > 1 || category.replaceAll(' ', '').length < MINIMUM_CATEGORY_LENGTH) {
      return false;
    }

    if (quantity === undefined) {
      return false;
    }

    return true;
  }

  function generateSku(name, category) {
    let skuStart = '';
    let splitName = name.split(' ');
    if (splitName[0].length < 3) {
      skuStart += splitName[0].slice(0, 2);
      skuStart += splitName[1][0];
    } else {
      skuStart += splitName[0].slice(0, 3);
    }

    let skuEnd = category.slice(0, 2);

    return (skuStart + skuEnd).toUpperCase();
  }

  return function(name, category, quantity) {
    if (!validItemArguments(name, category, quantity)) {
      return { notValid: true };
    } else {
      return {
        name,
        category,
        quantity,
        sku: generateSku(name, category)
      };
    }
  };
})();

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (item.notValid) {
      return false;
    }
    this.items.push(item);
    return true;
  },

  update(sku, properties) {
    let item = this.items.find(item => item.sku === sku);
    for (let property in properties) {
      item[property] = properties[property];
    }
  },

  delete(sku) {
    let itemIdx = this.items.findIndex(item => item.sku === sku);
    this.items.splice(itemIdx, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  getItem(sku) {
    return this.items.find(item => item.sku === sku);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(sku) {
    let item = this.items.getItem(sku);
    return {
      itemInfo() {
        for (let property in item) {
          console.log(`${property}:${item[property]}`);
        }
      }
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(', '));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);                   // invalid item - short name
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');                 // invalid - no quantity
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);    // invalid - two word category
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log('All valid items:');
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
console.log('Report manager in stock 1: ');
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// logs list with the item objects for football and kitchen pot
console.log('In stock items:');
console.log(ItemManager.inStock());
// football,kitchen pot
console.log('Report manager in stock 2: ');
ReportManager.reportInStock();

// logs list with the item objects for basket ball, soccer ball, and football
console.log('Items in sports:');
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// logs the remaining 3 valid items (soccer ball is removed from the list)
console.log('Remaining 3 valid items:');
console.log(ItemManager.items);

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