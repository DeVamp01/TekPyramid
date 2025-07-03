package NewJava;

public class String1 {
    public static void main(String[] args) {
        String s="arun";
        int s1=s.length();
        for (int i = 0; i <s1; i++,s1--) {
            System.out.println(s.substring(i,s1));
            
        }
        
    }
}
