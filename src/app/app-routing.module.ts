import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ProductsComponent } from './products/products.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { IphonesComponent } from './iphones/iphones.component'
import { IpadComponent} from './ipad/ipad.component'
import {MacbookComponent} from './macbook/macbook.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'ourproducts',
    component: ProductsComponent, children: [{
      path: 'iphone',
      component: IphonesComponent,
    },
    {
      path: 'ipad',
      component: IpadComponent,
    },
    {
      path:'macbook',
      component: MacbookComponent,
    },
    {
      path:'',
      redirectTo:'/ourproducts/iphone',
      pathMatch:'full',
    }
    ]
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full',
  },
  {
    path:'**',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
