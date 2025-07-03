public class str3 {
    public static void main(String[] args) {
     //aa3b12c4d6
     String str = "a3b12c4d6";
     
       StringBuilder s1= new StringBuilder();
       StringBuilder result= new StringBuilder();
       
       s1.append(str);
       int i=0;
      while(i<s1.length())
      {
         StringBuilder cha = new StringBuilder();
        while(i<s1.length()&&Character.isAlphabetic(s1.charAt(i))){ 
         cha.append(s1.charAt(i));
         i++;}
      StringBuilder count = new StringBuilder();
         while(i<s1.length()&&Character.isDigit(s1.charAt(i))){
            count.append(s1.charAt(i));
            i++;
         }
      for (int j = 0; j <Integer.parseInt(count.toString()); j++) {
          result.append(cha+" ");
      }
   result.append("\n");
   }
   System.out.println(result);
   }

}
