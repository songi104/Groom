package sec05.chap07;

public class Main {
    public static void main(String[] args) {
        String ycCreed = YalcoChicken.CREED;
        // YalcoChicken.CREED = "우리 튀김옷 바삭";
        final YalcoChicken store1 = new YalcoChicken(3, "판교");
        //store1 = new YalcoChicken(17, "강남");
        store1.name = "선릉";
    }
}
