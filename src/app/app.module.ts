import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetalsComponent } from './product-detals/product-detals.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IphonesComponent } from './iphones/iphones.component';
import { IpadComponent } from './ipad/ipad.component';
import { MacbookComponent } from './macbook/macbook.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetalsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    IphonesComponent,
    IpadComponent,
    MacbookComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
