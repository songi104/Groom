package sec05.chap10.ex03;

public class Setting {
    // 이 클래스를 싱글턴으로 만들기

    private static Setting setting;
    private Setting () {}
    public static Setting getInstance() {
        if (setting == null) {
            setting = new Setting();
        }
        return setting;
    }

    private int vol = 5;
    public int getVolume() {
        return vol;
    }
    public void incVol() {vol++;}
    public void decVol() {vol--;}
}
