import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EcommerceServicceService } from 'src/app/ecommerce-servicce.service';
import { Products } from '../productsData/products';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];

  cartData:any=[];
  
 
  constructor(private httpClient:HttpClient,private eservice:EcommerceServicceService) { }

  ngOnInit() {
    for ( var j = 0, len = localStorage.length; j < len; j++ ) 
    {  
     var object1   = JSON.parse(localStorage.getItem(localStorage.key( j )));   
     this.cartData.push(object1[0]);
     }

    this.httpClient.get("./assets/productsData.json").subscribe(d=>{
         this.products=d;
         this.products.products.forEach(element => {
          this.cartData.forEach(data=>{
          if(element.productId == data.productId){
            element.quantity = data.quantity;
          }

        });
        
      });
     
     });


    
   
  }

 
 //Adding Data on Click
onButtonClickData(p:Products){
  console.log(p);
  this.eservice.cartData(p);

}



//productQty:string;
    /*Quantity Increment Button On Click*/
     incrementValue(p:any) {
       p.quantity++; 
        this.eservice.cartData(p);
        
     }
    /*End Of Increment Button*/

    /*Quantity Decrement Button On Click*/
    decrementValue(p:any){
      console.log("HereDecrementValue",p);
      this.eservice.cartQtyDec(p);
       p.quantity--;  
    }
    /*End Of Decrement Button*/


 

  

}
