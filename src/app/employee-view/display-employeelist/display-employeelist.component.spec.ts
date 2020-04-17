import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeelistComponent } from './display-employeelist.component';

describe('DisplayEmployeelistComponent', () => {
  let component: DisplayEmployeelistComponent;
  let fixture: ComponentFixture<DisplayEmployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
