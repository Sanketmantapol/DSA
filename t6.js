const products = [
  { id: 1, name: 'Phone', categoryId: 2 },
  { id: 2, name: 'Shirt', categoryId: 1 },
  { id: 3, name: 'Charger', categoryId: 2 }
];

const grouped = products.reduce((acc, product) => {
  const { categoryId } = product;

  if (!acc[categoryId]) {
    acc[categoryId] = [];
  }

  acc[categoryId].push(product);
  return acc;
}, {});

console.log(grouped);
