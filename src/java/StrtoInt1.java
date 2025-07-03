public class StrtoInt1 {
public static void main(String[] args) {
    String a="one";
    System.out.println(solve(a));
    
}
    public static int solve(String a){
        switch(a){
            case "one" : {
                return 1;
        }
            case "two" : {
                return 2;
        }
            default : {
                System.out.println("enter 1or 2");
                return 0;
        }
        }
        
    }
}
