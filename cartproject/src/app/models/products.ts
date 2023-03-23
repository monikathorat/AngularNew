// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     quantity?: number;
//   }
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}


export interface CartItem {
  product: Product;
  quantity: number;
}



export interface login {
    email: String;
    password: String;
  }
  
  // export interface product{
  //   name:string,
  //   price:number,
  //   category:string,
  //   color:string,
  //   image:string,
  //   description:string,
  //   id:number,
  //   quantity:undefined | number,
  //   productId:undefined|number
  // }
  export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
  }
  