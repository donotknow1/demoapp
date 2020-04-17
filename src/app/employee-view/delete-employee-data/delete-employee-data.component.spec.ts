import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeDataComponent } from './delete-employee-data.component';

describe('DeleteEmployeeDataComponent', () => {
  let component: DeleteEmployeeDataComponent;
  let fixture: ComponentFixture<DeleteEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
