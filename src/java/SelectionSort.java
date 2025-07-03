
import java.util.Arrays;

public class SelectionSort {

    public static void main(String[] args) {
    int[] a={8,3,1,5,6,4,2,9,7,0};
    
    for(int i=0;i<a.length-1;i++)
    {  int small=i;
        for (int j =i+1; j <a.length; j++) {
            if(a[j]<a[small])
            small=j;
        }
        int temp=a[i];
        a[i]=a[small];
        a[small]=temp;


    }
System.out.println(Arrays.toString(a));

    }


}
