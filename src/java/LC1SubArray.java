

    public class LC1SubArray {
            public static int   countSubarrays(int[] nums) {
                
                int sa[] = new int[3];
                int j=0;
                if (nums.length>=3) {
                    for(int i=nums.length-3;i<=nums.length-1;i++){
                        sa[j]=nums[i];
                        j++;
                    }
                    if(sa[0]+sa[2]==sa[1]/2)
                    return 1;
                    else
                    return 0;
                }
                else return 0;
                
            }
            public static void main(String[] args) {
                int nums[]={1,2,1,4,1};
               System.out.println(countSubarrays(nums));
            }
        }

