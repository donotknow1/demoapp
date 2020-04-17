import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpservicceService} from './empservicce.service';
import { FormsModule } from '@angular/forms';
import { DisplayEmployeelistComponent } from './employee-view/display-employeelist/display-employeelist.component';
import { DeleteEmployeeDataComponent } from './employee-view/delete-employee-data/delete-employee-data.component';
import { UpdateEmployeeDataComponent } from './employee-view/update-employee-data/update-employee-data.component';
import { AddEmployeeDataComponent } from './employee-view/add-employee-data/add-employee-data.component';
import { GetEmployeeDataComponent } from './employee-view/get-employee-data/get-employee-data.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './ecommerce/products/products.component';

import { CartComponentComponent } from './ecommerce/cartProducts/cart-component/cart-component.component';
import { EcommerceServicceService } from './ecommerce-servicce.service';
import { AdminviewComponent } from './ecommerce/admin/adminview/adminview.component';
import { ProductCategoryComponent } from './ecommerce/productCategory/product-category/product-category.component';
import { LoginComponent } from './ecommerce/Login/login/login.component';
import { SignupComponent } from './ecommerce/SignUp/signup/signup.component';
import { UseraddressComponent } from './ecommerce/address/useraddress/useraddress.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmployeelistComponent,
    DeleteEmployeeDataComponent,
    UpdateEmployeeDataComponent,
    AddEmployeeDataComponent,
    GetEmployeeDataComponent,
    ProductsComponent,
    
    CartComponentComponent,
    
    AdminviewComponent,
    
    ProductCategoryComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    UseraddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpservicceService,EcommerceServicceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
