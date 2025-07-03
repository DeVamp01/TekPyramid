package NewJava;

public class EncryptedWord {
    public static void main(String[] args) {
        StringBuilder s1=new StringBuilder("Hello, World!");

        
        for (int i = 0; i <s1.length(); i++) {
        if(!Character.isAlphabetic(s1.charAt(i))&&s1.charAt(i)!=' '&&!Character.isDigit(s1.charAt(i))){
            s1.deleteCharAt(i);
        }    
        }
        String s2=new String(s1);
        String[] sa=s2.split(" ");
        for (int i = 0; i <sa.length; i++) {

            char[] a=sa[i].toCharArray();
            for (int j =a.length-1;j>=0; j--) {
                a[j]+=3;
                System.out.print(a[j]);
                
            }
            System.out.print(" ");
        }
        

    }   
}
