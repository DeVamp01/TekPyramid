public class student {
public static void main(String[] args) {
        String s="I Can do this Easily";
        String[] s1=s.split(" ");
        for (int i =0; i <s1.length; i++) {
           String a= s1[i].substring(0,1);
           s1[i]=s1[i].substring(1);
            if(a.charAt(0)>='a'&&a.charAt(0)<='z'){
                System.out.print(a.toUpperCase().concat(s1[i]+" "));
            }
            else
            System.out.print(a.toLowerCase().concat(s1[i]+" "));           
        }        
}






}
