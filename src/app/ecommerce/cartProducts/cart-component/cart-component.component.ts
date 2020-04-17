import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { EcommerceServicceService } from 'src/app/ecommerce-servicce.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {


  cartData:any=[];
  
  constructor( private eComservice:EcommerceServicceService,private httpClient:HttpClient){
    for ( var j = 0, len = localStorage.length; j < len; j++ ) 
    {   
     var object1   = JSON.parse(localStorage.getItem(localStorage.key( j )));   
     this.cartData.push(object1[0]);
     }
  }

  ngOnInit() {
   

    }

 /*Quantity Increment Button On Click*/
  incrementValue(p:any) {
   this.eComservice.cartData(p);
   p.quantity++;
   }
  /*End Of Increment Button*/

  /*Quantity Decrement Button On Click*/
  decrementValue(p:any){
   this.eComservice.cartQtyDec(p);
   p.quantity--;  
  }
  /*End Of Decrement Button*/


  removeValues(p:any){
    alert("Do you Want Remove :"+( p.productName));
    console.log("RemoveData:",p.productId);
    localStorage.removeItem((p.productId).toString());
    window.location.reload();
    
  }







  }
