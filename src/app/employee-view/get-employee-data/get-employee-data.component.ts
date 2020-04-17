import { Component, OnInit } from '@angular/core';
import { EmpservicceService } from '../../empservicce.service';

@Component({
  selector: 'app-get-employee-data',
  templateUrl: './get-employee-data.component.html',
  styleUrls: ['./get-employee-data.component.css']
})
export class GetEmployeeDataComponent implements OnInit {

  private empData:any={};
private ids:string;
private idNumber:number;
  constructor(private empService:EmpservicceService) { }

  ngOnInit() {
  }


  public onGetById(id: string) {
    this.idNumber =parseInt(id);
    console.log(this.idNumber);
    this.empService.getById(this.idNumber).subscribe(d=>{console.log(d)
    
    this.empData=d;
    });
  }

}
