import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ProductsComponent} from './products/products.component'
import {AboutusComponent} from './aboutus/aboutus.component'
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'ourproducts',
    component:ProductsComponent,
  },
  {
    path:'aboutus',
    component:AboutusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
