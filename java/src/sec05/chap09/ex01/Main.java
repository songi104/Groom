package sec05.chap09.ex01;

import sec05.chap06.ex01.Button;
import sec05.chap06.ex01.ShutDownButton;
import sec05.chap06.ex01.ToggleButton;

public class Main {
    public static void main(String[] args) {
        PolarBear pb = new PolarBear();
        Mammal mm = pb;
        Hunter ht = pb;

        GlidingLizard glidingLizard = new GlidingLizard();
        Eagle eagle = new Eagle();

        Hunter[] hunters = {
                pb, glidingLizard, eagle
        };

        for (Hunter hunter: hunters) {
            hunter.hunt();
        }

    }

}
