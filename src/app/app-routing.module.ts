import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeDataComponent } from './employee-view/add-employee-data/add-employee-data.component';
import { DeleteEmployeeDataComponent } from './employee-view/delete-employee-data/delete-employee-data.component';
import { UpdateEmployeeDataComponent } from './employee-view/update-employee-data/update-employee-data.component';
import { GetEmployeeDataComponent } from './employee-view/get-employee-data/get-employee-data.component';
import { DisplayEmployeelistComponent } from './employee-view/display-employeelist/display-employeelist.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { CartComponentComponent } from './ecommerce/cartProducts/cart-component/cart-component.component';
import { AdminviewComponent } from './ecommerce/admin/adminview/adminview.component';
import { ProductCategoryComponent } from './ecommerce/productCategory/product-category/product-category.component';
import { UseraddressComponent } from './ecommerce/address/useraddress/useraddress.component';
import { SignupComponent } from './ecommerce/SignUp/signup/signup.component';
import { LoginComponent } from './ecommerce/Login/login/login.component';


const routes: Routes = [
  {path: 'app-add-employee-data', component: AddEmployeeDataComponent },
  {path: 'app-delete-employee-data', component: DeleteEmployeeDataComponent },
  {path: 'app-update-employee-data', component: UpdateEmployeeDataComponent },
  {path: 'app-get-employee-data', component: GetEmployeeDataComponent },
  {path: 'app-display-employeelist', component: DisplayEmployeelistComponent },
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
