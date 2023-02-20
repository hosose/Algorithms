## **다익스트라 알고리즘 이란?**

음의 가중치가 없는 그래프의 한 정점(頂點, Vertex)에서 모든 정점까지의 최단거리를 각각 구하는 알고리즘(최단 경로 문제, Shortest Path Problem)입니다.

에츠허르 다익스트라가 고안한 알고리즘으로, 그가 처음 고안한 알고리즘은 O(V2)의 시간복잡도를 가졌다. 이후 우선순위 큐(=힙 트리)등을 이용한 더욱 개선된 알고리즘이 나오며, O((V+E)logV)(V는 정점의 개수, E는 한 정점의 주변 노드)의 시간복잡도를 가지게 되었습니다.

**단순하게 말해서, 시작점으로 부터 도착점까지 가장 가까운 코스를 만들어주는 알고리즘입니다.**

사용하는 곳은 네비게이션이나 인공위성 GPS 소프트웨어 입니다.

## **다익스트라 알고리즘의 실행 순서**

1.  모든 꼭지점을 미방문 상태로 만듭니다. (즉, 방문 했는지 안했는지를 확인하는 배열(**방문배열**)을 하나 만들어서 꼭지점에 방문을 하지 않았다로 채워 넣습니다. 아래 그림을 보고 이해하면 쉽습니다.)
2.  시작점(A라 가정)를 정합니다. (어디서 시작하는지 고르면 됩니다. )
3.  시작점(A라 가정)는 방문 배열에 방문했다고 표시합니다.
4.  시작점(A라 가정)에 인접한 정점으로 가는 모든 거리 값을 기록합니다.
5.  시작점(A라 가정)에 각각의 인접 정점과 연결된 거리 중에서 최단 거리를 갖는 정점을 찾습니다.
6.  최단 거리를 갖은 경로를 통해 다음 정점(C라 가정)으로 이동합니다.
7.  이동거리를 입력합니다.
8.  다음 정점에 인접한 정점으로 가는 모든 거리 값에 이동거리를 더한 값(B에 인접한 각 정점들의 가중치 + 이동거리)과 5번에서 입력한 최단거리 값을 비교합니다. 이때 최소 값을 갖는 거리를 기록합니다.
9.  정점 B를 방문 상태로 처리합니다.
10. 모든 정점이 방문 상태가 될 때까지 위의 과정을 반복합니다.

---

## **선형 자료 구조와 선형 탐색을 이용한 다익스트라 알고리즘**

**\[준비물\] 최단거리 배열, 방문 처리 배열, 지도(그래프), 선형 자료구조**

[##_Image|kage@wwZVd/btrZYSvzCgI/gjsweBITffQo3GqgztluIk/img.png|CDM|1.3|{"originWidth":662,"originHeight":472,"style":"alignCenter","caption":"준비물"}_##]

1\. 모든 꼭지점을 미방문 상태로 만듭니다. (즉, 방문 했는지 안했는지를 확인하는 배열(**방문배열**)을 하나 만들어서 꼭지점에 방문을 하지 않았다로 채워 넣습니다. 아래 그림을 보고 이해하면 쉽습니다.) \[F,F,F,F,F\]

2\. 시작점(A)를 정합니다. (어디서 시작하는지 고르면 됩니다. )

3\. 시작점(A)는 방문 배열에 방문했다고 표시합니다. \[T,F,F,F,F\]

4\. 시작점(A)에 인접한 정점으로 가는 모든 거리 값을 기록합니다. \[0,10,1,4,INF,INF\] (INF는 무한대로 시작점에서 직행은 없어서 이렇게 표시/ 또한,최소 값을 가져야 최단거리라서 비교할 때 작은 값을 가져와야하기 때문에 무한대로 작성)

5\. 시작점(A)에 각각의 인접 정점과 연결된 거리 중에서 최단 거리를 갖는 정점을 찾습니다. (C점이 가장 가깝우니 C점)

1~5 번을 진행합니다.

[##_Image|kage@k2hIx/btrZ0JrFpwN/IPB5fSllLIdc4T31BKcKbK/img.png|CDM|1.3|{"originWidth":577,"originHeight":409,"style":"alignCenter","caption":"1~5 단계 진행"}_##]

6\. 최단 거리를 갖은 경로를 통해 다음 정점(C)으로 이동합니다.

[##_Image|kage@wJDUd/btrZ7FItf4l/hykD9DNUJQa6cnv6NEZoxK/img.png|CDM|1.3|{"originWidth":545,"originHeight":399,"style":"alignCenter","caption":"C점으로 이동"}_##]

7\. 이동거리를 입력 및 저장합니다. (이동거리 = 1)

8\. 다음 정점에 인접한 정점으로 가는 모든 거리 값에 이동거리를 더한 값(C에 인접한 각 정점들의 가중치 + 이동거리)과 5번에서 입력한 최단거리 값을 비교합니다. 이때 최소 값을 갖는 거리를 최단 거리 배열에 기록합니다.

[##_Image|kage@budSug/btrZ0JSLlmT/sbxuBQaHskdqWtxMVjC191/img.png|CDM|1.3|{"originWidth":700,"originHeight":176,"style":"alignCenter"}_##]

9\. 정점 C를 방문 상태로 처리합니다.

[##_Image|kage@cEHeC9/btrZ7G1E4ho/2UyIdoMKH0AeyKYV4LgJ10/img.png|CDM|1.3|{"originWidth":553,"originHeight":394,"style":"alignCenter"}_##]

**9번까지 진행하고 나서의 결과**

[##_Image|kage@bb54ZJ/btrZ7pZYGv5/svHT5ijbwWpqUByXcJe0T0/img.png|CDM|1.3|{"originWidth":612,"originHeight":425,"style":"alignCenter"}_##]

10\. 모든 정점이 방문 상태가 될 때까지 위의 과정을 반복합니다. (그 다음은 방문안하고 방문 가능하고 거리가 최소인 D를 진행하면 됩니다.D →F→E)

이해를 더 빠르게 하기 위해서는 직접 수기로 작성하든 코드로 입력하여 결과 값을 계속 확인하면 좋을 것 같아요.

알고리즘 순서에 맞게 코드를 만들어 봐요.

## **코드(JS)**

```
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
```

코드 위에 있는 주석은 그 바로 밑의 줄을 설명하는 글입니다.

## **소감**

최단 거리를 찾는 함수로 지하철 갈아타는 것에 대한 프로그램을 만들어 보아도 좋겠다는 생각을 했습니다. 최소로 역을 줄이는 것은 풀 수 있겠네요!

알고리즘이 세상에 엄청나게 많은데 꾸준히 계속 배워가면 좋을 것 같습니다.

---

출처

[https://taesung1993.tistory.com/48](https://taesung1993.tistory.com/48)
