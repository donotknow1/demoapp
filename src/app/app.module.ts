import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';




import { AppComponent } from './app.component';
import { EmpservicceService} from './empservicce.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './ecommerce/products/products.component';
import { CartComponentComponent } from './ecommerce/cartProducts/cart-component/cart-component.component';
import { EcommerceServicceService } from './ecommerce-servicce.service';
import { AdminviewComponent } from './ecommerce/admin/adminview/adminview.component';
import { ProductCategoryComponent } from './ecommerce/productCategory/product-category/product-category.component';
import { LoginComponent } from './ecommerce/Login/login/login.component';
import { SignupComponent } from './ecommerce/SignUp/signup/signup.component';
import { UseraddressComponent } from './ecommerce/address/useraddress/useraddress.component';
import { SearchComponent } from './ecommerce/productsSearch/search/search.component';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    
    ProductsComponent,
    
    CartComponentComponent,
    
    AdminviewComponent,
    
    ProductCategoryComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    UseraddressComponent,
    
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [EmpservicceService,EcommerceServicceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
