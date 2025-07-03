import java.util.Scanner;
public class Static {

 public static void main(String[] anna)throws Exception
 {
     Scanner sc= new Scanner(System.in);
    int st=sc.nextInt();
    int end=sc.nextInt();
for(int i=st;i<=end;i++){

    if (i%3==0 && i%5==0) {
        System.out.println("FIZZBUZZ");
    }
    else if(i%5==0){
        System.out.println("buzz");
    }
    else if(i%3==0){
        System.out.println("fizz");
    }
    
}



}
}
