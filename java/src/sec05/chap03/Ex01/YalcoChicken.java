package sec05.chap03.Ex01;

public class YalcoChicken {
    static String brand = "얄코치킨";
    static int cnt = 1;
    static String contact() {
        return "%s입니다. 무엇을 도와드릴까요?".formatted(brand);
    }

    String name;
    int no;

    public YalcoChicken(String name) {
        this.name = name;
        this.no = cnt ++;
    }
    String intro() {
        return "안녕하세요. %s %d호 %s점입니다."
                .formatted(brand, this.no, name);
    }
}
