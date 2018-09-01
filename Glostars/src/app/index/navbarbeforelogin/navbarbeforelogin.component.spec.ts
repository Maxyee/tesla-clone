import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbeforeloginComponent } from './navbarbeforelogin.component';

describe('NavbarbeforeloginComponent', () => {
  let component: NavbarbeforeloginComponent;
  let fixture: ComponentFixture<NavbarbeforeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarbeforeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarbeforeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
