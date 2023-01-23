# Sorting Algorithms

---

이 글을 쓰기에 앞서 개발자 동쪽별님에게 감사의 인사를 올리고 시작하겠습니다.

감사합니다. 동쪽별님

코딩테스트 문제를 풀다보니 알고리즘을 알지 못하면 코드는 만들 수 있지만, 속도를 제어할 줄 모르는 개발자가 될 것 같더라고요. 그래서 먼저 정렬 알고리즘에 대해 알고 싶어 공부해 보았습니다.

---

### **목차**

1. **[Stabe 정렬 & In-place 정렬]()**
2. **[거품 정렬(Bubble Sort)]()**
3. **[선택 정렬(Selection Sort)]()**
4. **[삽입 정렬(Insertion Sort)]()**
5. **[퀵 정렬(Quick Sort)]()**
6. **[병합 정렬(Merge Sort)]()**

---

시작하기 전에 먼저, 정렬의 **Stable 정렬**과 **In-place 정렬**에 대해 알고 갑시다!

### **Stable 정렬?**

정렬을 했을 때 중복된 값들의 순서가 변하지 않는 것을 말합니다.

만약, arr = [1, 7(1), 3, 5, 4, 7(2), 9] 을 정렬한 결과가

- arr = [1, 3, 4, 5, 7(1), 7(2), 9] 이면 **Stable(안정)**
- arr = [1, 3, 4, 5, 7(2), 7(1), 9] 이면 **Unstable(불안정)**

이라 할 수 있습니다.

### **In-place 정렬?**

정렬하는데 추가적인 메모리 공간이 거의 들지 않는 것을 말합니다.

제자리 정렬이라고도 합니다.

하나의 배열 안에서 모든 정렬이 일어나는 것입니다.

여러 정렬 알고리즘을 살펴보면서 Stable 여부, In-place 여부에 대해서도 살펴보도록 합시다.

---

## **거품 정렬(Bubble Sort)**

