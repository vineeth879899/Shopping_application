import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any =[];
  public grandtotal !: number;
  orderProducts : any;
  
  constructor(private router: Router, private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cartService.getTotalPrice();
    })
  }
  inc(item : any){

    if(item.quantity !=5){
      this.cartService.addtoCart
      item.quantity +=1;
      item.total = 0;
      item.total = item.quantity * item.price;
    }

    // for (let i = 0; i < this.product.length; i++) {

    //   this.grandtotal= this.grandtotal+ (this.product[i].quantity*this.product[i].price);
      
    // }
    this.grandtotal=this.cartService.getTotalPrice();

    return item.quantity ;
  }
  dec(item : any){
    if(item.quantity !=1){
    item.quantity -=1;
    item.total = item.quantity * item.price
    }

    this.grandtotal=this.cartService.getTotalPrice();
     
    
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart(); 
  }

  gotohome(){
    this.router.navigateByUrl("/homepage");
  }

  order(){
    
 
    if(confirm("do you want to confirm order?")){
      const userJson = localStorage.getItem("orders");
      this.orderProducts = userJson !== null ? JSON.parse(userJson) : null;
     if(this.orderProducts != null)
     {
      localStorage.clear();
      for(let i= 0 ; i < this.product.length; i ++){
        this.orderProducts.push(this.product[i]);
      }
      localStorage.setItem('orders', JSON.stringify( this.orderProducts))
      this.emptyCart();
      this.router.navigateByUrl("/orders");

     }
     else{
      localStorage.setItem( "orders", JSON.stringify(this.product))
      this.emptyCart();
      this.router.navigateByUrl("/orders");
      
     }

  }
  }
  logout(){
    this.router.navigateByUrl("/login");
    window.alert("sucessfully logged out");
  }

}
