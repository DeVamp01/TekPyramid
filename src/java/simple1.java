public class simple1 {
    public static void main(String[] args) {
        int n=11,m=0;
        for (int i = 0; i <n;   i++) {
            for (int j = 0; j <n; j++) {
                
            if(i==m&&j>=m&&j<n-m)
            System.out.print("* ");
            else
            System.out.print("  ");
            }
            m++;
            System.out.println();
        }
    }
}
