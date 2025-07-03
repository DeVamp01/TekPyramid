class rough {
    public static void main(String []arg) {
      String s="aaabbbccc";
        char[] s1=s.toCharArray();
      for (int i = 0; i <s1.length; i++) {
        if(s1[i]==' ')
        continue;
          int count =1;
          for (int j = i+1; j <s1.length; j++) {
              if(s1[i]==s1[j]){
                count++;
                s1[j]=' ';
              }

          }
          System.out.println(s1[i]+ " "+count);
      }
    }
}
