var maxArea = (height) => {
  // Brute Force Approach
  //   Time Complexity : O(n^2);
  //   Space Complexity : O(1);

  //   let area = 0;
  //   if (height.length === 0 || height.length === 1) {
  //     return 0;
  //   }
  //   for (let a = 0; a < height.length; a++) {
  //     for (let b = a + 1; b < height.length; b++) {
  //       if (Math.min(height[a], height[b]) * (b - a) > area) {
  //         area = Math.min(height[a], height[b]) * (b - a);
  //       }
  //     }
  //   }
  //   return area;

  // Optimized using While Loop

  //   Time Complexity : O(n);
  //   Space Complexity : O(1);

  // let maxArea = 0;
  //     let left = 0;
  //     let right = height.length - 1;

  //     while (left < right) {
  //         const minHeight = Math.min(height[left], height[right]);
  //         const width = right - left;
  //         const currentArea = minHeight * width;
  //         maxArea = Math.max(maxArea, currentArea);

  //         if (height[left] < height[right]) {
  //             left++;
  //         } else {
  //             right--;
  //         }
  //     }

  //     return maxArea;

  // Optimized using For Loop

  let maxArea = 0;
  const n = height.length;

  for (let left = 0, right = n - 1; left < right; ) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const currentArea = minHeight * width;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
