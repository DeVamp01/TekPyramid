package NewJava;

public class FirstRepeatingCharacter {
    public static void main(String[] args) {
        String s1="success";
        char c=' ';
        for (int i = 0; i < s1.length()-1; i++) {
            for (int j = i+1; j < s1.length(); j++) {
                if(s1.charAt(i)==s1.charAt(j)){
                   c=' ';
                    break;
                }
                else
                    c=s1.charAt(i);
            }
            if(c!=' ')
            {
                System.out.println(c);
                System.exit(23);
                
            }
        }
    }
}
