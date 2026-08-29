function isTwoPointer(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currSum = nums[left] + nums[right];
        if (currSum === target) {
            return true;
        }
        if (currSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}


const numbers = [1, 3, 4, 6, 8, 10, 13]
const targetValue = 13;
console.log("twoPointer:", isTwoPointer(numbers, targetValue));