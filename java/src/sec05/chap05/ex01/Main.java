package sec05.chap05.ex01;

public class Main {
    public static void main(String[] args) {
    YalcoChickenDT s1 = new YalcoChickenDT(108, "철원");
    s1.takeHallOrder();
    s1.takeDTOrder();
    s1.setDriveThruOpen(false);
    s1.takeDTOrder();
}}
