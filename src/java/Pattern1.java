

public class Pattern1 {
//359 640 578 275 166
 public static void main(String[] args) throws Exception {
    int n=7;
    
     for(int i=0;i<n;i++){
         System.out.print("  ");
         for(int j=0;j<n;j++){
             if (i+j==n-1||i==0||i==n/2||j==n-1||j==0||i==n-1||i==j){ 
             
             System.out.print("* ");
             Thread.sleep(50);
         }
             else{
                 System.out.print("  ");
             }
         }
         System.out.println();
     }
 }}
