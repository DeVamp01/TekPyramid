
import java.util.Arrays;

class  m1{
    public static void main(String[] args) {
        int[] a= {0,3,1,5,6,8,9};
        int c=0;
        Arrays.sort(a);
        for (int i=0;i<a.length;i++) {
            if(a[i]!=c){
                
                System.out.println(c);
                i--;
                
            }
            c++;
        }
    }
}