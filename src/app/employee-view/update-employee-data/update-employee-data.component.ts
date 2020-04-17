import { Component, OnInit } from '@angular/core';
import { EmpservicceService } from '../../empservicce.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-update-employee-data',
  templateUrl: './update-employee-data.component.html',
  styleUrls: ['./update-employee-data.component.css']
})
export class UpdateEmployeeDataComponent implements OnInit {

  employee:Employee;
  private empData:any={};
  private emplData:any={};
   empid:number;
  constructor(private empService:EmpservicceService) { }

  ngOnInit() {}
       onGetById(empid){
       this.empService.getById(empid)
      .subscribe(d=>{
        this.empData=d;
      });
      }


      onUpdate(emp:Employee){
        
        this.empService.updateById(this.empData.id,emp).subscribe(d=>{
          this.emplData=d;});
        
      }

}
