import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
{ path: 'login', component : LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'homepage', component: HomepageComponent},
{ path: 'header', component: HeaderComponent},
{ path: 'cart', component: CartComponent},
{ path: 'orders', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
