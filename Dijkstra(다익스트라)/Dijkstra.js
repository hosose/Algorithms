const visitedArr = new Array(6).fill(false); //방문 여부 확인 배열
const INF = Infinity;
const map = [
  [0, 10, 1, 4, INF, INF],
  [10, 0, 2, 5, INF, INF],
  [1, 2, 0, 1, INF, 8],
  [4, 5, 1, 0, INF, 3],
  [INF, INF, INF, INF, 0, 2],
  [INF, INF, 8, 3, 2, 0],
];
//배열 속에서 가장 작은 값 찾고 그 index 값 알려주는 함수
const getMinIdx = (arr) => {
  let min = INF;
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] && !visitedArr[i]) {
      min = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
};
//시작점부터 도착점까지 최단 거리
const getMinLength = (startPoint) => {
  //시작점 설정
  let startArr = map[startPoint - 1];
  let count = 0;
  let end = startArr.length;
  //최단거리 저장
  let min = 0;
  let currentArr = startArr;
  //시작점 방문 표시
  visitedArr[startPoint - 1] = true;

  while (count < end) {
    const idx = getMinIdx(currentArr);
    //최단거리 값 + 다음 점에 가는 거리
    min += currentArr[idx];
    const nextArr = map[idx];
    for (let i = 0; i < startArr.length; i++) {
      if (startArr[i] > nextArr[i] + min && !visitedArr[i]) {
        //조건이 맞으면 시작점 배열 변경
        startArr[i] = nextArr[i] + min;
      }
    }
    currentArr = map[idx];
    //지나간 배열은 방문 표시
    visitedArr[idx] = true;
    count++;
  }
  return startArr;
};
