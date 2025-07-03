public class EmpDriver {
    public static void main(String[] args) {
        EmpEncapsulation e1= new EmpEncapsulation("dev", 'M', 23, 40000, 9001);
        e1.getSal(9001);
        System.out.println("emp sal:"+e1.sal);
        e1.setSal(9000, 9001);
        System.out.println("Employee sal:"+e1.sal);
    }
}
