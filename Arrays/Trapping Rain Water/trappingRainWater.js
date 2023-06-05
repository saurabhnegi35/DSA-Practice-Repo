var trap = function (height) {
  // Brute Force Approach
  // Time Complexity: O(N^2)
  // Space Complexity: O(1)

  let totalWater = 0;
  for (let p = 0; p < height.length; p++) {
    let leftP = p;
    let rightP = p;
    let maxLeft = 0;
    let maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - height[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
