package sec05.chap03.Ex03;

public class Main {
    public static void main(String[] args) {
        Button button1 = new Button('1', 1);
        Button button2 = new Button('+', 3);
        Button button3 = new Button('C', 2);

        Button[] buttons = {button1, button2, button3};
        System.out.println(Button.mode);
        for (Button btn:buttons) {
            btn.place();
            Button.switchMode();
        }
    }
}
