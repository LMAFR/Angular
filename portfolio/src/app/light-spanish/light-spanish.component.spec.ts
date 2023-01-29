import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSpanishComponent } from './light-spanish.component';

describe('LightSpanishComponent', () => {
  let component: LightSpanishComponent;
  let fixture: ComponentFixture<LightSpanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightSpanishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
