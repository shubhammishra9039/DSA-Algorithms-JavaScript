// 99. Find all even numbers in an array.

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const arr: number[] = [1, 2, 3, 4, 5, 6];

const findEvenArray = (arr: number[]): void => {
  let evenArray: number[] = [];
  let index: number = 0;

  for (let i: number = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
      evenArray[index] = arr[i];
      index++;
    }
  }

  console.log(evenArray);
};

findEvenArray(arr);
