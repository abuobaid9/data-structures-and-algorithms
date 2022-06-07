# Insert to Middle of an Array

<!-- Description of the challenge -->

```js
function insertShiftArray(arr) {
  let newArr = [];
  let mid = arr.length / 2;
  for (let i = 0; i < arr.length; i++) {
    if (i < mid) {
      newArr.push(arr[i]);
    } else if (i == mid) {
      newArr.push(x);
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

## Whiteboard Process

<!-- Embedded whiteboard image -->

![middleArray](<./Screenshot%20(60).png>)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

- Nested if inside for loop because its familiar to me.

- Big O time is : O(n) / space : O(n)
