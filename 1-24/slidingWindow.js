
function maximumSubarraySum(nums, k) {
    if (nums.length < k) return 0;
    let maxSum = 0;
    let tempSum = 0;
    // variable to keep track of duplicates
    let duplicates = 0;
    // create obj to monitor each elements occurrence and to keep track of elements that in subArr
    let numFrequency = {};
    // create pointers
    let pointer1 = 0;
    let pointer2 = k;
    
    // Create the subArr and check for duplicates
    for (let i = 0; i< k; i++) {
        
        // Add key/value pair to numFrequency if it doesn't exist else increment
        if (numFrequency[nums[i]]) {
            duplicates++;
            numFrequency[nums[i]]++;
        } else {
            numFrequency[nums[i]] = 1;
        }

        // Add each element to the sum
        tempSum += nums[i];
        
    }

    // check to see if there are any duplicates, if there aren't assign maxSum the value of tempSum
    if (duplicates === 0) {
        maxSum = tempSum;
    }


    // Loop through array as long as pointer2 is less than nums length
    while (pointer2 < nums.length) {
        
        // Update numFrequency obj
        if (numFrequency[nums[pointer2]]) {
            duplicates++
            numFrequency[nums[pointer2]]++
        } else {
            numFrequency[nums[pointer2]] = 1;
        }

        // Subtract first element of subArr and add next element
        tempSum = tempSum - nums[pointer1] + nums[pointer2];
        // Decrement value of the pointer1
        numFrequency[nums[pointer1]]--;

        // check to see if the decremented pointer1 was a duplicate, if so, decrement the duplicates value
        if (numFrequency[nums[pointer1]] > 0) {
            duplicates--;
        }

        // Compare tempSum to maxSum if there aren't any duplicates
        if (duplicates === 0) {
            maxSum = Math.max(tempSum, maxSum); 
        }

        // Increment pointers
        pointer1++;
        pointer2++
    }

    return maxSum;
};

console.log(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10]), 3)
console.log(maximumSubarraySum([4,4,4], 3))
console.log(maximumSubarraySum([1,3,2,4,5,6,9,9,9], 3))