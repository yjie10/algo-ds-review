// Brute Force

function twoSumBruteForce(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    let numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
};

// Optimal

function twoSumOptimal(nums, target) {
  const numsHash = {};
  for (let p1 = 0; p1 < nums.length; p1++) {
    let numberToFind = target - nums[p1];
    if (numsHash[nums[p1]] || numsHash[nums[p1]] === 0) {
      return [numsHash[nums[p1]], p1];
    } else {
      numsHash[numberToFind] = p1;
    }
  }
  return null;
}

// ZTM

function twoSumOptimalZTM(nums, target) {
  const numsHash = {};

  for (let p = 0; p < nums.length; p++) {
    const currentHashVal = numsHash[nums[p]];
    if (currentHashVal >= 0) {
      return [currentHashVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsHash[numberToFind] = p;
    }
  }
  return null;
}

/* Tests

1.[1, 3, 7, 9, 2] target: 11 | [3, 4];
2.[] target: 1 | null;
3.[1] target: 1 | null;
4.[1, 3, 7, 9, 2] target: 25 | null;
5.[1, 6] target: 7 | [0, 1];

*/

// console.log(twoSumBruteForce([1, 3, 7, 9, 2], 11));
// console.log(twoSumBruteForce([], 1));
// console.log(twoSumBruteForce([1], 1));
// console.log(twoSumBruteForce([1, 3, 7, 9, 2], 25));
// console.log(twoSumBruteForce([1, 6], 7));

// console.log(twoSumOptimal([1, 3, 7, 9, 2], 11));
// console.log(twoSumOptimal([], 1));
// console.log(twoSumOptimal([1], 1));
// console.log(twoSumOptimal([1, 3, 7, 9, 2], 25));
// console.log(twoSumOptimal([1, 6], 7));