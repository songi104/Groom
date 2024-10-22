package sec03.chap1;

public class Ex1 {
    public static void main(String[] args) {
        byte _1b_byte = 1;
        short _2b_short = 2;
        int _4b_int = 3; // ⭐️ 일반적으로 널리 사용
        long _8b_long = 4;

        //  큰 자료형에 작은 자료형의 값을 넣을 수 있음
        //  💡 묵시적(암시적) 형변환
        _2b_short = _1b_byte;


    }
}
