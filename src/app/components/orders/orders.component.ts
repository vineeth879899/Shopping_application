import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public product : any=[];
  public grandtotal!: number;
  constructor(private router: Router, private cartService : CartService) { }

  ngOnInit(): void {
     this.cartService.getProducts()
     .subscribe(res=>{
       this.product=res;
   })
const userJson = localStorage.getItem("orders");
this.product = userJson !== null ? JSON.parse(userJson) : null;
  this.grandtotal=this.cartService.getTotalOrderPrice();

  }
  logout(){
    this.router.navigateByUrl("/login");
    window.alert("sucessfully logged out");
  }

}
