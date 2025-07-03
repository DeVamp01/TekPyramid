public class EmpEncapsulation {
    String empName;
    char sex;
    int age;
    int sal;
    int empNo;

    public EmpEncapsulation(String empName, char sex, int age, int sal, int empNo) {
        this.empName=empName;
        this.sex=sex;
        this.age=age;
        this.sal=sal;
        this.empNo=empNo;

    }

    public int getSal(int empNo){
        if(this.empNo==empNo)
        return sal;
        else return -1;
    }
    public int  setSal(int amt,int empNo){
        if(this.empNo==empNo)
        {sal+=amt;
        return sal;}
        else return -1;
    }


}

