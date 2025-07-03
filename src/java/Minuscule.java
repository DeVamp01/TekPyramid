import java.util.ArrayList;
import java.util.List;

public class Minuscule {
    public static void main(String[] args) {
        String s1="abcabcdbbgac";
        
        int largest=0;
        StringBuilder sb =new StringBuilder();
        
        for (int i = 0; i <s1.length()-1; i++) {
            List<Character> li= new ArrayList<>();
            li.add(s1.charAt(i));
            for (int j = i+1; j <s1.length(); j++) {
                if(!li.contains(s1.charAt(j)))li.add(s1.charAt(j));
                else break;
            }
            if(largest<li.size()){
            largest=Math.max(li.size(),largest);
            sb.replace(0, sb.length(), li.toString());
            }
        }
    System.out.println("length of largest substring:"+largest+" "+sb);}
}
