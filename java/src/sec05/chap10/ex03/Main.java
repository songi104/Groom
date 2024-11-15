package sec05.chap10.ex03;

public class Main {
    public static void main(String[] args) {

        Tab tab1 = new Tab();
        Tab tab2 = new Tab();
        Tab tab3 = new Tab();

        System.out.println(tab1.getSetting().getVolume());
        System.out.println("\n- - - \n");

        tab1.getSetting().incVol();
        tab1.getSetting().incVol();
        System.out.println("tab1: "+tab1.getSetting().getVolume());
        System.out.println("tab2: "+tab2.getSetting().getVolume());
        System.out.println("tab3: "+tab3.getSetting().getVolume());
    }

}
