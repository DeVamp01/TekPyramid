public class StringBuffEXample {
    public static void main(String[] args) {
        StringBuffer s1= new StringBuffer("Hello");
        StringBuffer s2=new StringBuffer();
        s2=s1;
        s1.append("World");
        System.out.println(s2);
        System.out.println(s1);
        
    }
    }
