
public class Multiarray90rotaionPrime {
    public static void main(String[] args) {
       int[][] a={
        {1,2,3},
        {4,5,6},
        {7,8,9}  };
    int[][] b=new int[3][3];
       //System.out.println(Arrays.toString(a[0]));
       for (int i = 0; i <a.length;i++) {
           for (int j = 0,k=a.length-1; j <a[i].length;k--, j++) {
               b[i][j]=a[k][i];
           }
           
       }

       
int sum=0;
       for (int i = 0; i <b.length; i++) {
        for (int j =0; j <b[i].length; j++) {
           sum+=isPrime(b[i][j]);
           
        }   
             
       }
       System.out.println(sum);

    
    }
    public static int isPrime(int a){
        if(a<=2)return 0;

        for(int j =2; j <a/2+1; j++)if(a%j==0) return 0;
        return a;

    }
}
