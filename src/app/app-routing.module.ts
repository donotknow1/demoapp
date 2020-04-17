import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './ecommerce/products/products.component';
import { CartComponentComponent } from './ecommerce/cartProducts/cart-component/cart-component.component';
import { AdminviewComponent } from './ecommerce/admin/adminview/adminview.component';
import { ProductCategoryComponent } from './ecommerce/productCategory/product-category/product-category.component';
import { UseraddressComponent } from './ecommerce/address/useraddress/useraddress.component';
import { SignupComponent } from './ecommerce/SignUp/signup/signup.component';
import { LoginComponent } from './ecommerce/Login/login/login.component';


const routes: Routes = [

  {path: 'app-products',component:ProductsComponent},
  {path: 'app-cart-component', component:CartComponentComponent},
  {path: 'app-adminview', component:AdminviewComponent},
  {path:'app-product-category',component:ProductCategoryComponent},
  {path: 'app-login', component:LoginComponent},
  {path:'app-signup',component:SignupComponent},
  {path: 'app-useraddress', component:UseraddressComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
