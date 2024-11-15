package sec05.chap07;

public class YalcoChicken {
    protected static final String CREED = "우리의 튀김옷은 얄팍";
    private final int no;
    public String name;

    //  ⭐️ 필수 - no가 final이고 초기화되지 않았으므로
    public YalcoChicken(int no, String name) {
        this.no = no;
        this.name = name;
    }

//    public void changeFinalFields () {
//        // ⚠️ 불가
//        this.no++;
//    }

    public final void fryChicken () {
        // 이 녀석을 오버라이드할 수 없어요
        System.out.println("염지, 반죽입히기, 튀김");
    }
}