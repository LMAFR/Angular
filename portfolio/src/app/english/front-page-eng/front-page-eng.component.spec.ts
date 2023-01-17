import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageEngComponent } from './front-page-eng.component';

describe('FrontPageEngComponent', () => {
  let component: FrontPageEngComponent;
  let fixture: ComponentFixture<FrontPageEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
