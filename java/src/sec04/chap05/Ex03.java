package sec04.chap05;

public class Ex03 {
    public static void main(String[] args) {
        sayHello();
        System.out.println(getCount());
        System.out.println(getCount());
        System.out.println(getCount());
        int count1 = getCount();
        int count2 = getCount();
        System.out.printf("%d %d", count1, count2);
    }

    static int count = 0;
    static int getCount() {
        System.out.println("count 합니다");
        return ++count;
    }

    static void sayHello() {
        System.out.println("Hello World!");
    }
}
