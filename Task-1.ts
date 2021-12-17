class Customer
{
    custid:number;
    custname:string;
    custcity:string;
    constructor(custid:number=0,custname:string="",custcity:string="")
    {
        this.custid=custid;
        this.custname=custname;
        this.custcity=custcity;
    }
    showDetails()
    {
        console.log(`Customer Details :: Id : ${this.custid}, Name : ${this.custname}, City : ${this.custcity}`);
    }
}

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, "Scott");
let c4:Customer = new Customer(10256, "Scott", "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
