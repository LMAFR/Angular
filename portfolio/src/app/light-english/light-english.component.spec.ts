import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightEnglishComponent } from './light-english.component';

describe('LightEnglishComponent', () => {
  let component: LightEnglishComponent;
  let fixture: ComponentFixture<LightEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
