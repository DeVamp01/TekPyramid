
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class new1 {
    public static void main(String[] args) {
       int[] a={1,2,3,4,5,6,7};
       List<Integer> s1=new  ArrayList<>();
       for (Integer i : a) {
        s1.add(i);
       }
       Collections.reverse(s1);
       System.out.println(s1);
    }
}
