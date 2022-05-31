# Reverse an Array
<!-- Description of the challenge -->
```js
function Reverse(arr){
   let newArr=[];
    for(let i=arr.length-1;i>0;i--){
        newArr.push(arr[i]);

    }
    newArr.push(arr[0]);
    return newArr ;
}
```

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Reverse](./array-reverse/array-reverse.png)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
- looping because its familiar to me

- Big O time is : O(n) / space : O(1)

---
---

# Insert to Middle of an Array
<!-- Description of the challenge -->
```js
function insertShiftArray(arr){
   let newArr=[];
   let mid =arr.length/2
    for(let i=0;i<arr.length;i++){
        if (i < mid){
        newArr.push(arr[i]);}
        else if (i == mid){
            newArr.push(x);
            newArr.push(arr[i]);}
        else{
             newArr.push(arr[i]);}
    }
    return newArr ;
}
```

## Whiteboard Process

<!-- Embedded whiteboard image -->
![middleArray](./array-insert-shift/Screenshot%20(60).png)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

- Nested if inside for loop because its familiar to me.

- Big O time is : O(n) / space : O(n)
