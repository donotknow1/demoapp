import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {



  productCategory:any=[];


  constructor(private http:HttpClient) { }

  ngOnInit() {
         this.http.get("./assets/productCategory.json").subscribe(
           d=>{
             this.productCategory = d;
             console.log(this.productCategory);
           }
         );

         
  }

}
