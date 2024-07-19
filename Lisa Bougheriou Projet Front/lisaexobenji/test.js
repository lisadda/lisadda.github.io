const start = 1;
const end = 5;

const generateTable = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(generateTable(start, end)); // Résultat attendu : [1, 2, 3, 4, 5]
