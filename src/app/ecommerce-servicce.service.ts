import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServicceService {



final:string;

  constructor() { }

myMessage = new Subject<string>();
qtyValue = new Subject<string>();


//Sending Data To AppComponent Cart
getMessage(): Observable<string> {
  return this.myMessage.asObservable();
  
}

//Sending Data To AppComponent Cart
getQtyValue(): Observable<string> {
  return this.qtyValue.asObservable();
  
}

  cartData(products:any){
    var productData=[];
  productData.push(products);
  
  productData.forEach(data=>{

    let keyValue = data.productId;
    var initalval = localStorage.getItem(keyValue);

    if(initalval != null)
    {
      var prodData = JSON.parse(initalval);
      console.log( 'prodData.quantity'+ prodData);
      prodData[0].quantity = prodData[0].quantity + 1;
      console.log("prodData[0].quantity",prodData[0].quantity);
      this.qtyValue.next(prodData[0].quantity);
      localStorage.setItem(keyValue,JSON.stringify(prodData));
    }
    else
    {
      productData[0].quantity = 1;
      localStorage.setItem(keyValue,JSON.stringify(productData));
    }
    console.log('**All Values Start**');
    var cartSize = localStorage.length;
    this.myMessage.next(cartSize.toString());
    for ( var j = 0, len = localStorage.length; j < len; ++j ) 
    { 
      console.log(j + ' : ' + localStorage.getItem(localStorage.key( j )));     
    }
    console.log('**End**');
  });
  }




  //While Decerement Value
  cartQtyDec(products:any){
    var productData=[];
  productData.push(products);
  
  productData.forEach(data=>{

    let keyValue = data.productId;
    var initalval = localStorage.getItem(keyValue);

    if(initalval != null)
    {
      var prodData = JSON.parse(initalval);
      console.log( 'prodData.quantity'+ prodData);
      prodData[0].quantity = prodData[0].quantity - 1;
      console.log("prodData[0].quantity",prodData[0].quantity);
      this.qtyValue.next(prodData[0].quantity);
      localStorage.setItem(keyValue,JSON.stringify(prodData));
    }
    else
    {
      productData[0].quantity = 1;
      localStorage.setItem(keyValue,JSON.stringify(productData));
    }
    console.log('**All Values Start**');
    var cartSize = localStorage.length;
    this.myMessage.next(cartSize.toString());
    for ( var j = 0, len = localStorage.length; j < len; ++j ) 
    { 
      console.log(j + ' : ' + localStorage.getItem(localStorage.key( j )));     
    }
    console.log('**End**');
  });
  }
}
