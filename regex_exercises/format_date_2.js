function formatDate(str) {
  let dashRegex = /(\d{4})-(\d{2})-(\d{2})/;
  let slashRegex = /(\d{4})\/(\d{2})\/(\d{2})/;
  return str.replace(dashRegex, '$3.$2.$1').replace(slashRegex, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)