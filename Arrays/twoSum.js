var twoSum = (nums, target) => {        
        
    // Brute Force Approach 1

// let a = [-1,-1];
// for(let i=0;i<nums.length-1;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]+nums[j]==target){
//             a[0]=i;
//             a[1]=j;
//             break;
//         }
//     }
// }
// return a;

// <<-------------------------Break--------------------------->>
// <<-------------------------Break--------------------------->>

        // Brute Force Approach 2
        
// let a = [-1,-1]
// for(let left=0; left<nums.length; left++){
//     for(let right=left+1; right<nums.length; right++){
//         numberToFind = target-nums[left]; 
//         if(nums[right] === numberToFind){
//             a[0]=left;
//             a[1]=right;
//         }
//     }
// }
// return a;

// <<-------------------------Break--------------------------->>
// <<-------------------------Break--------------------------->>

        // Optimized approach using HashMap

const numsMap = {};
for(let p =0; p<nums.length; p++)
{
    const currentMapVal = numsMap[nums[p]];
    if(currentMapVal >=0) {
        return [currentMapVal,p];
    } else {
        const numToFind = target - nums[p];
        numsMap[numToFind] = p;
    }
}
return null
};

console.log(twoSum([2,7,11,15],9))