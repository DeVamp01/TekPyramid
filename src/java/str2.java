

public class str2 {
    //char occurance in string

    public static void main(String[] args) {
        
        String s1 ="aaabbaac";
        char[] a=s1.toCharArray();
        int count =1;
        for (int i = 0; i <a.length-1; i++) {
            
                if(a[i]==a[i=1]){
                    
                    count++;
                    
                }
                else 
                {System.out.println(a[i]+":"+count);
                count=1;
                
            }
            
                
            
            
        }
            System.out.println(a[a.length-1]+":"+ count);
        
    }
}

