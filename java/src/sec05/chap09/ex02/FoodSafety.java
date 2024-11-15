package sec05.chap09.ex02;

public interface FoodSafety {
    static void announcement() {
        System.out.println("식품안전 관련 공지");
    }

    // default로 인해 class에서 구현 따로 안 해도 됨.
    default void regularInspection() {
        System.out.println("정기 체크");
    }

    void cleanKitchen();
    void employeeEducation();
}