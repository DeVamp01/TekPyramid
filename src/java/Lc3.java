public class Lc3 {
 public static void main(String[] args) {
    int count=0;
     int[] arr={12,6,444,9090};
     for (int i = 0; i < arr.length; i++) {
         int len=(int) Math.log10(arr[i])+1;
         if(len%2==0){
            count++;
         }
     }
     System.err.println(count);
 }
}
