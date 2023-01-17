import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEngComponent } from './contact-eng.component';

describe('ContactEngComponent', () => {
  let component: ContactEngComponent;
  let fixture: ComponentFixture<ContactEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
