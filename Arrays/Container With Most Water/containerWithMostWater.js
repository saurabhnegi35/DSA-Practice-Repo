var maxArea = (height) => {
  // Brute Force Approach

  let area = 0;
  if (height.length === 0 || height.length === 1) {
    return 0;
  }
  for (let a = 0; a < height.length; a++) {
    for (let b = a + 1; b < height.length; b++) {
      if (Math.min(height[a], height[b]) * (b - a) > area) {
        area = Math.min(height[a], height[b]) * (b - a);
      }
    }
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
