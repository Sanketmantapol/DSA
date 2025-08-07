function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1; 
}

function searchWithSorting(arr, target) {
  const sorted = mergeSort(arr);
  console.log("Sorted array:", sorted);

  const index = binarySearch(sorted, target);
  return index !== -1 ? `Found at index ${index}` : "Not found";
}

const data = [5, 3, 8, 1, 9, 2];
const target = 8;

console.log(searchWithSorting(data, target));
