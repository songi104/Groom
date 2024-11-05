package sec05.chap04.ex02;
import sec05.chap04.ex01.SmartPhone;

public class Main {
    public static void main(String[] args) {
        Button btn1 = new Button('1', 1);
        // Button.mode = "OCEAN"; // 불가
        Button.switchMode();

        //btn1.space = 3;
        btn1.setSpace(3);
        btn1.setSpace(-1);

        // char button1Print = btn1.print;
        String btn1Info = btn1.getButtonInfo();
        System.out.println(btn1Info);
}}
