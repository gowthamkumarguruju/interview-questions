def two_pointer(nums, target):
    left, right = 0, len(nums) - 1

    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            return True
        if curr_sum < target:
            left += 1
        else:
            right -= 1
    return False


numbers = [1, 3, 4, 6, 8, 10, 13]
targetValue = 13
print("twoPointer:", two_pointer(numbers, targetValue))