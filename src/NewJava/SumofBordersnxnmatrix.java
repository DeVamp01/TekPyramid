package NewJava;
//multidimensional array sum of the borders 
public class SumofBordersnxnmatrix {
    public static void main(String[] args) {
        int[][] a={                                                 
            {1,2,3},
            {4,5,6},
            {7,8,9},
                    };
        int sum=0;
        //top and bottom except first and last
        for (int i = 1; i <a.length-1; i++) {
            sum+=a[a.length-1][i];
            sum+=a[0][i];
        }
        //left and right 0 to n-1
        for(int j =0; j <a.length; j++) {
            sum+=a[j][0];
            sum+=a[j][a.length-1];
        }
    System.out.println(sum);}
}
