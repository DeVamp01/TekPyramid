public class Str1 {
    static String s2=""; 
    public static void main(String[] args) {
        String a="arunkumar";
        int b=a.length()-1;
        System.out.println(solve(a,b));
    }
    
    public static String solve(String a,int b){
        if(b>=0){
            s2=s2+a.charAt(b);
            b--;
            solve(a, b);
        }
      return s2;
    }
}
