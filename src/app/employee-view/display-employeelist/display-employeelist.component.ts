import { Component, OnInit } from '@angular/core';
import { EmpservicceService } from '../../empservicce.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-display-employeelist',
  templateUrl: './display-employeelist.component.html',
  styleUrls: ['./display-employeelist.component.css']
})
export class DisplayEmployeelistComponent implements OnInit {

  private employee:Employee[];
  constructor(private empService:EmpservicceService) { }

  ngOnInit() {
  this.empService.findAll().subscribe(data => {
    console.log(data);
    this.employee = data;
  });
  }

}
