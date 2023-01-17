import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceEngComponent } from './work-experience-eng.component';

describe('WorkExperienceEngComponent', () => {
  let component: WorkExperienceEngComponent;
  let fixture: ComponentFixture<WorkExperienceEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
