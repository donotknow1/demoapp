import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeDataComponent } from './get-employee-data.component';

describe('GetEmployeeDataComponent', () => {
  let component: GetEmployeeDataComponent;
  let fixture: ComponentFixture<GetEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
