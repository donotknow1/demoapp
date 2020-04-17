import { Component, OnInit } from '@angular/core';
import { EmpservicceService } from '../../empservicce.service';

@Component({
  selector: 'app-delete-employee-data',
  templateUrl: './delete-employee-data.component.html',
  styleUrls: ['./delete-employee-data.component.css']
})
export class DeleteEmployeeDataComponent implements OnInit {


  
  constructor(private empService:EmpservicceService) { }

  ngOnInit() {
  }

  onSubmit(id:number){
    this.empService.deleteById(id).subscribe();
  }

}
