
import java.util.Arrays;
//error

public class LC2 {

    public static  int removeElement(int[] nums, int val) {
        int c=0;
    for (int i = 0; i<nums.length; i++) {
        if(nums[i]!=val){
            nums[c]=nums[i];
           c++; }
        }
        System.out.println(" "+Arrays.toString(nums));
    return c;
    }

    public static void main(String[] args) {
       int[] nums = {0,1,2,2,3,0,4};
       int val=2;
       int k=removeElement(nums,val);
       System.out.println(k+" "+Arrays.toString(nums));
    }
    
    
}

