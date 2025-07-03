public class ArrQuestion1 {
    
    public static void main(String[] args) {
        int[] a={1,1,3,2,3,1,1,1};
            solve(a);
        
            
        
    }
    public static void solve(int[] a){
        int count=0;
        for (int i = 0; i <a.length-1; i++) {
            if(a[i]==1&&a[i+1]==1){
                count++;
            }
        }
        System.out.println(count);
    }

}
