
import java.util.ArrayList;
import java.util.List;

public class ZeroToLast {
    public static void main(String[] args) {
        System.out.println("starts here");
        int[] arr={0,1,5,0,3,5,0,2};
        List<Integer> li =new ArrayList<>();
     for(Integer e:arr){
            li.add(e);
        }  
        int count=0;
        for (int i =0; i <li.size(); i++) {
            if(li.get(i)==0){
                li.remove(i);
                count++;
            }

        }
       for (int j =0; j <count; j++) {
          li.add(0);
        }
        System.out.println(count);
        System.out.println(li);
    }
    
}