![https://blog.kakaocdn.net/dn/nsZ8p/btrAIf9uNf6/oMrfjknBSpMQPEkUQgNZ71/img.gif](https://blog.kakaocdn.net/dn/nsZ8p/btrAIf9uNf6/oMrfjknBSpMQPEkUQgNZ71/img.gif)

버블 정렬은 첫번째 원소부터 인접한 원소와 비교하며 자리를 바꾸면서 맨 끝부터 정렬하는 방식입니다.

- i번째 원소와 i+1번째 원소의 값을 비교하고 만약 i번째의 값이 i+1번째의 값보다 크다면 둘의 자리를 바꾸어 값이 큰 원소가 뒤에 위치하게 합니다.
- 이를 반복해서 수행하면 가장 큰 값부터 뒤쪽에 쌓이게 되겠죠.
- 즉 가장 큰값을 하나씩 뒤로 보내면서 뒤쪽부터 정렬하는 것입니다.

이처럼 정렬 방식이 마치 물속에서 올라오는 물방울과 같다고 하여 버블 정렬이라는 이름이 붙여졌습니다.

```jsx
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
}
```

### **⏱ 시간 복잡도**

- 시간 복잡도를 계산하면, (n-1) + (n-2) + (n-3) + .... + 2 + 1 = n(n-1) / 2 이므로 **O(n^2)** 입니다.
- 또한, 어떠한 경우에도 2개의 원소를 비교하기 때문에 **최선, 평균, 최악의 경우 모두** 시간복잡도가 O(n^2) 으로 동일합니다.

### **👍 장점**

- 구현이 매우 간단하고, 소스코드가 직관적입니다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로 **In-place** 정렬입니다.
- **Stable** 정렬입니다.

### **👎 단점**

- 시간 복잡도가 최악, 최선, 평균 모두 O(n^2)으로, 굉장히 비효율적입니다.
- 데이터를 하나씩 비교하기 때문에 비교 횟수가 많아지므로 시간이 오래 걸리기 때문이죠.
- 정렬된 상태에서 새로운 데이터가 추가되면 정렬 효율이 좋지 않습니다.

### ➕ **개선**

칵테일 셰이커(Cocktail Shaker) 정렬 (= 양방향 버블 정렬)

- 버블 정렬과는 달리 매 반복마다 배열의 순서를 바꾸어 정렬합니다.
- **홀수 번째 반복**은 가장 작은 요소를 맨 앞으로, **짝수 번째 반복**은 가장 큰 요소를 맨 뒤로 정렬합니다. (또는 반대)
- 시간복잡도는 **최선의 경우 O(n)** 을 만족합니다!
- 평균과 최악의 경우 여전히 O(n^2) 입니다..

---

## **선택 정렬(Selection Sort)**

![https://blog.kakaocdn.net/dn/cqCvsg/btrAVs0WT4A/zuxAMlsX5t758nSa6MwvK1/img.gif](https://blog.kakaocdn.net/dn/cqCvsg/btrAVs0WT4A/zuxAMlsX5t758nSa6MwvK1/img.gif)

선택 정렬은 앞쪽부터 정렬하는 방식입니다.

- 주어진 배열에서 가장 작은 최소값을 찾고 배열의 맨 앞의 값과 위치를 바꾸면서 정렬합니다.
- 맨 앞의 값을 제외한 배열로 다시 반복합니다.

선택 정렬은 배열의 최솟값을 찾아 선택하여 정렬한다는 뜻에서 이름이 붙여졌습니다. 배열에서 최솟값을 찾아야 하기 때문에 **비교 횟수**는 많지만 실제로 값을 바꾸는 **교환 횟수**가 적다는 것이 특징입니다

```jsx
function selectionSort(arr) {
  let indexMin;
  for (let x = 0; x < arr.length - 1; x++) {
    indexMin = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[indexMin]) {
        indexMin = y;
      }
    }
    [arr[x], arr[indexMin]] = [arr[indexMin], arr[x]];
  }
  return arr;
}
```

### **⏱ 시간 복잡도**

- (n-1) + (n-2) + .... + 2 + 1 = n(n-1) / 2 이므로 시간 복잡도는 **O(n^2)** 입니다.
- **최선, 평균, 최악의 경우 모두** 시간복잡도가 O(n^2) 으로 동일합니다.

### **👍 장점**

- 버블 정렬과 마찬가지로 구현이 간단합니다.
- 비교하는 횟수에 비해 교환하는 횟수가 적기 때문에, 많은 교환이 일어나야 하는 자료 상태에서 비교적 효율적입니다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로 **In-place** 정렬입니다.

### **👎 단점**

- 데이터를 하나씩 비교하기 때문에 시간복잡도가 O(n^2)으로, 비효율적입니다.
- **Unstable** 정렬입니다. (구현하는 방식에 따라 달라질 수 있음)
- 정렬된 상태에서 새로운 데이터가 추가되면 정렬 효율이 좋지 않습니다.

---

## **삽입 정렬(Insertion Sort)**

![https://blog.kakaocdn.net/dn/rGBXh/btrASwpIeko/TLrkTXTvJwRQvp7QOzhC2K/img.gif](https://blog.kakaocdn.net/dn/rGBXh/btrASwpIeko/TLrkTXTvJwRQvp7QOzhC2K/img.gif)

삽입 정렬은 버블 정렬의 비효율성을 개선하기 위해 등장한 방법입니다.

버블 정렬은 i번째와 i+1번째를 비교하며 위치를 바꾸었다면, 삽입 정렬은 i번째 원소를 정렬된 상태의 앞부분과 비교하여 적절한 위치에 삽입하는 방식입니다.

- i-1번째 원소까지는 모두 정렬된 상태여야 하며 i-1번째부터 0번째까지의 원소와 i번째 원소를 각각 비교합니다.
- 이때 i번째 원소보다 작은 값이 발견되면 그 위치에 i번째 원소를 **삽입**합니다.

삽입 정렬은 버블 정렬의 비교 및 교환 횟수를 줄임으로써 높은 효율을 보여줍니다.

```jsx
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
  }
  return arr;
}
```

### [](https://east-star.tistory.com/10#%C-%A-)

### **⏱ 시간 복잡도**

- **최악의 경우(역으로 정렬되어 있을 경우),** (n-1) + (n-2) + .... + 2 + 1 = n(n-1 )/ 2 으로 **O(n^2)** 입니다.
- 하지만 **모두 정렬이 되어있는 경우,** 한번씩 밖에 비교를 안하므로 **O(n)** 의 시간복잡도를 가지게 됩니다.
- 즉, **최선**의 경우 = O(n), **평균과 최악**의 경우 = O(n^2) 입니다.

### **👍 장점**

- 입력으로 들어오는 배열의 원소가 정렬되어있을수록 속도가 빠릅니다.
- 정렬된 값은 교환이 일어나지 않습니다.
- 그렇기 때문에, 이미 정렬되어 있는 배열에 자료를 하나씩 삽입/제거하는 경우에는 현실적으로 최고의 정렬 알고리즘이 됩니다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로 **In-place** 정렬입니다.
- **Stable** 정렬입니다.
- 선택 정렬, 버블 정렬과 같은 O(n^2) 알고리즘에 비교하여 상대적으로 빠릅니다.

### **👎 단점**

- 평균과 최악의 시간복잡도가 O(n^2)으로 비효율적입니다.
- 선택 정렬, 버블 정렬과 마찬가지로 배열의 길이가 길어질수록 비효율적입니다.

**❗️ 선택 정렬과 삽입 정렬을 헷갈리지 마세요!**

- 선택 정렬과 삽입 정렬은 i번째 반복 이후, i 원소가 정렬된 순서로 온다는 점에서 유사합니다.
- 하지만, 선택 정렬은 i+1번째 원소를 찾기 위해 **나머지 모든 원소들을 탐색**하지만
- 삽입 정렬은 i+1번째 원소를 배치하는데 **필요한 만큼의 원소만 탐색**하기 때문에 훨씬 효율적으로 실행된다는 차이가 있습니다.

---

## **퀵 정렬(Quick Sort)**

![https://blog.kakaocdn.net/dn/dIqOwt/btrAVtyN6CV/LFxg1TL5OrdcWAuwMInIzk/img.gif](https://blog.kakaocdn.net/dn/dIqOwt/btrAVtyN6CV/LFxg1TL5OrdcWAuwMInIzk/img.gif)

**분할 정복(divide and conquer)** 방법을 통한 정렬로, 하나의 **pivot(축)**을 정해서 이 pivot보다 작은 값은 왼쪽에 큰값은 오른쪽에 위치시키는 방법입니다.

- 왼쪽과 오른쪽에 해당하는 원소들에 대해 두 배열로 나눕니다. -> 분할(Divide)
- 분할된 두 개의 작은 배열에 대해 재귀(Recursion)적으로 이 과정을 반복합니다.
- 재귀 호출이 한번 진행될 때마다 **최소한 하나의 원소는 최종적으로 위치가 정해지므로**, 이 알고리즘은 반드시 끝난다는 것을 보장할 수 있습니다.

실제로 많이 사용하고 있는 정렬 알고리즘으로 알려져 있습니다!

일반적으로 준수한 효율을 보이지만 최악의 경우에는 훨씬 많은 시간이 소요되므로 안정성이 좋지 않다는 특징이 있죠..

그럼에도 대부분의 내장 라이브러리에서 존재하는 정렬 함수는 퀵 정렬 알고리즘을 사용한답니다.

```jsx
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
```

### **⏱ 시간 복잡도**

- **최선과 평균**의 경우 **O(nlogn)** 입니다.
- **최악**의 경우(정렬이 되어 있는 경우) **O(n^2)** 입니다.

### **👍 장점**

- 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환합니다.
- 한 번 결정된 pivot들이 추후 연산에서 제외되는 특성 때문에, 시간 복잡도 O(nlogn)을 가지는 다른 정렬 알고리즘과 비교했을 때 가장 빠릅니다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로 **In-place** 정렬입니다.

### **👎 단점**

- 정렬된 배열에 대해서는 불균형 분할에 의해 오히려 수행시간이 더 많이 걸립니다.
- **Unstable** 정렬입니다.

### ➕ **개선**

- pivot 값이 최소나 최대값으로 지정되어(즉, 배열이 정렬되어 있으면) 파티션이 나누어지지 않을 때, O(n^2)에 대한 시간복잡도를 가지게 됩니다..
- 이때, 배열의 가장 앞에 있는 값과 중간값을 교환하여, 중간값이 pivot이 되도록 하면 확률적으로나마 시간복잡도를 O(nlogn)으로 개선할 수 있습니다.
- 말 그대로 확률적이기 때문에 반드시 개선되는 것은 아닙니다.

---

## **병합 정렬(Merge Sort)**

![https://blog.kakaocdn.net/dn/bpXxX7/btrBzUvXZOf/RCAxQSEte1x8DmwbZaRLO0/img.gif](https://blog.kakaocdn.net/dn/bpXxX7/btrBzUvXZOf/RCAxQSEte1x8DmwbZaRLO0/img.gif)

병합 정렬은 배열을 작은 단위로 쪼개어 정렬한 결과를 합치면서 전체를 정렬하는 **분할 정복(divide and conquer)** 방식입니다.

- 배열을 왼쪽 절반, 오른쪽 절반으로 분할하며 최소 단위로 쪼갠 후 정렬을 진행합니다.
- 쪼갠 영역들(이미 정렬이 되어 있습니다)을 차례대로 두개씩 병합(merge)합니다.

빠른 정렬로 분류되며, 퀵 정렬과 함께 많이 언급되는 정렬 방식입니다.

```jsx
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
```

### **⏱ 시간 복잡도**

- **최선, 평균, 최악 모두 O(nlogn)**입니다.
- 분할할 때 걸리는 시간은 O(n), 병합에 걸리는 시간은 O(n), 그리고 레벨의 수가 O(logn)이므로 전체 레벨의 병합에 걸리는 총시간은 O(nlogn)입니다.

### **👍 장점**

- 항상 일정한 시간 복잡도 O(nlogn)를 가집니다.
- **Stable** 정렬입니다.

### **👎 단점**

- 정렬을 하는 배열외의 추가적인 임시 배열 (추가적인 메모리)가 필요합니다.
- 정렬하고자 하는 배열의 크기만큼의 추가적인 크기가 요구되기 때문에 **Not In-place** 정렬입니다.

**❗️ Linked List의 정렬에 사용하면 효율적입니다.**

- 병합 정렬은 순차적인 비교를 진행하기 때문입니다.
- 반대로, 퀵 정렬은 순차 접근이 아닌 임의 접근이기 때문에 Linked List 정렬에는 비효율적입니다.

---

출처

[https://east-star.tistory.com/10](https://east-star.tistory.com/10)
