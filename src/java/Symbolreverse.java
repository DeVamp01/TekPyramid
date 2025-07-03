import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Symbolreverse {
  public static void main(String[] args) {
    
      List<Character> li=new ArrayList<>();
      List<Integer> sc=new ArrayList<>();
    String s1="hi#how@are";
    for(int i=0;i<s1.length();i++){
      if(!Character.isAlphabetic(s1.charAt(i)))sc.add(i);
      if(Character.isAlphabetic(s1.charAt(i)))li.add(s1.charAt(i));
      
    }
    
    Collections.reverse(li);
  for (int i = 0; i <s1.length(); i++) {
      if(sc.contains(i))
        li.add(i,s1.charAt(i));
  }
  System.out.println(li);
}  
}
