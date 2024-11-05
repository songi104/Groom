package sec05.chap03.Ex03;

public class Button {
    static String mode = "Light";
    static void switchMode() {
        mode = mode.equals("Light")? "Dark" : "Light";
    }
    char print;
    int space;

    Button (char print, int space) {
        this.print = print;
        this.space = space;
    }
    void place() {
        System.out.printf(
                "표시: %c, 공간: %d, 모드: %s%n",
                print, space, mode
        );
    }
}
