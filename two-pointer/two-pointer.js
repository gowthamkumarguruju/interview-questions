function twoPointer(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const currSum = nums[left] + nums[right];
        if (currSum === target) {
            return true;
        }
        if (currSum < target) {
            left++
        } else {
            right--
        }
    }
    return false
}

// complexity o(n)

function twoPointer2(nums, target) {


    for (i=0; i < nums.length; i++ ) {
        for (j=i+1; j<nums.length; j++) {
            const currSum = nums[i] + nums[j]
            if (currSum === target) {
                return true;
            }
        }
    }
    return false;
}

const nums = [1, 3, 4, 6, 8, 10, 13]
const target = 13

// other complexity o(n^2)

console.log("twoPointer:", twoPointer(nums, target));
console.log("twoPointer2:", twoPointer2(nums, target));