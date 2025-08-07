const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];

const common = a1.filter(item => a2.includes(item));
console.log(common); 
