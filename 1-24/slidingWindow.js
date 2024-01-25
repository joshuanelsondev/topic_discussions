
function maximumSubarraySum(nums, k) {
    if (nums.length < k) return 0;
    let maxSum = 0;
    let tempSum = 0;
    let duplicates = 0;
    let numFrequency = {};
    
    // Create the subArr and check for duplicates
    for (let i = 0; i< k; i++) {

        if (numFrequency[nums[i]]) {
            duplicates++;
            numFrequency[nums[i]]++;
        } else {
            numFrequency[nums[i]] = 1;
        }

        tempSum += nums[i];
        
    }

    if (duplicates === 0) {
        maxSum = tempSum;
    }

    let pointer1 = 0;
    let pointer2 = k;

    while (pointer2 < nums.length) {

        if (numFrequency[nums[pointer2]]) {
            duplicates++
            numFrequency[nums[pointer2]]++
        } else {
            numFrequency[nums[pointer2]] = 1;
        }

        tempSum = tempSum - nums[pointer1] + nums[pointer2];
        numFrequency[nums[pointer1]]--;

        if (numFrequency[nums[pointer1]] > 0) {
            duplicates--;
        }

        if (duplicates === 0) {
            maxSum = Math.max(tempSum, maxSum); 
        }

        pointer1++;
        pointer2++
    }

    return maxSum;
};

console.log(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10]), 3)
console.log(maximumSubarraySum([4,4,4], 3))
console.log(maximumSubarraySum([1,3,2,4,5,6,9,9,9], 3))