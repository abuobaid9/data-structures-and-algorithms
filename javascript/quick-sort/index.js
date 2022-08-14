function quickSort(arr, low, high) {
  if (low < high) {
    const position = partition(arr, low, high);
    quickSort(arr, low, position - 1);
    quickSort(arr, position + 1, high);
  }
}
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = (low - 1);
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}
function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
