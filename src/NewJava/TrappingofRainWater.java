package NewJava;

public class TrappingofRainWater {
    public static void main(String[] args) {
        int a[]={4,5,1,2,3,8,2};
        System.out.println(solve(a));

    }
    public static int solve(int[] a){
        int len=a.length;
        int[] left=new int[len];
        int[] right=new int[len];
        int res=0;
        left[0]=a[0];
        for (int i = 1; i <len; i++) {
            left[i]=Math.max(left[i-1],a[i]);
        }
//        System.out.println(Arrays.toString(left));
        right[len-1]=a[len-1];
        for (int i = len-2; i <=0; i++) {
            right[i]=Math.max(right[i+1], a[i]);
        }

        for (int i = 0; i <len; i++) {
            res+=Math.min(left[i],right[i])-a[i];
        }
        
    return res;}
}
