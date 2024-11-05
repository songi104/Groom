package sec05.chap05.ex03;

public class Slime {
    // protected는 public > protected > default
    // protected는 그머더라.. 동일패키지 + 자식클래스
    // default는 only 동일패키지
    protected double hp = 50;
    protected int attack = 8;
    protected double defense = 0.2;

    public void attack(Slime enemy) {
        enemy.hp -= this.attack*(1-enemy.defense);
    }
}
