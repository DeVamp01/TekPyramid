public class SubstrPro1 {
public static void main(String[] args)
{
    
    String s="abcdaghijfa";   
    System.out.println(solve(s));
}
public static int solve(String s){
    int count =1,n=0;
    for (int i = 0; i<s.length()-1; i++) {
        if(count>n){
            n=count;
        count=0;}
        for (int j = i+1; j<s.length(); j++) {
            if((s.charAt(i)==s.charAt(j))){
                System.out.print(s.substring(i, j)+" ");
                n=count;
            
        }
        else{
            count++;
        }
    }
}
return n;
}}
