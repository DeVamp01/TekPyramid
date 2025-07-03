public class Prime {
    public static void main(String[] args) {
        int n=29;
        
        for (int i = 2; i <=n; i++) {
            if(isPrime(i))
            System.out.print(i+" ");
        }
    }
    public static boolean isPrime(int num){
        if(num<=1)
        return false;

        for(int j =2; j <Math.sqrt(num); j++)if(num%j==0) return false;
        return true;
    }
}
