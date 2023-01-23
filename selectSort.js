function selectSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    console.log(arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
