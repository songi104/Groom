package sec05.chap06.ex01;

public class Main {
    public static void main(String[] args) {
        Button btn1 = new Button("Enter");
        Button btn2 = new ShutDownButton();
        Button btn3 = new ToggleButton("Caps Lock", false);

        Button[] btns = {btn1, btn2, btn3};
        for (Button btn:btns) {
            btn.func();
        }

        // true
        boolean tpCheck1 = btn1 instanceof Button;
        boolean tpCheck2 = btn2 instanceof Button;
        boolean tpCheck3 = btn3 instanceof Button;

        // false
        boolean tpCheck4 = btn1 instanceof ShutDownButton;

        // 컴파일 에러
        // boolean tpCheck5 = toggleButton instanceof ShutdownButton;
    }

}
