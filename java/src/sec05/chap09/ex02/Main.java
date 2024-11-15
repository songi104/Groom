package sec05.chap09.ex02;

public class Main {
    public static void main(String[] args) {
        FoodSafety.announcement();

        YalcoChicken st = new YalcoChicken();

        // 불가: st.announcement();
        st.regularInspection();
        st.cleanKitchen();
        st.employeeEducation();
    }
}
