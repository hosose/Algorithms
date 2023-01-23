function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const boundary = Math.floor(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return merge(mergeSort(left), mergeSort(right));
}
