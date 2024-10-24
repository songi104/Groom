package sec05.chap02.Ex02;

public class IntArrayInfo {
    int count;
    int max;
    int min;
    int sum;
    double average;

    IntArrayInfo(int[] nums) {
        count = nums.length;
        max = nums[0];
        min = nums[0];

        for (int num: nums) {
            max = max < num? num : max;
            min = min < num? min : num;
            sum += num;
        }

        average = (double) sum / count;
    }


}
