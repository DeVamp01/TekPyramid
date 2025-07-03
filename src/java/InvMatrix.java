public class InvMatrix {
    public static void main(String[] args) {
        int[][] a={
            {3,7,1},
            {8,4,9},
            {2,5,6},
        };
        
        int[][] b={
            {3,7,1},
            {8,4,9},
            {2,5,6},
        };
    solve(a,b);
}
        static void solve(int[][] a, int[][] b){
        for(int i=0;i<a.length;i++)
        {   
            for (int j = 0; j < a[i].length; j++) {
                int num=a[i][j], sum=0;
                for (int k = 0; k < b.length; k++) {
                    sum+=num*a[k][i];
                    
                }
                System.out.print(sum+"\t");
            }
            System.out.println();
        }
    }
    }

