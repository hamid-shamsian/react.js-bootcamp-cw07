const sales = [
   { item: "PS4 Pro", stock: 3, original: 399.99 },
   { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
   { item: "Nintendo Switch", stock: 4, original: 299.99 },
   { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
   { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
];

const output = sales.map(saleItem => {
   const { stock, original, discount = 0 } = saleItem;
   const sale = original * (1 - discount);
   const total = sale * stock;
   return { ...saleItem, sale, total };
});

//>>>> refactored using obj destructuring:
// const output = sales.map(({ item, stock, original, discount = 0 }) => ({
//    item,
//    stock,
//    original,
//    sale: original * (1 - discount),
//    total: original * (1 - discount) * stock
// }));

console.log(output);
