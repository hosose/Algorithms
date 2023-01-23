function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot[0] >= arr[i]) left.push(arr[i]);
    else if (pivot[0] < arr[i]) right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
