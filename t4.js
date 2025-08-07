const data = [
  { key: 'name', value: 'John' },
  { key: 'email', value: 'john@example.com' },
  { key: 'age', value: 20 },
];

const allowedKeys = ['name', 'age'];

const filteredData = data.filter(item => allowedKeys.includes(item.key));

console.log(filteredData);

