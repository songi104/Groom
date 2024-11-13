package sec05.chap08.ex01;

import sec05.chap06.ex01.Button;

public class ShutDownButton extends Button {
    public ShutDownButton() {
        super("ShutDown");
    }

    @Override
    public void func() {
        System.out.println("프로그램 종료");
    }
}
