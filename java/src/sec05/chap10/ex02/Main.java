package sec05.chap10.ex02;

public class Main {
    public static void main(String[] args) {
        Setting setting = new Setting();

        // 방법 1: 생성자로 주입
        Tab tab1 = new Tab(setting);
        Tab tab2 = new Tab(setting);

        // 방법 2: setter 사용
        Tab tab3 = new Tab();
        tab3.setSetting(setting);

        System.out.println(tab1.getSetting().getVolume());
        System.out.println("\n- - - \n");

        tab1.getSetting().incVol();
        tab1.getSetting().incVol();
        System.out.println("tab1: "+tab1.getSetting().getVolume());
        System.out.println("tab2: "+tab2.getSetting().getVolume());
        System.out.println("tab3: "+tab3.getSetting().getVolume());
    }

}
