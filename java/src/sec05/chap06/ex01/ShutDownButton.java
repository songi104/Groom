package sec05.chap06.ex01;

public class ShutDownButton extends Button {
    public ShutDownButton() {
        super("ShutDown");
    }

    @Override
    // super를 하지 않았기 때문에 아예 새로운 func
    public void func() {
        // super.func();
        System.out.println("프로그램 종료");
    }
}
