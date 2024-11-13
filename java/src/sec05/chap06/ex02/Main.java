package sec05.chap06.ex02;

public class Main {
    public static void main(String[] args) {
        YalcoChicken[] ycStores = {
                new YalcoChickenDT(3, "판교"),
                new YalcoChicken(1, "LA"),
                new YalcoChicken(10, "철원")
        };

        for (YalcoChicken yc:ycStores) {
            if (yc instanceof YalcoChickenDT) {
                ((YalcoChickenDT)yc).takeDTOrder();
            } else {
                yc.takeHallOrder();
            }
        }

}}
