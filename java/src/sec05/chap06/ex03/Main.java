package sec05.chap06.ex03;


import sec05.chap06.ex01.ShutDownButton;
import sec05.chap06.ex02.YalcoChicken;

public class Main {
    public static void main(String[] args) {
        Object obj1 = new Object();

        Object obj2 = new YalcoChicken(3, "판교");
        Object obj3 = new ShutDownButton();

        // 원시 자료형들도 object의 인스턴스
        Object obj4 = true;
        Object obj5 = 1;
        Object obj6 = "Hello";

        // 모든 자료형을 포함할 수 있는 배열
        Object[] objs = {
                1, false, 3.45, '가', "안녕하세요", new ShutDownButton()
        };

        for (Object obj : objs) {
            System.out.println(obj);
        }
    }
}