package sec05.chap08.ex01;

public class Main {
    public static void main(String[] args) {
        //YalcoGroup yalcoGroup = new YalcoGroup(1, "서울");

        YalcoChicken ych1 = new YalcoChicken("판교");
        YalcoChicken ych2 = new YalcoChicken("강남");

        YalcoCafe ycf1 = new YalcoCafe("울릉", true);
        YalcoCafe ycf2 = new YalcoCafe("강릉", false);

        YalcoGroup[] ycStores = {
                ych1, ych2, ycf1, ycf2
        };

        for (YalcoGroup ycStore:ycStores) {
            ycStore.takeOrder();
        }

    }
}
