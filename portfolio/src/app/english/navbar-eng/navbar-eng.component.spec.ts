import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEngComponent } from './navbar-eng.component';

describe('NavbarEngComponent', () => {
  let component: NavbarEngComponent;
  let fixture: ComponentFixture<NavbarEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
