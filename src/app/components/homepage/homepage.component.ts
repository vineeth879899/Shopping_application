import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public cartItemList: any=[]
  public productList : any ;
/* A TypeScript feature called non-null assertion operator. It is used to tell the compiler that the
variable will never be null. */
  grandtotal!: number;
  constructor(private api : ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.api.getProdut()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
       /* Adding two properties to the object. */
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addtoCart(item : any){
    this.cartService.addtoCart(item);
    item.total = item.quantity * item.price;
    if(this.productList.find((x:any) => x.id == item.id)){
     // this.cartItemList.find((x:any) => x.id == product.id).quantity ++
     item.total = item.quantity * item.price;
     this.grandtotal=this.cartService.getTotalPrice();
    }
    else{
      item.total = item.quantity * item.price;
      this.grandtotal=this.cartService.getTotalPrice();
    }
    //this.grandtotal=this.cartService.getTotalPrice();
  }

}
