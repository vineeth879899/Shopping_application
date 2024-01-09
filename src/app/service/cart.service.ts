import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any=[]
  public productList = new BehaviorSubject<any>([]);
  orderProducts:any;
  constructor() { }
  getProducts(){
    return this.productList.asObservable();  //acts as getter(get data)
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);       //acts as setter
  }

   addtoCart(product : any){
    console.log(this.cartItemList)
    
    // for(let i=0;i<this.cartItemList;i++){
    //   if(product.id == this.cartItemList[i].id){
    //     this.cartItemList[i].quantity[i] +=1;
    //   }
    //   else

    // }

    if(this.cartItemList.find((x:any) => x.id == product.id)){
      // if the item has already been added then it increases the quantity of item in cart
      this.cartItemList.find((x:any) => x.id == product.id).quantity ++ 
    }
    
    else{
      // if the item not added then it adds to cart
      this.cartItemList/* Adding the product to the cartItemList. */
      .push(product);
    }
/* Updating the cartItemList with the new item. */
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
    this.getTotalPrice();
    
  }
  getTotalPrice() : number {
   let grandTotal=0;
   console.log(this.cartItemList)
   this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
   })
   console.log(grandTotal,"plus2");
   return grandTotal;
  }


  getTotalOrderPrice() : number {
    let grandTotal=0;
    const userJson = localStorage.getItem("orders");
    this.orderProducts = userJson !== null ? JSON.parse(userJson) : null;
    console.log(this.orderProducts,"orderProducts")
    this.orderProducts.map((a:any)=>{
     grandTotal += a.total;
    })
    console.log(grandTotal,"plus2");
 
    return grandTotal;
   }

  removeCartItem(product: any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id=== a.id){
        this.cartItemList/* `.splice` is used to remove the item from the array. */
        .splice(index,1);
      }
    })
/* `BehaviorSubject` is a type of `Subject` that allows us to push and pull values to the underlying
Observable. */
    this.productList.next(this.cartItemList);
  }
 
  removeAllCart(){
    this.cartItemList =[]
    this.productList.next(this.cartItemList);
  }

set(key: string, value : any){
  localStorage.setItem(key,JSON.stringify(value));
}

// get(key: string) : any{
//   return JSON.parse(localStorage.getItem(key));
// }

}
