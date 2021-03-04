const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let largeNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  console.log(largeNum);
}

function biggestNumberInArray2(arr) {
  let largeNum = 0;
  for (let index of arr) {
    if (index > largeNum) {
      largeNum = index;
    }
  }
  return largeNum;
}

function biggestNumberInArray3(arr) {
  let largeNum = 0;
  arr.forEach( index => {
    if (index > largeNum) {
      largeNum = index;
    }
  })
  return largeNum;
}
