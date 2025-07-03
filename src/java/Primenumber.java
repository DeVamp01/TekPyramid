public class Primenumber {
    public static void main(String[] args) {
        //prime number
        int n=83;
        System.out.println(solve(n));
    }
        public static String solve(int n){
        if(n==0||n==1){
        return "Not a prime number";
        }
        for (int i = 2; i <n/2; i++) {


            
            if(n%i==0)
            return "not a prime number";
        
        }
        return  "prime number";


        }
    

}
