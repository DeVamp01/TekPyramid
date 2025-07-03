import java.util.LinkedList;
import java.util.List;

class median {
public static void main(String[] args) {
    int[] a={1,2};
    int[] b={3,4};
    System.out.println("Median is :"+solve(a,b));
    }
    public static double solve(int[]a, int[] b){
        List<Integer> li=new LinkedList();
        double c=0;
        for (Integer in : a) {
            li.add(in);
        }
        for (Integer in : b) {
            li.add(in);
        }
        
        if(li.size()%2==0){
            c=(double)(li.get(li.size()/2)+li.get(li.size()/2-1))/2;
        }
        else
        c=li.get(li.size()/2);
        return c;
    }
}
