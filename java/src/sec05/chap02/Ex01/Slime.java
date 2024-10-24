package sec05.chap02.Ex01;

public class Slime {
    double hp = 50;
    int attack =10;
    double defense = 0.2;

    void attack(Slime enemy) {
        enemy.hp -= this.attack *(1- enemy.defense);
    }
}
