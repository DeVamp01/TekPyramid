import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
public class Largest3{

    public static void main(String[] args) {
        int[] numbers = {12, 35, 1, 10, 34, 1};
        System.out.println("The 3rd largest number is: " + findThirdLargest(numbers));
    }
    public static Object findThirdLargest(int[] arr) {
        // Use TreeSet to store unique numbers in sorted order
        Set<Integer> n1 = new TreeSet<>();
        for (int num : arr) {
            n1.add(num);
        }
        
        // Check if there are at least 3 unique numbers
        if (n1.size() < 3) {
            throw new IllegalArgumentException("Array must contain at least 3 unique numbers.");
        }
        //Integer[] n2=n1.toArray(new Integer[0]);
        List li=new ArrayList(n1);
        System.out.println(li);
        // Get the 3rd largest number
        // The 3rd largest is the 3rd last element in the sorted set
        return li.get(li.size()-3);
    }




}
