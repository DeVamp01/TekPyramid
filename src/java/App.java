
public class App {
    public static void main(String[] args) throws Exception {
       int i=0,j=0,n=10;
       
        for(i=0;i<n;i++){
            System.out.print("  ");
            for(j=0;j<n;j++){
                if ((i==0||i==n-1)||(j==0||j==n-1)){ 
                System.out.print("* ");
                Thread.sleep(50);
            }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}