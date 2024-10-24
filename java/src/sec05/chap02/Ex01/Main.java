package sec05.chap02.Ex01;

public class Main {
    public static void main(String[] args) {
        Slime s1 = new Slime();
        Slime s2 = new Slime();
        s1.attack(s2);
        System.out.println(s2.hp);
    }
}
