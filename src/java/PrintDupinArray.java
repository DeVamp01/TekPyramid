
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PrintDupinArray {
    public static void main(String[] args) {
        int[] a={1,3,5,6,2,1,7,1,3};
        System.out.println(Arrays.toString(a));
        
                 Arrays.sort(a);           
            List<Integer> li=new ArrayList<>();
            for (int i = 0; i <a.length-1; i++) {
                if(a[i]==a[i+1]&&!li.contains(a[i]))li.add(a[i]); }
            System.out.println(li.toString());
            

        }
    }

