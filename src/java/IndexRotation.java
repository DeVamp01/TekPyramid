
import java.util.Arrays;



public class IndexRotation {
    public static void main(String[] args) {
        int[] a={10,20,30,40,50,60,70};
        int r=3,ind=3;
        int[] res=solve(a,r,ind);
       System.out.println( Arrays.toString(res));

    }
    public static int[] solve(int[] a, int r,int ind){
       int temp=0;
       
        int d=r+ind;
        for (int i=d; i>ind; i--) {
            if(i==d){
                temp=a[i];
            }
            a[i]=a[i-1];
            
        }
        a[ind]=temp;
return a;
}
    }
