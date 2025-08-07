const data = [1, 3, 5, 2, 4, 5];

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates(data)); 
