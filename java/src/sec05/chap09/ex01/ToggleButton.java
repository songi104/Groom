package sec05.chap09.ex01;

import sec05.chap06.ex01.Button;

public class ToggleButton extends Button {
    private boolean on;

    public ToggleButton(String print, boolean on) {
        super(print);
        this.on = on;
    }

    @Override
    public void func() {
        super.func();
        this.on = !this.on;
        System.out.println(
                "대문자 입력: " + (this.on ? "ON":"OFF")
        );
    }
}
