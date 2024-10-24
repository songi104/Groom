package sec04.chap07;


import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        while (sc.hasNext()) {
//            int repeatCnt = sc.nextInt();
//            for (int i = 0; i < repeatCnt; i++) {
//                System.out.println("hey");
//            }
//            System.out.println("");
//        }
//        sc.close();

        String[] strInputs = new String[5];
        for (int i =0; i<strInputs.length; i++){
            strInputs[i] = sc.nextLine();
        }
        sc.close();

        for (String str: strInputs) {
            System.out.println(str);
        }
    }
}
