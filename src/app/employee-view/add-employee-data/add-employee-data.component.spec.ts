import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeDataComponent } from './add-employee-data.component';

describe('AddEmployeeDataComponent', () => {
  let component: AddEmployeeDataComponent;
  let fixture: ComponentFixture<AddEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
