package sec05.chap03.Ex01;

public class Main {
    public static void main(String[] args) {
        String ycBrand = YalcoChicken.brand;
        String ycContact = YalcoChicken.contact();

        YalcoChicken s1 = new YalcoChicken("판교");
        System.out.println(s1.no);
        System.out.println(YalcoChicken.cnt);
        String s1Intro = s1.intro();
        String s1Brand = s1.brand;

    }
}
