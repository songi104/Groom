package sec04.chap05;

public class Ex04 {
    public static void main(String[] args) {
        int[] numbers = {1,3,5,7,9};
        double avg = getAverage(numbers);
        System.out.println(avg);

        int[] res = getMaxAndMin(numbers);
        System.out.println(res[0]);
        int maxOfNumbers = getMaxAndMin(numbers)[0];
        int minOfNumbers = getMaxAndMin(numbers)[1];

    }

    static double getAverage (int[] nums) {
        double sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum / nums.length;
    }

    //  자바의 메소드는 하나의 값만 반환 가능
    //  여러 값을 반환하려면 배열 또는 이후 배울 객체를 활용
    static int[] getMaxAndMin (int[] nums) {

        int max = nums[0];
        int min = nums[0];
        for (int num : nums) {
            max = max > num ? max : num;
            min = min < num ? min : num;
        }

            return new int[] {max, min};
		}
}
