package NewJava;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnagramGrouping {
    public static void main(String[] args) {
        String[] s={"eat","tea","tan","ate","ant","cat"};
        Map<String , List<String>> mp=new HashMap<>(); 
        for(int i = 0; i <s.length; i++) {
            char[] c=s[i].toCharArray();
            String s1=new String(c);
            Arrays.sort(c);
            String s2=new String(c);
            mp.putIfAbsent(s2, new ArrayList<>());
            mp.get(s2).add(s1);

    /*Alternate method without using putIfAbsent Method
            if(!mp.containsKey(s2)){
                mp.put(s2, new ArrayList<>());
            }
            mp.get(s2).add(s1);  */

        }
        System.out.println(mp.values());
    }
}
