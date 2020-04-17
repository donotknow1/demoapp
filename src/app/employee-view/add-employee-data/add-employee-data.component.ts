import { Component, OnInit } from '@angular/core';
import { EmpservicceService } from '../../empservicce.service';

@Component({
  selector: 'app-add-employee-data',
  templateUrl: './add-employee-data.component.html',
  styleUrls: ['./add-employee-data.component.css']
})
export class AddEmployeeDataComponent implements OnInit {

  private emp:any={};
  
  constructor(private empService:EmpservicceService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.empService.save(this.emp).subscribe();
  }

}
