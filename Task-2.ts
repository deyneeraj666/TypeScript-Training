class Product
{
    readonly productId:number;
    private productName:string;
    private unitPrice:number;
    private quantity:number;

    constructor(productId?:number)
    {
        this.productId=productId;
    }

    public get ProductId():number
    {
        return this.productId;
    }

    public get ProductName():string
    {
        return this.productName;
    }
    public set ProductName(value:string)
    {
        this.productName = value;
    }

    public set UnitPrice(value:number)
    {
        this.unitPrice = value;
    }
    public get UnitPrice():number
    {
        return this.unitPrice;
    }

    public set Qauntity(value:number)
    {
        this.quantity = value;
    }
    public get Quantity():number
    {
        return this.quantity;
    }

   
}
let prod:Product=new Product(1);
prod.ProductName="Robert";
prod.UnitPrice=100;
prod.Qauntity=10;
console.log(
`Product Id:${prod.ProductId} ,Product Name: ${prod.ProductName}, 
Product Unit Price : ${prod.UnitPrice}, Product Quantity :${prod.Quantity}`);
